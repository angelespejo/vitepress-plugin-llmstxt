import { getWorkspaceConfig } from '@dovenv/theme-pigeonposse'

const CONSTS = await getWorkspaceConfig( {
	metaURL : import.meta.url,
	path    : '../',
	// corePath : './packages/core',
} )

export default CONSTS
