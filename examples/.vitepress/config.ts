import { defineConfig } from 'vitepress'

import llmsPlugin from '../../src/main'
// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
	title : 'Test',
	vite  : { plugins : [
		llmsPlugin( {
			hostname : 'https://example.com',
			indexTOC : true,

		} ),
	] },
	sitemap : { hostname: 'https://example.com' },
} )
