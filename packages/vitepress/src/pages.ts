import { createContentLoader } from 'vitepress'

import {
	joinUrl,
	join,
	removeFrontmatter,
	overrideFrontmatter,
	getMDTitleLine,
	markdownPathToUrlRoute,
} from './utils'

import type {
	Any,
	IndexTOC,
	LlmsConfig,
	LlmsPageData,
	PageData,
	VPConfig,
} from './types'

const LLM_FILENAME      = 'llms.txt' as const
const LLM_FULL_FILENAME = 'llms-full.txt' as const

const replaceMarkdownTemplate = (
	template: string,
	params: Record<string, Any>,
	frontmatter: Record<string, Any>,
	content?: string,
): string => {

	try {

		return template
			.replace( /\{\{\s*\$params\.(\w+)\s*\}\}/g, ( _, key ) => params[key] ?? '' )
			.replace( /\{\{\s*\$frontmatter\.(\w+)\s*\}\}/g, ( _, key ) => frontmatter[key] ?? '' )
			.replace( /<!--\s*@content\s*-->/g, content ?? '' )

	}
	catch ( _e ) {

		return template

	}

}

/**
 * Sorts an array of PageData objects by their URL in descending order.
 *
 * @param   {PageData[]} content - The array of PageData objects to be sorted.
 * @returns {PageData[]}         The sorted array of PageData objects.
 */

const orderContent = ( content: PageData[] ) =>
	content.sort( ( a, b ) => b.url.localeCompare( a.url ) )

const transformPages = async ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	if ( !config?.transform ) return pages

	const utils = {
		getIndexTOC : ( type: IndexTOC ) => getIndex( pages, { llmsFile: { indexTOC: type } }, vpConfig ),
		removeFrontmatter,
	}

	for ( const key in pages ) {

		const tRes = await config?.transform( {
			page  : pages[key],
			pages : pages,
			vpConfig,
			utils,
		} )
		if ( tRes ) pages[key] = tRes

	}

	return pages

}

const getIndex = ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	try {

		let res        = ''
		const indextoc = typeof config?.llmsFile === 'object' ? config?.llmsFile?.indexTOC : config?.llmsFile
		if ( !indextoc ) return res

		const h        = '#'.repeat( 1 )
		const webLinks = pages.filter( d => !d.path.endsWith( '.txt' ) ).map( p => `- [${p.title}](${p.url})` ).join( '\n' )
		const llmLinks = pages.filter( d => !d.path.endsWith( '.txt' ) ).map( p => `- [${p.title}](${p.llmUrl})` ).join( '\n' )

		res += `${h} Table of contents\n${vpConfig?.userConfig.description ? '\n' + vpConfig?.userConfig.description.trimEnd() + '\n' : ''}`

		if ( indextoc === 'only-web' ) res += `\n${h}# Web links\n\n${webLinks}`
		else if ( indextoc === 'only-web-links' ) res = webLinks
		else if ( indextoc === 'only-llms' && config?.mdFiles ) res += `\n${h}# LLMs links\n\n${llmLinks}`
		else if ( indextoc === 'only-llms-links' && config?.mdFiles ) res  = llmLinks
		else res += `\n${h}# Web links\n\n${webLinks}${config?.mdFiles ? `\n\n${h}# LLMs links\n\n${llmLinks}` : ''}`

		return res

	}
	catch ( _ ) {

		return ''

	}

}

const getPages = async ( config?: LlmsConfig, vpConfig?: VPConfig ) => {

	const loader = createContentLoader( '**/*.md', {
		includeSrc  : true,
		excerpt     : true,
		globOptions : config?.ignore
			? { ignore : [
				'node_modules',
				'dist',
				...config.ignore,
			] }
			: undefined,
	} )

	const pages = await loader.load()

	if ( !vpConfig?.dynamicRoutes.routes || config?.dynamicRoutes === false ) return orderContent( pages )

	const dynamicPaths: string[] = []

	for ( const key in vpConfig?.dynamicRoutes.routes ) {

		const page    = vpConfig?.dynamicRoutes.routes[key]
		const route   = markdownPathToUrlRoute( page.route )
		const content =  pages.find( p => p.url.replace( '.html', '' ) === route )

		if ( !content || !content.src ) continue

		dynamicPaths.push( content.url )
		pages.push( {
			excerpt     : undefined,
			frontmatter : {},
			html        : undefined,
			url         : markdownPathToUrlRoute( page.path ),
			src         : replaceMarkdownTemplate( content.src, page.params, {}, page.content ),
		} )

	}

	const res = dynamicPaths.length ? pages.filter( p => dynamicPaths.includes( p.url ) ? undefined : p ) : pages
	// console.log( res.map( p => p.url ), dynamicPaths )
	return orderContent( res )

}

export const getPagesData = async ( config: Omit<LlmsConfig, 'hostname'> & { hostname: string }, vpConfig?: VPConfig ) => {

	const pages                    = await getPages( config, vpConfig )
	const originURL                = config.hostname
	const mdFiles : LlmsPageData[] = []
	const allFiles: LlmsPageData[] = []

	for ( const page of pages.slice().reverse() ) {

		const route       = page.url
		const pathname    = route.replace( '.html', '' )
		const path        = join( ( pathname === '/' ? '/index' : pathname.endsWith( '/' ) ? pathname.slice( 0, -1 ) : pathname ) + '.md' )
		const URL         = joinUrl( originURL, route )
		const LLMS_URL    = joinUrl( originURL, path )
		const frontmatter = {
			URL,
			LLMS_URL,
			...page.frontmatter,
		}

		const content = overrideFrontmatter( page.src || '', frontmatter )

		mdFiles.push( {
			path,
			url     : URL,
			llmUrl  : LLMS_URL,
			content : content,
			title   : page.frontmatter.title || getMDTitleLine( content ) || page.frontmatter.layout || '',
			frontmatter,
		} )

	}

	if ( config?.llmsFullFile ) {

		const path    = '/' + LLM_FULL_FILENAME
		const extra   = {
			URL      : join( originURL, path ),
			LLMS_URL : join( originURL, path ),
		}
		const content = mdFiles.map( d => d.content ).join( '\n\n' )
		allFiles.push( {
			path,
			url         : extra.URL,
			llmUrl      : extra.LLMS_URL,
			content     : content,
			title       : getMDTitleLine( content ) || '',
			frontmatter : extra,
		} )

	}

	if ( config.mdFiles ) allFiles.push( ...mdFiles )

	if ( config?.llmsFile ) {

		const path    = '/' + LLM_FILENAME
		const extra   = {
			URL      : join( originURL, path ),
			LLMS_URL : join( originURL, path ),
		}
		const content = getIndex( mdFiles, config, vpConfig ).trim()

		allFiles.push( {
			path,
			url         : extra.URL,
			llmUrl      : extra.LLMS_URL,
			content,
			title       : getMDTitleLine( content ) || '',
			frontmatter : extra,
		} )

	}

	const res = await transformPages( allFiles, config, vpConfig )

	// console.log( {
	// 	config,
	// 	mdFilesNumber  : mdFiles.length,
	// 	allFilesNumber : res.length,
	// 	mdFiles        : mdFiles.map( d => d.url ),
	// 	allPaths       : res.map( d => d.url ),
	// } )

	return res

}
