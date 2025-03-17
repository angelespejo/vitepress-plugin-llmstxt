import { defineConfig }             from '@dovenv/core'
import { pigeonposseMonorepoTheme } from '@dovenv/theme-pigeonposse'

import core from './const.js'

export default defineConfig(
	pigeonposseMonorepoTheme( {
		core,
		// must be added beacuse default value "dovenv lint eslint --fix --silent" because is not installed
		lint : { staged: { '**/*.{js,ts,jsx,tsx,json}': 'pnpm --silent . lint eslint --fix --silent' } },
	} ),
)
