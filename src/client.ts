
import {
	useRoute,
	useData,
} from 'vitepress'

import type { LlmsPageData } from './types'

/**
 * Returns all the LLMs data from all pages.
 *
 * @returns {LlmsPageData[] | undefined} The LLMs data from all pages.
 */
export const getAllData = (): LlmsPageData[] | undefined => {

	const { theme } = useData()

	return theme.value.llmstxt.pageData

}

/**
 * Gets the LLMs data for the current route.
 *
 * @returns {LlmsPageData | undefined} The LLMs data for the current route.
 */
export const getRouteData = () => {

	try {

		const route    = useRoute()
		const data     = getAllData()
		const routPath = route.path.endsWith( '/' ) ? route.path.slice( 0, -1 ) : route.path
		return data?.find( d => d.url === routPath )

	}
	catch ( e ) {

		console.warn( 'No route data found', e )
		return

	}

}
