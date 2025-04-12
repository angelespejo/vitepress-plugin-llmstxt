/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'vitepress'

import llmsPlugin from '../../src/main' // CHANGE TO: import llmsPlugin from 'vitepress-plugin-llmstxt'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
	title     : 'Test',
	cleanUrls : true,
	vite      : { plugins : [
		llmsPlugin( {
			//////////////////////////////////////////////////////
			// Add a custom hostname if needed
			// hostname  : 'https://example.com',
			//////////////////////////////////////////////////////
			// Add a Table of Contents in index llms.txt if needed
			indexTOC  : true,
			//////////////////////////////////////////////////////
			// Transform the page content if needed
			transform : async ( {
				page, utils,
			} ) => {

				// Add a content before llms.txt content
				if ( page.path === '/llms.txt' )
					page.content = `Structured information designed to provide useful metadata to large language models (LLMs)\n\n` + page.content
				// if ( page.path === '/llms-full.txt' ) page.content = utils.removeFrontmatter( page.content )
				// Add a title and an index table of contents in llms-full.txt
				// if ( page.path === '/llms-full.txt' )
				// 	page.content = '# LLMS Full\n\n' + utils.getIndexTOC( 'only-llms' ) + '\n\n' + page.content
				return page

			},
			//////////////////////////////////////////////////////
			// The plugin will ignore all files that match the pattern
			// The files to ignore should be a global pattern of the local 'md' documentation files.
			// IMPORTANT: "import { createContentLoader } from 'vitepress'" is used to get the md files, so the pattern cannot start with '/'.
			//             [read more](https://vitepress.dev/guide/data-loading#createcontentloader)
			ignore : [ '*/guide/core/api.md' ],
		} ),
	] },
} )
