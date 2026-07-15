import { getWorkspaceConfig } from '@dovenv/theme-pigeonposse'

export const coreOpts = await getWorkspaceConfig( {
	metaURL  : import.meta.url,
	path     : '../',
	corePath : './packages/plugin',
} )
