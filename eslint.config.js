import { lint } from '@dovenv/theme-pigeonposse'

const { dovenvEslintConfig } = lint
const ignore                 = dovenvEslintConfig.setIgnoreConfig( [ '**/README.md', '**/CHANGELOG.md' ] )

export default [
	dovenvEslintConfig.includeGitIgnore( ),
	...dovenvEslintConfig.config,
	ignore,
]

