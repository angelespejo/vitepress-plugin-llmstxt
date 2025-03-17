import { createContentLoader } from 'vitepress'

import { name } from '../package.json'
import {
	ensureDir,
	joinUrl,
	join,
	dirname,
	writeFile,
	green,
	bold,
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
	llmUrl      : string
	frontmatter : Record<string, Any>
	content     : string
}

export type LlmsConfig = {
	/**
	 * Hostname
	 */
	hostname?  : string
	/**
	 * An array of glob patterns to ignore.
	 */
	ignore?    : string[]
	/**
	 * An array of glob patterns to search for
	 */
	pattern?   : string[]
	/**
	 * Build only 'llms-full.txt' file
	 * @default false
	 */
	onlyFull?  : boolean
	/**
	 * Add index table of content in index 'llms.txt' file
	 * @default false
	 */
	indexTOC   : boolean
	/**
	 * Callback for transform each page
	 */
	transform? : ( data: {
		page      : LlmsPageData
		pages     : LlmsPageData[]
		vpConfig? : VPConfig
	} ) => Promise<LlmsPageData> | LlmsPageData
}

const LLM_FILENAME      = 'llms.txt' as const
const LLM_FULL_FILENAME = 'llms-full.txt' as const
const PLUGIN_NAME       = name

const addFrontmatter = ( markdown: string, frontmatter: Record<string, unknown> ): string => {

	const frontmatterString = Object.entries( frontmatter )
		.map( ( [ key, value ] ) => `${key}: ${JSON.stringify( value )}` )
		.join( '\n' )

	const frontmatterBlock = `---\n${frontmatterString}\n---\n`

	const hasFrontmatter = markdown.trimStart().startsWith( '---' )

	if ( hasFrontmatter ) {

		const existingFrontmatter = markdown.match( /^---\n([\s\S]*?)\n---\n?/ )

		if ( existingFrontmatter ) {

			const mergedFrontmatter       = {
				...frontmatter,
				...parseFrontmatter( existingFrontmatter[1] ),
			}
			const mergedFrontmatterString = Object.entries( mergedFrontmatter )
				.map( ( [ key, value ] ) => `${key}: ${JSON.stringify( value )}` )
				.join( '\n' )

			return `---\n${mergedFrontmatterString}\n---\n` + markdown.slice( existingFrontmatter[0].length )

		}

	}

	return frontmatterBlock + markdown

}

const parseFrontmatter = ( frontmatter: string ): Record<string, unknown> =>
	frontmatter.split( '\n' ).reduce( ( acc, line ) => {

		const [ key, ...rest ] = line.split( ':' )
		const value            = rest.join( ':' ).trim().replace( /^"|"$/g, '' )
		if ( key ) acc[key.trim()] = value
		return acc

	}, {} as Record<string, unknown> )

const getPages = async ( config?:LlmsConfig ) => {

	const loader = createContentLoader( '**/*.md', {
		includeSrc  : true,
		excerpt     : true,
		globOptions : {
			patterns : config?.pattern,
			ignore   : config?.ignore,
		},
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
		} )
		if ( tRes ) pages[key] = tRes

	}

	return pages

}
const getMDTitleLine = ( markdown: string ): string | undefined => {

	try {

		const match = markdown.match( /^# .*/m )
		return match ? match[0].replace( '#', '' ).trim() : undefined

	}
	catch ( _ ) {

		return undefined

	}

}
const setIndex = async ( pages: LlmsPageData[], config?: LlmsConfig, vpConfig?: VPConfig ) => {

	if ( !config?.indexTOC ) return pages
	return pages.map( d => {

		if ( d.path !== ( '/' + LLM_FILENAME ) ) return d
		const title = getMDTitleLine( d.content )
		const h     = '#'.repeat( title ? 2 : 1 )
		d.content  += `
${h} Table of contents

${vpConfig?.userConfig.description || ''}

${h}# Web links

${pages.map( p => `- [${p.frontmatter.title || getMDTitleLine( p.content ) || p.frontmatter.layout}](${p.url})` ).join( '\n' )}

${h}# LLMs links

${pages.map( p => `- [${p.frontmatter.title || getMDTitleLine( p.content ) || p.frontmatter.layout}](${p.llmUrl})` ).join( '\n' )}
		`
		return d

	} )

}
const getPagesData = async ( pages: PageData[], originURL: string, config?: LlmsConfig, vpConfig?: VPConfig ) => {

	let res: LlmsPageData[] = [],
		fullContent         = ''

	for ( const page of pages.slice().reverse() ) {

		const content      = page.src
		const route        = page.url
		const path         = join( route, LLM_FILENAME )
		const URL          = joinUrl( originURL, route )
		const LLMS_URL     = joinUrl( originURL, path )
		const extra        = {
			URL,
			LLMS_URL,
		}
		const finalContent = addFrontmatter( content || '', extra )

		res.push( {
			path,
			url         : URL,
			llmUrl      : LLMS_URL,
			content     : finalContent,
			frontmatter : {
				...extra,
				...page.frontmatter,
			},
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
		frontmatter : extra,
	} )

	const resT = await transformPages( res, config, vpConfig )
	const resI = await setIndex( resT, config, vpConfig )
	return resI

}

/**
 * [VitePress](http://vitepress.dev/) plugin for generating "llms.txt" files automatically
 * @param {LlmsConfig} [config] - Plugin configuration
 * @returns {VitePlugin} - Vite plugin
 * @see https://github.com/angelespejo/vitepress-plugin-llmstxt
 * @see https://llmstxt.org/
 */
const plugin = ( config?: LlmsConfig ):VitePlugin => {

	let vpConfig: SiteConfig | undefined = undefined
	return {
		name    : PLUGIN_NAME,
		enforce : 'pre',
		async configureServer( server ) {

			const pages = await getPages( config )

			server.middlewares.use( async ( req, res, next ) => {

				// const url = req?.url
				const url = await ( async () => ( new URL( `http://${process.env.HOST ?? 'localhost'}${req.url}` ) ) )().catch( undefined )
				if ( !url ) return next()

				try {

					const data = await getPagesData( pages, config?.hostname || url.origin, config, vpConfig )
					for ( const d of data ) {

						const llmRoute = [
							join( '/', d.path ),
							join( '/', d.path, 'index.md' ),
							join( '/', d.path + '.md' ),
						]
						if ( llmRoute.includes( url.pathname ) ) {

							res.setHeader( 'Content-Type', 'text/markdown' )
							res.end( d.content )
							return

						}

					}

				}
				catch ( e ) {

					console.warn( e instanceof Error ? e.message : 'Unexpected error' )

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
			vpConfig.buildEnd  = async siteConfig => {

				await selfBuildEnd?.( siteConfig )
				const pages = await getPages( config )
				const data  = await getPagesData(
					pages, config?.hostname || '/',
					config,
					vpConfig,
				)

				for ( const page of data ) {

					const path = page.path.replace( '.html', '' )
					const dir  = join( outDir, dirname( path ) )

					await ensureDir( dir )
					await writeFile( join( outDir, path ), page.content, 'utf-8' )

				}
				const title = green( '✓ ' + bold( PLUGIN_NAME ) )
				console.log( `\n${title} LLM routes builded susccesfully ✨\n` )

			}

		},

	}

}

export default plugin
