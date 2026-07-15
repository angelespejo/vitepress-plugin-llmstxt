import { defineConfig } from 'tsup'

export default defineConfig( {
	entry  : [ 'src/index.ts', 'src/client.ts' ],
	format : [ 'esm' ],
	target : 'es2022',
	dts    : true,
	clean  : true,
	minify : false,
} )
