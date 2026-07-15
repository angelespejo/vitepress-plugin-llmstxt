
import { runTests } from '@vitepress-plugin-llmstxt/repo-config/test/run'

import { config }          from '../../plugin/tests/config'
import { devDependencies } from '../package.json'

await runTests( {
	config,
	deps : {
		vitepress : devDependencies['vitepress'],
		vue       : devDependencies['vue'],
	},
} )
