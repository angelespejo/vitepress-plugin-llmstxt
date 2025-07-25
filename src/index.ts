import {
	ContentData,
	createContentLoader,
	SiteConfig,
} from 'vitepress'

import {
	Any,
	IndexTOC,
	LlmsConfig,
	LlmsPageData,
	PageData,
	VitePlugin,
	VPConfig,
} from './types'
import {
	ensureDir,
	joinUrl,
	join,
	dirname,
	writeFile,
	removeFrontmatter,
	overrideFrontmatter,
	PLUGIN_NAME,
	log,
	getMDTitleLine,
} from './utils'

export type { LlmsConfig }

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
const markdownPathToUrlRoute  = ( path: string ) => {

	// const basePath = path.endsWith( '/' ) ? path : path + '/'
	const route = path.endsWith( '.md' ) ? path.slice( 0, -3 ) : path
	return route.startsWith( '/' ) ? route : '/' + route

}

// const urlRoute2MarkdownPath = ( route: string ) => {

// 	const basePath = route.endsWith( '/' ) ? route.slice( 0, -1 ) : route
// 	const path     = basePath.endsWith( '.md' ) ? basePath : basePath + '.md'

// 	return path.startsWith( '/' ) ? path.slice( 1 ) : path

// }

/**
 * Sorts an array of ContentData objects by their URL in descending order.
 *
 * @param   {ContentData[]} content - The array of ContentData objects to be sorted.
 * @returns {ContentData[]}         The sorted array of ContentData objects.
 */

const orderContent = ( content: ContentData[] ) =>
	content.sort( ( a, b ) => b.url.localeCompare( a.url ) )

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

		const page  = vpConfig?.dynamicRoutes.routes[key]
		const route = markdownPathToUrlRoute( page.route )

		const content =  pages.find( p => p.url === route )

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

	return orderContent( res )

}

const transformPages = async ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	if ( !config?.transform ) return pages

	for ( const key in pages ) {

		const tRes = await config?.transform( {
			page  : pages[key],
			pages : pages,
			vpConfig,
			utils : {
				getIndexTOC : ( type: IndexTOC ) => getIndex( pages, { llmsFile: { indexTOC: type } }, vpConfig ),
				removeFrontmatter,
			},
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
		const indexP = pages.find( d => d.path === ( '/' + LLM_FILENAME ) )
		if ( !indexP ) return res

		const title    =  getMDTitleLine( indexP.content )
		const h        = '#'.repeat( title && title !== '' ? 2 : 1 )
		const webLinks = pages.filter( d => !d.path.endsWith( '.txt' ) ).map( p => `- [${p.title}](${p.url})` ).join( '\n' )
		const llmLinks = pages.filter( d => !d.path.endsWith( '.txt' ) ).map( p => `- [${p.title}](${p.llmUrl})` ).join( '\n' )

		res += `${h} Table of contents\n${vpConfig?.userConfig.description ? '\n' + vpConfig?.userConfig.description.trimEnd() + '\n' : ''}`

		if ( indextoc === 'only-web' ) res += `\n${h}# Web links\n\n${webLinks}`
		else if ( indextoc === 'only-web-links' ) res = webLinks
		else if ( indextoc === 'only-llms' ) res += `\n${h}# LLMs links\n\n${llmLinks}`
		else if ( indextoc === 'only-llms-links' ) res  = llmLinks
		else res += `\n${h}# Web links\n\n${webLinks}\n\n${h}# LLMs links\n\n${llmLinks}`

		return res

	}
	catch ( _ ) {

		return ''

	}

}

const setIndex = ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	const indextoc = typeof config?.llmsFile === 'object' ? config?.llmsFile?.indexTOC : config?.llmsFile
	if ( !indextoc ) return pages
	return pages.map( d => {

		if ( d.path !== ( '/' + LLM_FILENAME ) ) return d
		const index = getIndex( pages, config, vpConfig )
		if ( index && index !== '' ) d.content += `\n${index}`
		d.content = d.content.trim()
		return d

	} )

}
const getPagesData = async ( pages: PageData[], originURL: string, config?: LlmsConfig, vpConfig?: VPConfig ) => {

	// eslint-disable-next-line prefer-const
	let res: LlmsPageData[] = [],
		fullContent         = ''

	if ( config?.llmsFile ) {

		const path  = '/' + LLM_FILENAME
		const extra = {
			URL      : join( originURL, path ),
			LLMS_URL : join( originURL, path ),
		}

		res.push( {
			path,
			url         : extra.URL,
			llmUrl      : extra.LLMS_URL,
			content     : fullContent,
			title       : getMDTitleLine( fullContent ) || '',
			frontmatter : extra,
		} )

	}

	if ( config?.mdFiles ) {

		for ( const page of pages.slice().reverse() ) {

			const content = page.src
			const route   = page.url

			const pathname = page.url.replace( '.html', '' )

			const path         = join( ( pathname === '/' ? '/index' : pathname.endsWith( '/' ) ? pathname.slice( 0, -1 ) : pathname ) + '.md' )
			const URL          = joinUrl( originURL, route )
			const LLMS_URL     = joinUrl( originURL, path )
			const frontmatter  = {
				URL,
				LLMS_URL,
				...page.frontmatter,
			}
			const finalContent = overrideFrontmatter( content || '', frontmatter )

			res.push( {
				path,
				url     : URL,
				llmUrl  : LLMS_URL,
				content : finalContent,
				title   : page.frontmatter.title || getMDTitleLine( finalContent ) || page.frontmatter.layout || '',
				frontmatter,
			} )

			fullContent += `${finalContent}\n\n`

		}

	}
	if ( config?.llmsFullFile ) {

		const path  = '/' + LLM_FULL_FILENAME
		const extra = {
			URL      : join( originURL, path ),
			LLMS_URL : join( originURL, path ),
		}

		res.push( {
			path,
			url         : extra.URL,
			llmUrl      : extra.LLMS_URL,
			content     : fullContent,
			title       : getMDTitleLine( fullContent ) || '',
			frontmatter : extra,
		} )

	}

	const resT = await transformPages( res, config, vpConfig )
	const resI = setIndex( resT, config, vpConfig )
	return resI

}
const addVPConfigLllmData = ( data: LlmsPageData[] | undefined, vpConfig?: SiteConfig ) => {

	if ( vpConfig ) vpConfig.site.themeConfig.llmstxt = { pageData: data }

}

/**
 * [VitePress](http://vitepress.dev/) plugin for generating "llms.txt" files automatically
 *
 * @param   {LlmsConfig} [config] - Plugin configuration
 * @returns {VitePlugin}          - Vite plugin
 * @see https://github.com/angelespejo/vitepress-plugin-llmstxt
 * @see https://llmstxt.org/
 */
export const llmstxtPlugin = ( config?: LlmsConfig ): VitePlugin => {

	const {
		llmsFullFile = true,
		llmsFile = true,
		mdFiles = true,
		hostname = '/',
		dynamicRoutes = true,
	} = config || {}

	const c = {
		...config,
		dynamicRoutes,
		llmsFullFile,
		llmsFile,
		mdFiles,
		hostname,
	}

	let vpConfig: SiteConfig | undefined = undefined
	return {
		name    : PLUGIN_NAME,
		enforce : 'pre',
		async configureServer( server ) {

			const pages = await getPages( c, vpConfig )
			const data  = await getPagesData(
				pages,
				c.hostname,
				c,
				vpConfig,
			)
			addVPConfigLllmData( data, vpConfig )

			server.middlewares.use( async ( req, res, next ) => {

				const urlPath = req?.url

				if ( !urlPath || !( urlPath.endsWith( '.txt' ) || urlPath.endsWith( '.md' ) ) ) return next()

				const url = await ( async () => ( new URL( joinUrl( server.resolvedUrls?.local[0] || process.env.HOST || 'localhost', urlPath ) ) ) )().catch( undefined )
				if ( !url ) return next()

				try {

					const data = await getPagesData(
						pages,
						c.hostname,
						c,
						vpConfig,
					)

					for ( const d of data ) {

						const llmRoute = [
							join( '/', d.path ),
							join( '/', d.path, 'index.md' ),
							join( '/', d.path + '.md' ),
							join( '/', d.path + '.html' ),
							join( '/', d.path + '.html', 'index.md' ),
						]

						if ( llmRoute.includes( url.pathname ) ) {

							res.setHeader( 'Content-Type', 'text/markdown' )
							res.end( d.content )
							// log.info( `Serving ${url.pathname}` )
							return

						}

					}

				}
				catch ( e ) {

					log.warn( e instanceof Error ? e.message : 'Unexpected error' )

				}
				next()

			} )

		},
		async configResolved( params ) {

			if ( vpConfig ) return

			vpConfig = 'vitepress' in params ? params.vitepress as SiteConfig : undefined

			if ( !vpConfig ) return

			const pages = await getPages( c, vpConfig )
			const data  = await getPagesData(
				pages,
				c.hostname,
				c,
				vpConfig,
			)
			addVPConfigLllmData( data, vpConfig )

			const selfBuildEnd = vpConfig.buildEnd
			const outDir       = vpConfig.outDir

			vpConfig.buildEnd = async siteConfig => {

				await selfBuildEnd?.( siteConfig )
				const pages = await getPages( c, vpConfig )
				const data  = await getPagesData(
					pages,
					c.hostname,
					c,
					vpConfig,
				)

				for ( const page of data ) {

					const dir = join( outDir, dirname( page.path ) )

					await ensureDir( dir )
					await writeFile( join( outDir, page.path ), page.content, 'utf-8' )

				}

				log.success( 'LLM routes builded susccesfully ✨\n' )

			}

		},

	}

}

export default llmstxtPlugin
