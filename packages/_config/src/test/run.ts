
import { exec } from '../_shared/index.ts'

import type { TestConfig } from './config/types'

export type RunTestsOptions<PluginConfig, VPUserConfig> = {
	config : TestConfig<PluginConfig, VPUserConfig>
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
 *       pluginConfig: undefined,
 *       test: (utils) => {
 *       },
 *     },
 *   },
 * });
 */
export const runTests = async <PluginConfig, VPUserConfig>( data: RunTestsOptions<PluginConfig, VPUserConfig> ) => {

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

