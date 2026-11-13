import { defineConfig } from '@playwright/test'

// Allow each test package to use its own port. This way, the tests of
// `packages/vitepress` and `packages/tests-v2` can run at the same time
// without fighting for the same dev server port.
const port = Number( process.env.TEST_PORT ?? 5173 )

export default defineConfig( {
	timeout   : 20000, // 20s por test
	testDir   : 'tests',
	testMatch : [ 'tests/index.ts' ],

	webServer : {
		command             : `pnpm dev --port=${port} --config=${process.env.TEST_CONFIG}`,
		port,
		reuseExistingServer : !process.env.CI,
	},
	use : {
		browserName : 'chromium',
		headless    : true,
		screenshot  : 'off',
	},
} )
