/* eslint-disable @stylistic/object-curly-newline */
import type {
	ContentData,
	SiteConfig,
	UserConfig,
} from 'vitepress'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any

export type PageData = ContentData
export type VitePlugin = NonNullable<NonNullable<UserConfig['vite']>['plugins']>[number]
export type VPConfig = SiteConfig
export type LlmsPageData = {
	path        : string
	url         : string
	title       : string
	llmUrl      : string
	frontmatter : Record<string, Any>
	content     : string
}
export type IndexTOC = boolean | 'only-llms' | 'only-llms-links' | 'only-web' | 'only-web-links'
export type LlmsClientPageData = {
	path   : string
	url    : string
	llmUrl : string
}
export type LlmsClientConfig = {
	pageData? : LlmsClientPageData[]
}
export type LlmsConfig = {
	/**
	 * Hostname
	 *
	 * @example 'https://example.org'
	 */
	hostname? : string
	/**
	 * An array of glob patterns to ignore.
	 *
	 * @example ["**\/guide/api.md"]
	 */
	ignore?   : string[]
	/**
	 * Build `llms.txt` file
	 *
	 * @default true
	 */
	llmsFile?: boolean | {
		/**
		 * Add index table of content in index 'llms.txt' file.
		 * - _'only-llms'_ - Only title with LLMs links
		 * - _'only-web'_ - Only title with web links
		 * - _'only-llms-links'_ - Only LLMs links
		 * - _'only-web-links'_ - Only web links
		 * - _true_ - both
		 * - _false_ - none
		 */
		indexTOC : IndexTOC
	}
	/**
	 * Support dynamic routes
	 *
	 * @default true
	 * @see https://vitepress.dev/guide/routing#dynamic-routes
	 */
	dynamicRoutes? : boolean
	/**
	 * Build `llms-full.txt` file
	 *
	 * @default true
	 */
	llmsFullFile?  : boolean
	/**
	 * Build `.md` file for each route
	 *
	 * @default true
	 */
	mdFiles?       : boolean
	/**
	 * Watch for changes in pages in development mode
	 * If set to true, llms files will be recompiled on changes in pages
	 *
	 * @default false
	 */
	watch?         : boolean
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
