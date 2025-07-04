import { setConfig } from '@dovenv/theme-pigeonposse/eslint'

export default setConfig( {
	general   : 'ts',
	jsdoc     : true,
	gitignore : true,
	ignore    : [ '**/README.md', '**/CHANGELOG.md' ],
} )

