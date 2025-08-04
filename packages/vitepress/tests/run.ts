
import { spawn } from 'node:child_process'

import { configs } from './configs'

export const exec = async ( cmd: string ): Promise<void> => {

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
const run = async () => {

	for ( const key of Object.keys( configs ) ) {

		console.log( `🔧 Running tests for: ${key}` )
		try {

			await exec( `TEST_CONFIG=${key} npx playwright test` )
			console.log( `✅ Finished: ${key}` )

		}
		catch ( _e ) {

			console.error( `\n❌ Error in ${key}\n` )
			process.exit( 1 )

		}

	}

}

run()
