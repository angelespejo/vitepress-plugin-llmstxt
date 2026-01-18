import { argv } from 'node:process'

import { configs } from './index' // get configs from Object

const getFlagValue = ( flag: string ) => {

	const prefix = `--${flag}=`
	const arg    = argv.find( arg => arg.startsWith( prefix ) )
	return arg ? arg.slice( prefix.length ) : undefined

}

export const getConfigValue = ( key: string ) => {

	if ( !key ) return undefined
	if ( !Object.keys( configs ).includes( key ) ) return undefined
	return configs[key]

}

export const getConfig = ( value?: string ) => {

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
