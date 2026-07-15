import type {
	test,
	expect,
} from '@playwright/test'

export type TestFn = ( utils: {
	test   : typeof test
	expect : typeof expect
} ) => void

export type TestConfig<PluginConfig, VPUserConfig> = Record<string, {
	pluginConfig? : PluginConfig
	vpConfig?     : VPUserConfig
	test?         : TestFn
}>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyTestConfig = TestConfig<any, any>
