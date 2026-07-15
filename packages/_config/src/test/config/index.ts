
import { getFlagValue } from '../../_shared/index.ts'

import type { AnyTestConfig } from './types'

export const getConfigValue = <V extends AnyTestConfig>( configs: V, key: string ) => {

	if ( !key ) return undefined
	if ( !Object.keys( configs ).includes( key ) ) return undefined
	return configs[key]

}

export const getConfig = <V extends AnyTestConfig>( configs: V, value?: string ) => {

	const v           = value || getFlagValue( 'config' )
	const keys        = Object.keys( configs )
	const textDefault = `\n\nUsing default config "${keys[0]}".\nAvailable config values: ${keys.join( ', ' )}\n`

	if ( !v ) {

		console.warn( `No config value provided.${textDefault}` )
		return configs[keys[0]]

	}
	else if ( !keys.includes( v ) ) {

		console.warn( `Config "${v}" not found.${textDefault}` )
		return configs[keys[0]]

	}

	console.log( `Using config "${v}".` )
	return configs[v]

}

export const executeConfigFromEnv = async <V extends AnyTestConfig>( configs: V ) => {

	const key = process.env.TEST_CONFIG
	if ( !key ) throw new Error( 'No config provided. Use --config=<key>' )

	const value = getConfigValue<V>( configs, key )
	if ( !value ) throw new Error( `Config "${key}" not found` )

	const {
		expect, test,
	} = await import( '@playwright/test' )

	value.test?.( {
		expect,
		test,
	} )

}
