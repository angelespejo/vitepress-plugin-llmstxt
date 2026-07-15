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
