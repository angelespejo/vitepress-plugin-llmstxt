import { styleText } from 'node:util'

import { PLUGIN_NAME } from './const'

const green  = ( v: string ) => styleText( 'green', v )
const bold   = ( v: string ) => styleText( 'bold', v )
const red    = ( v: string ) => styleText( 'red', v )
const yellow = ( v: string ) => styleText( 'yellow', v )

/**
 * Utility object for standardized plugin logging.
 * Provides formatted console output for success, error, warning, and info messages.
 */
export const log = {
	/**
	 * Logs a success message to the console with a green checkmark.
	 *
	 * @param   {string} v - The message string to display.
	 * @returns {void}
	 */
	success : ( v: string ): void => console.log( green( '✓ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),

	/**
	 * Logs an error message to the console with a red cross.
	 *
	 * @param   {string} v - The message string to display.
	 * @returns {void}
	 */
	error : ( v: string ): void => console.log( red( '✗ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),

	/**
	 * Logs a warning message to the console with a yellow warning icon.
	 *
	 * @param   {string} v - The message string to display.
	 * @returns {void}
	 */
	warn : ( v: string ): void => console.log( yellow( '⚠ ' + bold( PLUGIN_NAME ) + ' ' + v ) ),

	/**
	 * Logs an informational message to the console.
	 *
	 * @param   {string} v - The message string to display.
	 * @returns {void}
	 */
	info : ( v: string ): void => console.log( 'i ' + bold( PLUGIN_NAME ) + ' ' + v ),
}
