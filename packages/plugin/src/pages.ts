import {
	createContentLoader,
	type ResolvedRouteConfig,
} from 'vitepress'

import {
	removeFrontmatter,
	overrideFrontmatter,
	getMDTitleLine,
	markdownPathToUrlRoute,
	replaceMarkdownTemplate,
} from './_shared/md'
import { joinUrl } from './_shared/string'

import type {
	IndexTOC,
	LlmsConfig,
	LlmsPageData,
	PageData,
	VPConfig,
} from './types'

const LLM_FILENAME      = 'llms.txt' as const
const LLM_FULL_FILENAME = 'llms-full.txt' as const

/**
 * Sorts an array of PageData objects by their URL in descending order.
 *
 * @param   {PageData[]} content - The array of PageData objects to be sorted.
 * @returns {PageData[]}         The sorted array of PageData objects.
 */
const orderContent = ( content: PageData[] ) =>
	content.sort( ( a, b ) => b.url.localeCompare( a.url ) )

const getIndex = ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	try {

		let res        = ''
		const indextoc = typeof config?.llmsFile === 'object' ? config?.llmsFile?.indexTOC : config?.llmsFile
		if ( !indextoc ) return res

		const h              = '#'.repeat( 1 )
		const web: string[]  = []
		const llms: string[] = []

		for ( const p of pages ) if ( !p.path.endsWith( '.txt' ) ) {

			web.push( `- [${p.title}](${p.url})` )
			llms.push( `- [${p.title}](${p.llmUrl})` )

		}

		const webLinks   = web.join( '\n' )
		const llmLinks   = llms.join( '\n' )
		const desc       = vpConfig?.userConfig.description?.trimEnd()
		const header     = `${h} Table of contents\n${desc ? '\n' + desc + '\n' : ''}`
		const setContent = ( title: string, content: string ) => `\n${h}# ${title}\n\n${content}`

		res += header
		if ( indextoc === 'only-web' ) res += setContent( 'Web links', webLinks )
		else if ( indextoc === 'only-web-links' ) res = webLinks
		else if ( indextoc === 'only-llms' && config?.mdFiles ) res += setContent( 'LLMs links', llmLinks )
		else if ( indextoc === 'only-llms-links' && config?.mdFiles ) res  = llmLinks
		else res += `${setContent( 'Web links', webLinks )}${config?.mdFiles ? `\n${setContent( 'LLMs links', llmLinks )}` : ''}`

		return res

	}
	catch ( _ ) {

		return ''

	}

}

const transformPages = async ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	const _transform = config?.transform
	if ( !_transform ) return pages

	const utils = {
		getIndexTOC : ( type: IndexTOC ) => getIndex( pages, {
			...config,
			llmsFile : { indexTOC: type },
		}, vpConfig ),
		removeFrontmatter,
	}

	return Promise.all( pages.map( async page => await _transform( {
		page,
		pages,
		vpConfig,
		utils,
	} ) || page ) )

}

const getDynamicRoutes = ( config?: LlmsConfig, vpConfig?: VPConfig ) => {

	// Handle dynamicRoutes format depending on vpConfig version.
	// In version 2.0.0-alpha, vpConfig.dynamicRoutes is an array directly.
	// In other versions, it's an object with a `routes` property.
	const dynamicRoutes = Array.isArray( vpConfig?.dynamicRoutes )
		? vpConfig.dynamicRoutes as ResolvedRouteConfig[] | undefined
		: vpConfig?.dynamicRoutes?.routes

	if ( !dynamicRoutes || config?.dynamicRoutes === false ) return undefined
	return dynamicRoutes

}

const getPages = async ( config?: LlmsConfig, vpConfig?: VPConfig ) => {

	const loader = createContentLoader( '**/*.md', {
		includeSrc  : true,
		excerpt     : true,
		globOptions : config?.ignore
			? {
				ignore : [
					'node_modules',
					'dist',
					...config.ignore,
				],
			}
			: undefined,
	} )

	const pages         = await loader.load()
	const dynamicRoutes = getDynamicRoutes( config, vpConfig )
	// console.log( vpConfig )
	// console.log( ( await ( createContentLoader( vpConfig?.pages, {
	// 	includeSrc : true,
	// 	excerpt    : true,
	// } ) ).load() ).filter( v => v.url === '/dynamic/1/' ) )
	// console.log( pages.map( v => v.url ).length, dynamicRoutes?.length, vpConfig?.pages.length )

	if ( !dynamicRoutes ) return orderContent( pages )

	const dynamicPaths: string[] = []

	for ( const key in dynamicRoutes ) {

		const page    = dynamicRoutes[key]
		const route   = markdownPathToUrlRoute( page.route )
		const content =  pages.find( p => p.url.replace( '.html', '' ) === route )

		if ( !content || !content.src ) continue

		dynamicPaths.push( content.url )
		pages.push( {
			excerpt     : undefined,
			frontmatter : content.frontmatter || {},
			html        : undefined,
			url         : markdownPathToUrlRoute( page.path ),
			src         : replaceMarkdownTemplate( content.src, page.params, {}, page.content ),
		} )

	}

	const res = dynamicPaths.length ? pages.filter( p => dynamicPaths.includes( p.url ) ? undefined : p ) : pages

	return orderContent( res )

}

type PagesDataConfig = Omit<LlmsConfig, 'hostname'> & { hostname: string }

/**
 * Returns the processed collection of page data for the LLMS plugin,
 * including path normalization, generation of llms.txt and llms-full.txt files,
 * and application of custom transformation hooks.
 *
 * @param   {PagesDataConfig}         config   - Plugin configuration (must include hostname).
 * @param   {VPConfig}                vpConfig - Optional VitePress configuration context.
 * @returns {Promise<LlmsPageData[]>}          The final collection of page data.
 */
export const getPagesData = async ( config: PagesDataConfig, vpConfig?: VPConfig ) => {

	const pages = await getPages( config, vpConfig )

	const getExtraData   = ( urlPath: string, llmsPath?: string ) => ( {
		URL      : joinUrl( config.hostname, urlPath ),
		LLMS_URL : joinUrl( config.hostname, llmsPath || urlPath ),
	} )
	const createFileData = ( data: { content : string
		path                                    : string
		extra                                   : ReturnType<typeof getExtraData>
		title?                                  : string
		frontmatter?                            : LlmsPageData['frontmatter'] },
	): LlmsPageData => ( {
		path        : data.path,
		url         : data.extra.URL,
		llmUrl      : data.extra.LLMS_URL,
		content     : data.content,
		title       : data.title || getMDTitleLine( data.content ) || data.frontmatter?.title || '',
		frontmatter : data.frontmatter || {},
	} )

	const allFiles: LlmsPageData[] = []
	const mdFiles: LlmsPageData[]  = pages.slice().reverse().map( page => {

		const route       = page.url
		const pathname    = route.replace( '.html', '' ).replace( /\/$/, '' ) || '/index'
		const path        = `${pathname}.md`
		const extra       = getExtraData( route, path )
		const frontmatter = {
			...extra,
			...page.frontmatter,
		}
		const content     = overrideFrontmatter( page.src || '', frontmatter )

		return createFileData( {
			path,
			extra,
			content,
			frontmatter,
			title : page.frontmatter.title || getMDTitleLine( content ) || page.frontmatter.layout || '',
		} )

	} )

	if ( config.mdFiles ) allFiles.push( ...mdFiles )

	if ( config?.llmsFullFile ) {

		const path = '/' + LLM_FULL_FILENAME
		allFiles.push( createFileData( {
			path,
			extra   : getExtraData( path ),
			content : mdFiles.map( d => d.content ).join( '\n\n' ),
		} ) )

	}

	if ( config?.llmsFile ) {

		const path = '/' + LLM_FILENAME
		allFiles.push( createFileData( {
			path,
			extra   : getExtraData( path ),
			content : getIndex( mdFiles, config, vpConfig ).trim(),
		} ) )

	}

	const res = await transformPages( allFiles, config, vpConfig )

	// console.log( {
	// 	vpConfig,
	// 	config,
	// 	mdFiles        : mdFiles.map( d => d.url ),
	// 	allPaths       : res.map( d => d.url ),
	// 	pages          : vpConfig?.pages,
	// 	pagesNumber    : vpConfig?.pages.length,
	// 	mdFilesNumber  : mdFiles.length,
	// 	allFilesNumber : res.length,
	// } )

	return res

}
