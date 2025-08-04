
import {
	ConfigExamples,
	TestFn,
} from './types'

const testforTextPath = ( path: string ): TestFn => utils => {

	utils.test( `Should exists "${path}"`, async ( { page } ) => {

		const response = await page.goto( path )
		utils.expect( response?.ok() ).toBeTruthy()
		const content = await page.textContent( 'body' )
		utils.expect( content?.trim().length ).toBeGreaterThan( 0 )

	} )

}
const testforTextPathThatContains = ( path: string, opts: {
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
const testfor404page = ( path: string ): TestFn => utils => {

	utils.test( `Should NOT exists "${path}"`, async ( { page } ) => {

		const response = await page.goto( path )
		utils.expect( response?.ok() ).toBeTruthy()

		const h1     = page.locator( 'h1' )
		const h1Text = await h1.textContent()

		utils.expect( h1Text?.trim() ).toBe( 'PAGE NOT FOUND' )

	} )

}

const CONSTANTS = {
	llmslinksTitle            : '## LLMs links',
	webLinkTitle              : '## Web links',
	homeLinkText              : '- [home](/)',
	homeLinkMdText            : '- [home](/index.md)',
	contributorsLinkText      : '- [contributors](/contributors)',
	contributorsLinkMdText    : '- [contributors](/contributors.md)',
	constributorsLinkHtmlText : '- [contributors](/contributors.html)',
	dynamicRouteMD            : '/dynamic/1.md',
} as const

export const configs: ConfigExamples = {
	DEFAULT : {
		llmsConfig : undefined,
		test       : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )

		},
	},
	NO_LLMS_FILE : {
		llmsConfig : { llmsFile: false },
		test       : utils => {

			testfor404page( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )

		},
	},
	NO_LLMS_FULL_FILE : {
		llmsConfig : { llmsFullFile: false },
		test       : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )
			testfor404page( '/llms-full.txt' )( utils )

		},
	},
	NO_MD_FILES : {
		llmsConfig : { mdFiles: false },
		test       : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testfor404page( '/guide.md' )( utils )

		},
	},
	ONLY_MD_FILES : {
		llmsConfig : {
			llmsFullFile : false,
			llmsFile     : false,
			mdFiles      : true,
		},
		test : utils => {

			testfor404page( '/llms-full.txt' )( utils )
			testfor404page( '/llms.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )

		},
	},
	ONLY_LLMS_FILE : {
		llmsConfig : {
			llmsFile     : true,
			llmsFullFile : false,
			mdFiles      : false,
		},
		test : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testfor404page( '/llms-full.txt' )( utils )
			testfor404page( '/guide.md' )( utils )

		},
	},
	ONLY_LLMS_FULL_FILE : {
		llmsConfig : {
			llmsFullFile : true,
			llmsFile     : false,
			mdFiles      : false,
		},
		test : utils => {

			testforTextPath( '/llms-full.txt' )( utils )
			testfor404page( '/llms.txt' )( utils )
			testfor404page( '/guide.md' )( utils )

		},
	},
	LLMS_TOC_ONLY_LLMS : {
		llmsConfig : { llmsFile: { indexTOC: 'only-llms' } },
		test       : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : true,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : false,
				},
			] )( utils )

		},
	},
	LLMS_TOC_ONLY_WEB : {
		llmsConfig : { llmsFile: { indexTOC: 'only-web' } },
		test       : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : true,
				},
				{
					content : CONSTANTS.constributorsLinkHtmlText,
					exists  : true,
				},
			] )( utils )

		},
	},
	LLMS_TOC_ONLY_WEB_LINKS : {
		llmsConfig : { llmsFile: { indexTOC: 'only-web-links' } },
		test       : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.homeLinkText,
					exists  : true,
				},
			] )( utils )

		},
	},
	LLMS_TOC_ONLY_LLMS_LINKS : {
		llmsConfig : { llmsFile: { indexTOC: 'only-llms-links' } },
		test       : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.homeLinkMdText,
					exists  : true,
				},
			] )( utils )

		},
	},
	LLMS_TOC_NONE : {
		llmsConfig : {
			llmsFile  : { indexTOC: false },
			transform : ( { page } ) => {

				if ( page.path === '/llms.txt' )
					page.content = `# LLMS\n\nStructured information designed to provide useful metadata to large language models (LLMs)\n\n`

				return page

			},
		},
		test : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : false,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : false,
				},
				{
					content : '# LLMS',
					exists  : true,
				},
			] )( utils )

		},
	},
	CLEAN_URLS : {
		vpConfig : { cleanUrls: true },
		test     : utils => {

			testforTextPathThatContains( '/llms.txt', [
				{
					content : CONSTANTS.llmslinksTitle,
					exists  : true,
				},
				{
					content : CONSTANTS.webLinkTitle,
					exists  : true,
				},
				{
					content : CONSTANTS.contributorsLinkText,
					exists  : true,
				},
				{
					content : CONSTANTS.contributorsLinkMdText,
					exists  : true,
				},
			] )( utils )

		},
	},
	IGNORE_DYNAMIC_ROUTES : {
		llmsConfig : { dynamicRoutes: false },
		test       : utils => {

			testfor404page( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	IGNORE_GUIDE_CORE_API : {
		llmsConfig : { ignore: [ '**/guide/**' ] },
		test       : utils => {

			testfor404page( '/guide/core.md' )( utils )

		},
	},
}
