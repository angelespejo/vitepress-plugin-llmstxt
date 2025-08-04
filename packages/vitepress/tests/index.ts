
import {
	test,
	expect,
} from '@playwright/test'

import { getConfigValue } from './docs/.vitepress/utils'

const key = process.env.TEST_CONFIG
if ( !key ) throw new Error( 'No config provided. Use --config=<key>' )

const value = getConfigValue( key )
if ( !value ) throw new Error( `Config "${key}" not found` )

value.test?.( {
	expect,
	test,
} )
