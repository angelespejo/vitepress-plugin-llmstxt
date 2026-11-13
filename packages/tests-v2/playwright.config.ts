import { defineConfig } from '@playwright/test'

import base from '../vitepress/playwright.config'

// Use a different port than `packages/vitepress` so both test suites can run
// in parallel without interfering with each other.
const port = Number( process.env.TEST_PORT ?? 5174 )

export default defineConfig( {
	...base,
	webServer : {
		command             : `pnpm dev --port=${port} --config=${process.env.TEST_CONFIG}`,
		port,
		reuseExistingServer : !process.env.CI,
	},
} )
