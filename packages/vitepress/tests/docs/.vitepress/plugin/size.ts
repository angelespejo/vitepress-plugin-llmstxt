import {
	readdir,
	stat,
} from 'node:fs/promises'
import { join }      from 'node:path'
import { styleText } from 'node:util'

import type {
	Plugin,
	SiteConfig,
} from 'vitepress'

const PLUGIN_NAME = 'vitepress-bundle-size-info'
const bold        = ( v: string ) => styleText( 'bold', v )
const success     = ( v: string ) => console.log( styleText( 'green', '✓ ' + bold( PLUGIN_NAME ) + ' ' + v ) )
const setResult   = ( {
	outDir, totalSize,
}: {
	outDir    : string
	totalSize : number
} ) => success( `\n  - ${bold( 'Output dir' )}: ${outDir}\n  - ${bold( 'Final bundle size' )}: ${formatSize( totalSize )}` )

const formatSize = ( bytes: number ): string => {

	const kb = bytes / 1024
	const mb = kb / 1024
	if ( mb >= 1 ) return `${mb.toFixed( 2 )} MB`
	if ( kb >= 1 ) return `${kb.toFixed( 2 )} KB`
	return `${bytes} B`

}

const getDirSize = async ( dir: string ): Promise<number> => {

	let total = 0

	const entries = await readdir( dir, { withFileTypes: true } )
	for ( const entry of entries ) {

		const fullPath = join( dir, entry.name )
		if ( entry.isDirectory() )
			total += await getDirSize( fullPath )
		else if ( entry.isFile() ) {

			const { size } = await stat( fullPath )
			total         += size

		}

	}

	return total

}

export default ( opts?: { outDir?: string } ): Plugin => {

	let vpConfig: SiteConfig | undefined = undefined,
		outDir                        = opts?.outDir ?? 'dist'

	return {
		name  : PLUGIN_NAME,
		apply : 'build',

		configResolved( params ) {

			if ( vpConfig ) return
			vpConfig = 'vitepress' in params ? params.vitepress as SiteConfig : undefined
			if ( !vpConfig ) return
			const buildEnd = vpConfig?.buildEnd

			vpConfig.buildEnd = async c => {

				await buildEnd?.( c )

				outDir          = vpConfig?.outDir ?? outDir
				const totalSize = await getDirSize( outDir )

				setResult( {
					outDir,
					totalSize,
				} )

			}

		},
	}

}
