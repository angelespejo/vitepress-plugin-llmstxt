import type { LlmsConfig as Config } from '../src'
import type { RunTestsOptions }      from '@vitepress-plugin-llmstxt/repo-config/test/run'
import type { UserConfig }           from 'vitepress'

export type TestConfig = RunTestsOptions<Config, UserConfig>['config']
type TestFn = NonNullable<TestConfig[keyof TestConfig]['test']>

export const testforTextPath = ( path: string ): TestFn => utils => {

	utils.test( `Should exists "${path}"`, async ( { page } ) => {

		const response = await page.goto( path )
		utils.expect( response?.ok() ).toBeTruthy()
		const content = await page.textContent( 'body' )
		utils.expect( content?.trim().length ).toBeGreaterThan( 0 )

	} )

}
export const testforTextPathThatContains = ( path: string, opts: {
	content : string
	exists? : boolean
}[] ): TestFn => utils => {

	utils.test( `Should include specific content in "${path}"`, async ( { page } ) => {

		const response = await page.goto( path )
		utils.expect( response?.ok() ).toBeTruthy()
		const body = await page.textContent( 'body' )

		utils.expect( body ).toBeTruthy()
		for ( const v of opts )
			utils.expect( body?.includes( v.content ) )[v?.exists ? 'toBeTruthy' : 'toBeFalsy']()

	} )

}
export const testfor404page = ( path: string ): TestFn => utils => {

	utils.test( `Should NOT exists "${path}"`, async ( { page } ) => {

		const response = await page.goto( path )
		utils.expect( response?.ok() ).toBeTruthy()

		const h1     = page.locator( 'h1' )
		const h1Text = await h1.textContent()

		utils.expect( h1Text?.trim() ).toBe( 'PAGE NOT FOUND' )

	} )

}
