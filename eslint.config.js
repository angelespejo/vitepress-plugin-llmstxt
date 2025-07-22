import { setConfig } from '@dovenv/theme-pigeonposse/eslint'

export default setConfig( {
	general   : 'ts',
	jsdoc     : true,
	gitignore : true,
	package   : true,
	json      : true,
	vue       : true,
	ignore    : [ '**/README.md', '**/CHANGELOG.md' ],
} )

