import { defineConfig } from '@playwright/test'

export default defineConfig( {
	timeout   : 20000, // 20s por test
	testDir   : 'tests',
	testMatch : [ 'tests/index.ts' ],

	webServer : {
		command             : `pnpm dev --port=5173 --config=${process.env.TEST_CONFIG}`,
		port                : 5173,
		reuseExistingServer : !process.env.CI,
	},
	use : {
		browserName : 'chromium',
		headless    : true,
		screenshot  : 'off',
	},
} )
