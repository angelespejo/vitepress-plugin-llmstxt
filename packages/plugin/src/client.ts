
import type { Any } from './_shared/types'
import type {
	Route,
	VitePressData,
} from 'vitepress'

/**
 * Represents the essential metadata for an LLM-optimized route.
 */
type LLMsRouteData = {
	/** The relative url path of the page. */
	path   : string
	/** The website URL of the page. */
	url    : string
	/** The specific LLM-optimized URL for the page. */
	llmUrl : string
}

/**
 * Configuration data for exposing LLM-related page data to the client-side.
 */
export type LlmsClientConfig = {
	/** Collection of page data to be exposed to the client. */
	pageData? : LLMsRouteData[]
}

/**
 * Gets the LLMs data for the current route.
 *
 * @param   {Route}                     route - The current route.
 * @param   {VitePressData}             data  - The VitePress data.
 * @returns {LLMsRouteData | undefined}       The LLMs data for the current route.
 */
export const useLLMsRouteData = ( route: Route, data: VitePressData ): LLMsRouteData | undefined => {

	try {

		let path = route.path

		const pageData = ( data.theme.value as Any )?.llmstxt?.pageData as LLMsRouteData[]

		path = path.endsWith( '/' ) ? path.slice( 0, -1 ) : path
		return pageData?.find( d => d.url === path )

	}
	catch ( e ) {

		console.warn( 'No route data found', e )
		return

	}

}

