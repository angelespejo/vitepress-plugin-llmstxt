import DefaultTheme from 'vitepress/theme'
import { h }        from 'vue'

import Llmstxt from './components/llmstxt.vue'

/** @type {import('vitepress').Theme} */
export default {
	extends : DefaultTheme,
	Layout( ) {

		return h( DefaultTheme.Layout, null, { 'aside-outline-after': () => h( Llmstxt ) } )

	},

}
