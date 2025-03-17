import { defineConfig } from 'vitepress'

// import llmsPlugin from 'vitepress-plugin-llmstxt'
// import llmsPlugin from '../../dist/main.mjs'
import llmsPlugin from '../../src/main'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
	title : 'Test',
	vite  : { plugins : [
		llmsPlugin( {
			hostname  : 'https://example.com',
			indexTOC  : true,
			transform : async ( { page } ) => {

				if ( page.path === '/llms.txt' )
					page.content = `Structured information designed to provide useful metadata to large language models (LLMs)\n\n` + page.content

				return page

			},
		} ),
	] },
	sitemap : { hostname: 'https://example.com' },
} )
