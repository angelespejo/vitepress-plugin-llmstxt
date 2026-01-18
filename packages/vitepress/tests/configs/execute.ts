import { getConfigValue } from './get'

export const executeConfigFromEnv = async () => {

	const key = process.env.TEST_CONFIG
	if ( !key ) throw new Error( 'No config provided. Use --config=<key>' )

	const value = getConfigValue( key )
	if ( !value ) throw new Error( `Config "${key}" not found` )

	const {
		expect, test,
	} = await import( '@playwright/test' )

	value.test?.( {
		expect,
		test,
	} )

}
