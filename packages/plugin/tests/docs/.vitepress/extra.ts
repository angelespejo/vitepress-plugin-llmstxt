import type {
	SiteConfig, Plugin,
} from 'vitepress'

export const buildEndPlugin = ( fn: ( siteConfig: SiteConfig ) => void | Promise<void> ): Plugin => {

	let siteConfig: SiteConfig | undefined = undefined
	return {
		name : 'buildEndPlugin',
		async configResolved( params ) {

			if ( siteConfig ) return
			siteConfig = 'vitepress' in params ? params.vitepress as SiteConfig : undefined
			if ( !siteConfig ) return
			const selfBuildEnd = siteConfig.buildEnd

			siteConfig.buildEnd = async siteConfig => {

				await selfBuildEnd?.( siteConfig )
				await fn( siteConfig )

			}

		},
	}

}

export const buildEndTextPlugin = ( txt: string ) =>
	buildEndPlugin( c => c.logger.info( txt ) )

