
import { runTests } from '@vitepress-plugin-llmstxt/repo-config/test/run'

import { devDependencies } from '../package.json'
import { config }          from './config'

await runTests( {
	config,
	deps : {
		vitepress : devDependencies['vitepress'],
		vue       : devDependencies['vue'],
	},
} )
