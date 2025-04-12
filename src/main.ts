import { createContentLoader } from 'vitepress'

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

import type {
	ContentData,
	SiteConfig,
	UserConfig,
} from 'vitepress'

type PageData = ContentData
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any
type VitePlugin = NonNullable<NonNullable<UserConfig['vite']>['plugins']>[number]
type VPConfig = SiteConfig
type LlmsPageData = {
	path        : string
	url         : string
	title       : string
	llmUrl      : string
	frontmatter : Record<string, Any>
	content     : string
}

type IndexTOC = boolean | 'only-llms' | 'only-web'

export type LlmsConfig = {
	/**
	 * Hostname
	 * @example 'https://example.org'
	 */
	hostname?  : string
	/**
	 * An array of glob patterns to ignore.
	 * @example ["**\/guide/api.md"]
	 */
	ignore?    : string[]
	/**
	 * An array of glob patterns to search for
	 */
	// pattern?   : string[]
	/**
	 * Build only 'llms-full.txt' file
	 * @default false
	 */
	onlyFull?  : boolean
	/**
	 * Add index table of content in index 'llms.txt' file.
	 * - _'only-llms'_ - Only title with LLMs links
	 * - _'only-web'_ - Only title with web links
	 * - _true_ - both
	 * - _false_ - none
	 * @default false
	 */
	indexTOC   : IndexTOC
	/**
	 * Callback for transform each page
	 */
	transform? : ( data: {
		page      : LlmsPageData
		pages     : LlmsPageData[]
		vpConfig? : VPConfig
		utils     : {
			getIndexTOC       : ( type: IndexTOC ) => string
			removeFrontmatter : ( content: string ) => string
		}
	} ) => Promise<LlmsPageData> | LlmsPageData
}

const LLM_FILENAME      = 'llms.txt' as const
const LLM_FULL_FILENAME = 'llms-full.txt' as const

const getPages = async ( config?:LlmsConfig ) => {

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

	return pages

}

const transformPages = async ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	if ( !config?.transform  ) return pages

	for ( const key in pages ) {

		const tRes = await config?.transform( {
			page  : pages[key],
			pages : pages,
			vpConfig,
			utils : {
				getIndexTOC : ( type: IndexTOC ) => getIndex(
					pages,
					{ indexTOC: type },
					vpConfig,
				),
				removeFrontmatter,
			},
		} )
		if ( tRes ) pages[key] = tRes

	}

	return pages

}

const getIndex = ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	try {

		let res = ''
		if ( !config?.indexTOC ) return res
		const indexP = pages.find( d => d.path === ( '/' + LLM_FILENAME )  )
		if ( !indexP ) return res

		const title    =  indexP.title
		const h        = '#'.repeat( title && title !== '' ? 2 : 1 )
		const webLinks = `${h}# Web links\n\n${pages.map( p => `- [${p.title}](${p.url})` ).join( '\n' )}`
		const llmLinks = `${h}# LLMs links\n\n${pages.map( p => `- [${p.title}](${p.llmUrl})` ).join( '\n' )}`

		res += `${h} Table of contents\n${vpConfig?.userConfig.description ? '\n' + vpConfig?.userConfig.description  : ''}`

		if ( config.indexTOC === 'only-web' ) res += '\n' + webLinks
		else if ( config.indexTOC === 'only-llms' ) res += '\n' + llmLinks
		else res += '\n' + webLinks + '\n\n' + llmLinks

		return res

	}
	catch ( _ ) {

		return ''

	}

}

const setIndex = ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	if ( !config?.indexTOC ) return pages
	return pages.map( d => {

		if ( d.path !== ( '/' + LLM_FILENAME ) ) return d
		const index = getIndex( pages, config, vpConfig )
		if ( index && index !== '' ) d.content += `\n${index}`

		return d

	} )

}
const getPagesData = async ( pages: PageData[], originURL: string, config?: LlmsConfig, vpConfig?: VPConfig ) => {

	let res: LlmsPageData[] = [],
		fullContent         = ''

	for ( const page of pages.slice().reverse() ) {

		const content      = page.src
		const route        = page.url
		const path         = join( route.replace( '.html', '' ), LLM_FILENAME )
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
	const path  = '/' + LLM_FULL_FILENAME
	const extra = {
		URL      : join( originURL, path ),
		LLMS_URL : join( originURL, path ),
	}

	if ( config?.onlyFull ) res = []

	res.push( {
		path,
		url         : extra.URL,
		llmUrl      : extra.LLMS_URL,
		content     : fullContent,
		title       : getMDTitleLine( fullContent ) || '',
		frontmatter : extra,
	} )

	const resT = await transformPages( res, config, vpConfig )
	const resI = setIndex( resT, config, vpConfig )
	return resI

}

/**
 * [VitePress](http://vitepress.dev/) plugin for generating "llms.txt" files automatically
 * @param {LlmsConfig} [config] - Plugin configuration
 * @returns {VitePlugin} - Vite plugin
 * @see https://github.com/angelespejo/vitepress-plugin-llmstxt
 * @see https://llmstxt.org/
 */
export const llmstxtPlugin = ( config?: LlmsConfig ): VitePlugin => {

	let vpConfig: SiteConfig | undefined = undefined
	return {
		name    : PLUGIN_NAME,
		enforce : 'pre',
		async configureServer( server ) {

			const pages = await getPages( config )

			server.middlewares.use( async ( req, res, next ) => {

				const urlPath = req?.url
				if ( !urlPath || !( urlPath.endsWith( '.txt' ) || urlPath.endsWith( '.md' ) ) ) return next()

				const url = await ( async () => ( new URL( joinUrl( server.resolvedUrls?.local[0] || process.env.HOST || 'localhost', urlPath ) ) ) )().catch( undefined )
				if ( !url ) return next()

				try {

					const data = await getPagesData(
						pages,
						config?.hostname || '/',
						config,
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

			const selfBuildEnd = vpConfig.buildEnd
			const outDir       = vpConfig.outDir

			vpConfig.buildEnd = async siteConfig => {

				await selfBuildEnd?.( siteConfig )
				const pages = await getPages( config )
				const data  = await getPagesData(
					pages,
					config?.hostname || '/',
					config,
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
