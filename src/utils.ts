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

export {
	writeFile,
	join,
	dirname,
}
/**
 * Joins the given URL parts into a single string.
 * @param {string[]} parts - The URL parts to join.
 * @returns {string} - The joined URL string.
 */
export const joinUrl = ( ...parts: string[] ) => {

	parts = parts.map( part => part.replace( /^\/+|\/+$/g, '' ) )

	return parts.join( '/' )

}

/**
 * Checks if a directory exists at the specified path.
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
export const green = ( v: string ) => styleText( 'green', v )
export const bold = ( v: string ) => styleText( 'bold', v )
