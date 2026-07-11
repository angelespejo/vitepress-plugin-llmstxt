import { defineConfig } from '@dovenv/core'
import {
	pigeonposseMonorepoTheme,
	getWorkspaceConfig,
} from '@dovenv/theme-pigeonposse'

const corePath = './packages/vitepress'

export default defineConfig(
	{
		custom : {
			readme : {
				desc : 'Readme file',
				fn   : async props => {

					const {
						copyFile,
						joinPath,
					} = await import( '@dovenv/core/utils' )
					await copyFile( {
						input  : joinPath( props.utils.wsDir, corePath, './README.md' ),
						output : joinPath( props.utils.wsDir, './README.md' ),
					} )
					console.log( 'Readme copied' )

				},
			},
		},
	},
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
		core : await getWorkspaceConfig( {
			metaURL : import.meta.url,
			path    : '../',
			corePath,
		} ),
	} ),
)
