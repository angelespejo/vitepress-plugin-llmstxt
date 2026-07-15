import {
	type TestConfig,
	testfor404page,
	testforTextPath,
	testforTextPathThatContains,
} from './_shared'

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

export const config: TestConfig = {
	DEFAULT : {
		pluginConfig : undefined,
		test         : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )
			testforTextPath( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	HOSTNAME : {
		pluginConfig : { hostname: 'https://example.com/' },
		test         : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )
			testforTextPath( CONSTANTS.dynamicRouteMD )( utils )

			utils.test( `Should exists hostname and title frontmatter value in "${CONSTANTS.dynamicRouteMD}"`, async ( { page } ) => {

				const response = await page.goto( CONSTANTS.dynamicRouteMD )
				utils.expect( response?.ok() ).toBeTruthy()
				const content = await page.textContent( 'body' )
				utils.expect( content?.trim() ).toContain( 'LLMS_URL: "https://example.com/dynamic/1.md"\ntitle: "Vitepress Dynamic routes"' )

			} )

		},
	},
	NO_LLMS_FILE : {
		pluginConfig : { llmsFile: false },
		test         : utils => {

			testfor404page( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )
			testforTextPath( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	NO_LLMS_FULL_FILE : {
		pluginConfig : { llmsFullFile: false },
		test         : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/guide.md' )( utils )
			testfor404page( '/llms-full.txt' )( utils )
			testforTextPath( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	NO_MD_FILES : {
		pluginConfig : { mdFiles: false },
		test         : utils => {

			testforTextPath( '/llms.txt' )( utils )
			testforTextPath( '/llms-full.txt' )( utils )
			testfor404page( '/guide.md' )( utils )
			testfor404page( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	ONLY_MD_FILES : {
		pluginConfig : {
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
		pluginConfig : {
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
		pluginConfig : {
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
		pluginConfig : { llmsFile: { indexTOC: 'only-llms' } },
		test         : utils => {

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
		pluginConfig : { llmsFile: { indexTOC: 'only-web' } },
		test         : utils => {

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
		pluginConfig : { llmsFile: { indexTOC: 'only-web-links' } },
		test         : utils => {

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
		pluginConfig : { llmsFile: { indexTOC: 'only-llms-links' } },
		test         : utils => {

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
	LLMS_TRANSFORM_FILES : {
		pluginConfig : {
			transform : ( {
				page, utils,
			} ) => {

				if ( page.path === '/llms.txt' ) {

					const toc    = utils.getIndexTOC( 'only-web' )
					page.content = `# LLMS\n\nStructured information designed to provide useful metadata to large language models (LLMs)\n\n${toc}`

				}
				if ( page.path === '/llms-full.txt' ) {

					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					return undefined as any as typeof page

				}

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
					exists  : true,
				},
				{
					content : '# LLMS',
					exists  : true,
				},
			] )( utils )

			testforTextPathThatContains( '/llms-full.txt', [
				{
					content : '---',
					exists  : true,
				},
			] )( utils )

		},
	},
	LLMS_TOC_NONE : {
		pluginConfig : {
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
		pluginConfig : { dynamicRoutes: false },
		test         : utils => {

			testfor404page( CONSTANTS.dynamicRouteMD )( utils )

		},
	},
	IGNORE_GUIDE_CORE_API : {
		pluginConfig : { ignore: [ '**/guide/**' ] },
		test         : utils => {

			testfor404page( '/guide/core.md' )( utils )

		},
	},
}
