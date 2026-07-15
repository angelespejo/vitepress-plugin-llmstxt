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

export {
	writeFile,
	join,
	dirname,
}

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

/**
 * Ensures that a directory exists at the specified path.
 *
 * If the directory does not exist, it creates it (including any necessary
 * parent directories). If it already exists, it does nothing.
 *
 * @param   {string}        path - The path of the directory to ensure.
 * @returns {Promise<void>}      A promise that resolves when the directory is verified or created.
 */
export const ensureDir = async ( path: string ) => {

	const exist = await existsDir( path )
	if ( !exist ) await mkdir( path, { recursive: true } )

}

