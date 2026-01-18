import type { LlmsConfig } from '../../src'
import type {
	test,
	expect,
} from '@playwright/test'
import type { UserConfig } from 'vitepress'

export type TestFn = ( utils: {
	test   : typeof test
	expect : typeof expect
} ) => void

export type ConfigExmplesValue = {
	llmsConfig? : LlmsConfig
	vpConfig?   : UserConfig
	test?       : TestFn
}

export type ConfigExamples = Record<string, ConfigExmplesValue>
