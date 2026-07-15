
import { getConfig }    from '@vitepress-plugin-llmstxt/repo-config/test/config'
import { defineConfig } from 'vitepress'
import sizePlugin       from 'vitepress-plugin-size'

import { buildEndTextPlugin } from './extra'
import llmsPlugin             from '../../../src/index'
import { config as conf }     from '../../config'

import type { DefaultTheme } from 'vitepress'

const config = getConfig( conf )

const translations = {
	en : {
		guide        : 'Guide',
		contributors : 'Contributors',
		index        : 'Index',
		api          : 'Api',
		core         : 'Core',
		coreExamples : 'Core Examples',
		coreApi      : 'Core API',
		dynamic      : 'Dynamic routes',
	},
	es : {
		guide        : 'Guía',
		contributors : 'Colaboradores',
		index        : 'Índice',
		api          : 'API',
		core         : 'Núcleo',
		coreExamples : 'Ejemplos del Núcleo',
		coreApi      : 'API del Núcleo',
		dynamic      : 'Rutas dinámicas',
	},
}

const getThemeConfig = ( locale: 'en' | 'es' = 'en' ): DefaultTheme.Config => {

	const t      = translations[locale]
	const prefix = locale === 'en' ? '' : `/${locale}`

	return {
		nav : [
			{
				text : t.guide,
				link : `${prefix}/guide/`,
			},
			{
				text : t.contributors,
				link : `${prefix}/contributors/`,
			},
		],
		sidebar : [
			{
				text  : t.guide,
				items : [
					{
						text : t.index,
						link : `${prefix}/guide/`,
					},
					{
						text : t.api,
						link : `${prefix}/guide/api/`,
					},
					{
						text : t.core,
						link : `${prefix}/guide/core/`,
					},
					{
						text : t.coreExamples,
						link : `${prefix}/guide/core/examples/`,
					},
					{
						text : t.coreApi,
						link : `${prefix}/guide/core/api/`,
					},
				],
			},
			{
				text : t.dynamic,
				link : `${prefix}/dynamic/`,
			},
		],
	}

}

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
	title       : 'VitePress Example page',
	description : 'VitePress Plugin for LLMs',
	// ⚠ Marked as experimental for now. Therefore, it is not necessary to apply compatibility to the plugin.
	//rewrites    : { rewritten: 'rewrite' },
	locales     : {
		root : {
			label : 'English',
			lang  : 'en',
		},
		es : {
			label       : 'Español',
			lang        : 'es',
			themeConfig : getThemeConfig( 'es' ),
		},
	},
	themeConfig : getThemeConfig(),
	vite        : {
		plugins : [
			buildEndTextPlugin( 'Before "llmsPlugin" build' ),
			llmsPlugin( { ...config.pluginConfig || {} } ),
			buildEndTextPlugin( 'After "llmsPlugin" build' ),
			buildEndTextPlugin( 'Before "sizePlugin" build' ),
			sizePlugin(),
			buildEndTextPlugin( 'After "sizePlugin" build' ),
		],
	},
	...config.vpConfig || {},
} )
