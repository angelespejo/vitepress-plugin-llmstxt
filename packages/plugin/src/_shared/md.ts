import type { Any } from './types'

/**
 * Replaces any existing frontmatter in the Markdown string with the provided one.
 *
 * If the Markdown already contains a frontmatter block, it is completely removed and
 * replaced by the new frontmatter. If no frontmatter exists, the new one is simply added.
 *
 * @param   {string}                  markdown    - The Markdown content.
 * @param   {Record<string, unknown>} frontmatter - The new frontmatter to insert.
 * @returns {string}                              - The Markdown with the frontmatter overridden.
 */
export const overrideFrontmatter = ( markdown: string, frontmatter: Record<string, unknown> ): string => {

	const toYAML = ( obj: Record<string, unknown>, indent = 0 ): string => {

		const pad = '  '.repeat( indent )

		return Object.entries( obj )
			.map( ( [ key, value ] ) => {

				if ( Array.isArray( value ) ) {

					return `${pad}${key}:\n` + value.map( item => {

						if ( typeof item === 'object' && item !== null ) {

							const nested = toYAML( item as Record<string, unknown>, indent + 2 )
							return `${pad}  - ${nested.trimStart().replace( /^/gm, `${pad}    ` ).replace( `${pad}    `, '' )}`

						}
						else {

							return `${pad}  - ${JSON.stringify( item )}`

						}

					} ).join( '\n' )

				}
				else if ( typeof value === 'object' && value !== null ) {

					return `${pad}${key}:\n${toYAML( value as Record<string, unknown>, indent + 1 )}`

				}
				else {

					return `${pad}${key}: ${JSON.stringify( value )}`

				}

			} )
			.join( '\n' )

	}

	const frontmatterBlock = `---\n${toYAML( frontmatter )}\n---\n\n`

	// Remove existing frontmatter if present
	const cleanedMarkdown = markdown.replace( /^---\n[\s\S]*?\n---\n*/, '' )

	return frontmatterBlock + cleanedMarkdown.trimStart()

}

/**
 * Removes the frontmatter from a Markdown string.
 *
 * This function takes a Markdown string as an argument, and returns
 * the same string but with the frontmatter removed. If the Markdown
 * doesn't contain frontmatter, it returns the original string.
 *
 * @param   {string} markdown - The Markdown content from which the frontmatter will be removed.
 * @returns {string}          - The Markdown content without frontmatter.
 */
export const removeFrontmatter = ( markdown: string ): string => {

	const match = markdown.match( /^---\n([\s\S]*?)\n---\n?/ )
	if ( !match ) return markdown

	return markdown.slice( match[0].length )

}

/**
 * Converts a Markdown file path into a clean URL route.
 *
 * Removes the `.md` extension if present and ensures the path
 * starts with a leading slash (`/`).
 *
 * @param   {string} path - The file path or route string to normalize.
 * @returns {string}      The normalized route ready to be used as a URL (e.g., "/my-page").
 */
export const markdownPathToUrlRoute = ( path: string ) => {

	// const basePath = path.endsWith( '/' ) ? path : path + '/'
	const route = path.endsWith( '.md' ) ? path.slice( 0, -3 ) : path
	// Ensure the route starts with a slash
	return route.startsWith( '/' ) ? route : '/' + route

}

// const urlRoute2MarkdownPath = ( route: string ) => {

// 	const basePath = route.endsWith( '/' ) ? route.slice( 0, -1 ) : route
// 	const path     = basePath.endsWith( '.md' ) ? basePath : basePath + '.md'
// 	return path.startsWith( '/' ) ? path.slice( 1 ) : path

// }

/**
 * Extracts the first H1 title from a Markdown string.
 *
 * Searches for a line starting with `# ` and returns the text content
 * after the hash symbol, trimmed of whitespace.
 *
 * @param   {string}             markdown - The raw Markdown content to parse.
 * @returns {string | undefined}          The extracted title text, or undefined if no H1 title is found.
 */
export const getMDTitleLine = ( markdown: string ): string | undefined => {

	try {

		const match = markdown.match( /^# .*/m )
		return match ? match[0].replace( '#', '' ).trim() : undefined

	}
	catch ( _ ) {

		return undefined

	}

}

/**
 * Processes a Markdown template by injecting dynamic data.
 *
 * @param   {string}              template    - The raw string template containing placeholders.
 * @param   {Record<string, Any>} params      - Key-value pairs for `$params` placeholders.
 * @param   {Record<string, Any>} frontmatter - Metadata for `$frontmatter` placeholders.
 * @param   {string}              [content]   - The main content to inject into the `@content` marker.
 * @returns {string}                          The processed string, or the original template if an error occurs.
 */
export const replaceMarkdownTemplate = (
	template: string,
	params: Record<string, Any>,
	frontmatter: Record<string, Any>,
	content?: string,
): string => {

	try {

		return template
			.replace( /\{\{\s*\$params\.(\w+)\s*\}\}/g, ( _, key ) => params[key] ?? '' )
			.replace( /\{\{\s*\$frontmatter\.(\w+)\s*\}\}/g, ( _, key ) => frontmatter[key] ?? '' )
			.replace( /<!--\s*@content\s*-->/g, content ?? '' )

	}
	catch ( _e ) {

		return template

	}

}
