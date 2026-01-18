
import { configs }         from '../../vitepress/tests/configs'
import { runTests }        from '../../vitepress/tests/shared'
import { devDependencies } from '../package.json'

await runTests( {
	config : configs,
	deps   : {
		vitepress : devDependencies['vitepress'],
		vue       : devDependencies['vue'],
	},
} )
