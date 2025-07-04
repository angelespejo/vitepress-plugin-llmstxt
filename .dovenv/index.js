import { defineConfig } from '@dovenv/core'
import {
	pigeonposseMonorepoTheme,
	getWorkspaceConfig,
} from '@dovenv/theme-pigeonposse'

export default defineConfig(
	pigeonposseMonorepoTheme( { core : await getWorkspaceConfig( {
		metaURL : import.meta.url,
		path    : '../',
		// corePath : './packages/core',
	} ) } ),
)
