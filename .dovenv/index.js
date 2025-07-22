import { defineConfig } from '@dovenv/core'
import {
	pigeonposseMonorepoTheme,
	getWorkspaceConfig,
} from '@dovenv/theme-pigeonposse'

export default defineConfig(
	pigeonposseMonorepoTheme( {
		repo : { commit : { scopes : [
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
		] } },
		lint : { publint: { pkg: { pkgDir: '.' } } },
		core : await getWorkspaceConfig( {
			metaURL : import.meta.url,
			path    : '../',
		// corePath : './packages/core',
		} ),
	} ),
)
