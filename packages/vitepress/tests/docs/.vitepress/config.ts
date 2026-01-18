
import { defineConfig } from 'vitepress'

import bundleSizePlugin from './plugin/size'
import llmsPlugin       from '../../../src/index' // CHANGE TO: import llmsPlugin from 'vitepress-plugin-llmstxt'
import { getConfig }    from '../../configs/get'

const config = getConfig()

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
	title       : 'VitePress Example page',
	description : 'VitePress Plugin for LLMs',
	themeConfig : {
		nav : [
			{
				text : 'Guide',
				link : '/guide/',
			},
			{
				text : 'Contributors',
				link : '/contributors/',
			},
		],
		sidebar : [
			{
				text  : 'Guide',
				items : [
					{
						text : 'Index',
						link : '/guide/',
					},
					{
						text : 'Api',
						link : '/guide/api/',
					},
					{
						text : 'Core',
						link : '/guide/core/',
					},
					{
						text : 'Core Examples',
						link : '/guide/core/examples/',
					},
					{
						text : 'Core API',
						link : '/guide/core/api/',
					},
				],
			},
			{
				text : 'Dynamic routes',
				link : '/dynamic/',
			},
		],
	},
	vite : { plugins: [ llmsPlugin( { ...config.llmsConfig || {} } ), bundleSizePlugin() ] },
	...config.vpConfig || {},
} )
