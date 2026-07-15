import { defineConfig }             from '@dovenv/core'
import { pigeonposseMonorepoTheme } from '@dovenv/theme-pigeonposse'

import { coreOpts } from './core.js'
import readmePlugin from './readme.js'

export default defineConfig(
	readmePlugin,
	pigeonposseMonorepoTheme( {
		repo : {
			commit : {
				scopes : [
					{
						value : 'all',
						title : 'All',
						desc  : 'All: packages + environment',
					},
					{
						value : 'package',
						title : 'Packages',
						desc  : 'Package(s) only',
					},
					{
						value : 'env',
						title : 'Environment',
						desc  : 'Only development environment',
					},
				],
			},
		},
		lint : { publint: { pkg: { pkgDir: '.' } } },
		core : coreOpts,
	} ),
)
