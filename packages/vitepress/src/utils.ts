import {
	access,
	stat,
	writeFile,
	constants,
	mkdir,
} from 'node:fs/promises'
import {
	join,
	dirname,
} from 'node:path'
import { styleText } from 'node:util'

import { name } from '../../../package.json'

export {
	writeFile,
	join,
	dirname,
}

export const PLUGIN_NAME = name

/**
 * ********************************************************************************
 * ********************************************************************************
 * **** STRINGS ******************************************************************
 * ********************************************************************************
 * ********************************************************************************
 */

/**
 * Joins the given URL parts into a single string.
 *
 * @param   {string[]} parts - The URL parts to join.
 * @returns {string}         - The joined URL string.
 */
export const joinUrl = ( ...parts: string[] ) => {

	parts = parts.map( part => part.replace( /^\/+|\/+$/g, '' ) )

	return parts.join( '/' )

}

// /**
//  * Cleans the given URL path by removing leading and trailing slashes.
//  *
//  * @param   {string} path - The URL path to clean.
//  * @returns {string}      - The cleaned URL path without leading or trailing slashes.
//  */

// export const cleanUrlPath = ( path: string ) =>
// 	path.replace( /^\/+|\/+$/g, '' )

// /**
//  * Checks if two file paths are equal after normalization.
//  *
//  * Normalization ensures that differences like trailing slashes or redundant path segments are ignored.
//  *
//  * @param   {string}  pathA - The first file path to compare.
//  * @param   {string}  pathB - The second file path to compare.
//  * @returns {boolean}       - true if the paths are equal, false otherwise.
//  */
// export const matchUrlPath = ( pathA: string, pathB: string ): boolean =>
// 	cleanUrlPath( pathA ) === cleanUrlPath( pathB )

/**
 * ********************************************************************************
 * ********************************************************************************
 * **** MARKDOWN ******************************************************************
 * ********************************************************************************
 * ********************************************************************************
 */

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

export const markdownPathToUrlRoute = ( path: string ) => {

	// const basePath = path.endsWith( '/' ) ? path : path + '/'
	const route = path.endsWith( '.md' ) ? path.slice( 0, -3 ) : path
	return route.startsWith( '/' ) ? route : '/' + route

}

// const urlRoute2MarkdownPath = ( route: string ) => {

// 	const basePath = route.endsWith( '/' ) ? route.slice( 0, -1 ) : route
// 	const path     = basePath.endsWith( '.md' ) ? basePath : basePath + '.md'

// 	return path.startsWith( '/' ) ? path.slice( 1 ) : path

// }

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
 * ********************************************************************************
 * ********************************************************************************
 * **** SYSTEM ********************************************************************
 * ********************************************************************************
 * ********************************************************************************
 */

/**
 * Checks if a directory exists at the specified path.
 *
 * @param   {string}           path - The path to check.
 * @returns {Promise<boolean>}      - A promise that resolves to true if a directory exists at the specified path, otherwise false.
 * @example import { existsDir } from '@dovenv/utils'
 * const exist = await existsDir('./my/dir')
 */
export async function existsDir( path: string ): Promise<boolean> {

	try {

		await access( path, constants.F_OK )
		const stats = await stat( path )
		return stats.isDirectory() // Returns true if it is a directory

	}
	catch ( _error ) {

		return false

	}

}

export const ensureDir = async ( path: string ) => {

	const exist = await existsDir( path )
	if ( !exist ) await mkdir( path, { recursive: true } )

}

/**
 * ********************************************************************************
 * ********************************************************************************
 * **** LOG ***********************************************************************
 * ********************************************************************************
 * ********************************************************************************
 */

const green  = ( v: string ) => styleText( 'green', v )
const bold   = ( v: string ) => styleText( 'bold', v )
const red    = ( v: string ) => styleText( 'red', v )
const yellow = ( v: string ) => styleText( 'yellow', v )

export const log = {
	success : ( v: string ) => console.log( green( '✓ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),
	error   : ( v: string ) => console.log( red( '✗ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),
	warn    : ( v: string ) => console.log( yellow( '⚠ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),
	info    : ( v: string ) => console.log( 'i ' + bold( PLUGIN_NAME ) + ' ' + v ),
}
