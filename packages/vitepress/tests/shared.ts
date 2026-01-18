
import { spawn } from 'node:child_process'

import type { ConfigExamples } from './configs/types'

const exec = async ( cmd: string ): Promise<void> => {

	await new Promise<void>( ( resolve, reject ) => {

		const childProcess = spawn( cmd, {
			shell : true,
			stdio : 'inherit',
		} )

		childProcess.on( 'close', code => {

			if ( code === 0 ) resolve()
			else {

				const error = new Error( `Command failed with code ${code}` )
				reject( error )

			}

		} )

	} )

}

type RunTestsOptions = {
	config : ConfigExamples
	deps?: {
		vue?       : string
		vitepress? : string
	}
}

/**
 * Run tests for all configurations.
 *
 * @param {RunTestsOptions} data - Object with configuration and runner.
 * @example
 * await runTests({
 *   config: {
 *     DEFAULT: {
 *       llmsConfig: undefined,
 *       test: (utils) => {
 *       },
 *     },
 *   },
 * });
 */
export const runTests = async ( data: RunTestsOptions ) => {

	const {
		deps, config,
	} = data

	if ( deps?.vitepress && deps?.vue ) {

		console.log( `🏁 Starting tests...

ℹ️ Information:

  vitepress: ${deps['vitepress']}
  vue:       ${deps['vue']}
` )

	}

	for ( const key of Object.keys( config ) ) {

		console.log( `🔧 Running tests for: ${key}\n` )
		try {

			await exec( `TEST_CONFIG=${key} playwright test` )
			console.log( `\n✅ Test finished: ${key}\n` )

		}
		catch ( _e ) {

			console.error( `\n❌ Error running test "${key}".\n` )

			process.exit( 1 )

		}

	}

}

