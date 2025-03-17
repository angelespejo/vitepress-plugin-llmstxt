# `@dovenv/core` - Examples

## CLI

### Print help

```bash
dovenv -h
```

### Run dovenv with a custom config file

```bash
dovenv -c my/custom/config.js
```

### Check your workspace files/dirs/code

```bash
dovenv check
```

### Tranform your workspace files/dirs

```bash
dovenv transform
```



## Config file

### ModuleJS file

```js
import { defineConfig } from '../src/main'

export default defineConfig( {
	name : 'MJS WORKSPACE',
	desc : 'This is a project workspace MJS example.',
} )

```

### CommonJS file

```js
const { defineConfig } = require( '../dist/main.mjs' )

module.exports = defineConfig( {
	name : 'CJS WORKSPACE',
	desc : 'This is a project workspace CJS example.',
} )

```



## Library example

This is a example that contains dovenv instance in a TS file

### Instance (JavaScript/TypeScript)

```ts
import {
	getCurrentDir,
	hideBin,
} from '@dovenv/utils'
import process from 'node:process'

import config       from './config'
import { joinPath } from '../../utils/src/sys/main'
import { Dovenv }   from '../src/main'

const dovenv = new Dovenv( { config } )

// In a JS instance of DOVENV, dovenvConfigPath will be undefined, so you can set the config path manually
// 'dovenvConfigPath' property is used for user information purposes only
dovenv.dovenvConfigPath = joinPath( getCurrentDir( import.meta.url ), 'config.ts' )

await dovenv.run( hideBin( process.argv ) )

```



## TypeScript

For use with TS at the momment. you need to has TypeScript installed. an run dovenv via TS

### ModuleTS file

```ts
import { defineConfig } from '../src/main'

export default defineConfig( {
	name : 'MTS WORKSPACE',
	desc : 'This is a project workspace MTS example.',
} )

```

### CommonTS file

```ts

const { defineConfig } = require( '../dist/main.mjs' )

module.exports = defineConfig( {
	name : 'CTS WORKSPACE',
	desc : 'This is a project workspace CTS example.',
} )

```

### Run

```ts
import {
	getCurrentDir,
	hideBin,
} from '@dovenv/utils'
import process from 'node:process'

import config       from './config'
import { joinPath } from '../../utils/src/sys/main'
import { Dovenv }   from '../src/main'

const dovenv = new Dovenv( { config } )

// In a JS instance of DOVENV, dovenvConfigPath will be undefined, so you can set the config path manually
// 'dovenvConfigPath' property is used for user information purposes only
dovenv.dovenvConfigPath = joinPath( getCurrentDir( import.meta.url ), 'config.ts' )

await dovenv.run( hideBin( process.argv ) )

```



## Advanced

This is a example that contains a lot of configuration

### Check specific key

```bash
dovenv check -k packages
```

### Check pattern key

```bash
dovenv check -k 'package*'
```

### Check multiple key

```bash
dovenv check -k 'package*' 'docs'
```

### Tranform specific key

```bash
dovenv transform -k readme
```

### Show constants

```bash
dovenv const
```

### Show alias

List aliases of your config file. Use "dovenv alias -k [alias]" to show a specific alias

```bash
dovenv const
```

### Execute alias. For example dovenv x struct

```bash
dovenv x [alias-key]
```

### Print config file in terminal

```bash
dovenv config
```

### Config file

```ts
import {
	existsDir,
	existsFile,
	joinPath,
	setDirTree,
	box,
	getObjectFrom,
	readFile,
	getCurrentDir,
	getPaths,
	getBaseName,
	asciiFont,
} from '@dovenv/utils'

import pkg              from '../../../package.json'
import { defineConfig } from '../dist/main.mjs' // change it for @dovenv/core
import { version }      from '../package.json'

const currentDir = getCurrentDir( import.meta.url )
const wsDir      = joinPath( currentDir, '..', '..', '..' ) // My workspace path

export default defineConfig( {
	name  : 'PROJECT WORKSPACE',
	desc  : 'This is a project workspace example.',
	const : {
		version,
		pkg,
		wsDir,
		mark       : `\n${asciiFont( `pigeonposse\n-------\n${pkg.name}`, 'ANSI Shadow' )}\n`,
		sctructure : '\n' + box( setDirTree( { structure : {
			'.vscode' : {
				'settings.json'   : null,
				'extensions.json' : null,
			},
			'docs'             : { '*.md': null },
			'packages'         : { '**': null },
			'.gitignore'       : null,
			'.pigeonposse.yml' : null,
			'LICENSE'          : null,
			'package.json'     : null,
			'README.md'        : null,
		} } ), {
			padding     : 1,
			// titleAlignment : 'center',
			title       : 'Workspace Structure',
			borderStyle : 'none',
			borderColor : 'gray',
			dimBorder   : true,
		} ),
		custom : async () => {

			const res = await getObjectFrom<{ web: Record<string, unknown>[] }>(
				'https://raw.githubusercontent.com/pigeonposse/super8/main/.pigeonposse.yml',
			)

			return res.web[0]

		},
		template : async () => {

			const templateDir                 = joinPath( currentDir, 'recourses/*' )
			const paths                       = await getPaths( [ templateDir ], { dot: true } )
			const res: Record<string, string> = {}
			for ( const path of paths ) {

				const key = getBaseName( path )
				res[key]  = await readFile( path, 'utf-8' )

			}

			return res

		},
	},
	/**
	 * Create custom commands
	 */
	custom : {
		/**
		 * Create simple command for show structure
		 */
		structure : {
			desc : 'Print structure for the workspace.',
			fn   : async ( { utils } ) => console.log( utils.config?.const?.sctructure ),
		},
		/**
		 * Create nested command
		 */
		greet : {
			desc : 'Say hello to username',
			cmds : {
				hello : {
					opts : { short : {
						type : 'boolean',
						desc : 'Say hello to username in short form',
					} },
					desc : 'Say hello to username',
					cmds : {
						es : { desc: 'Say hello to username in Spanish' },
						en : { desc: 'Say hello to username in English' },
					},
					examples : [
						{
							desc : 'say hello to John in Spanish',
							cmd  : '$0 greet hello es --name John',
						},
					],
				},
				bye : {
					opts : { time : {
						type  : 'boolean',
						alias : 't',
						desc  : 'Say goodbye to username in short form',
					} },
					desc : 'Say goodbye to username',
					cmds : {
						es : { desc: 'Say goodbye to username in Spanish' },
						en : { desc: 'Say goodbye to username in English' },
					},
					examples : [
						{
							desc : 'say goodbye to John in Spanish',
							cmd  : '$0 greet bye es --name John --time',
						},
					],
				},
			},
			opts : {
				name : {
					type    : 'string',
					alias   : 'n',
					desc    : 'Name of the user',
					default : 'John',
				},
				secondName : {
					type    : 'string',
					alias   : 's',
					desc    : 'Second name of the user',
					default : 'Doe',
				},
			},
			examples : [
				{
					desc : 'say hello to John',
					cmd  : '$0 greet hello --name John',
				},
				{
					desc : 'say Goodbye to John Doe',
					cmd  : '$0 greet bye --name John --secondName Doe',
				},
			],
			fn : async ( {
				opts, cmds,
			} ) => {

				const greet      = cmds?.includes( 'hello' )
					? cmds?.includes( 'es' ) ? 'Hola' : 'Hello'
					: cmds?.includes( 'es' ) ? 'Adios' : 'Goodbye'
				const secondName = cmds?.includes( 'hello' ) && opts?.short ? '' : opts?.secondName
				const time       = cmds?.includes( 'bye' ) && opts?.time ? '!!!' : ''

				console.log( `${greet} ${opts?.name} ${secondName}${time}` )

			},
		},
	},
	/**
	 * Create a alias for `struture` command
	 */
	alias : { struct : {
		desc : 'Set structure for the workspace',
		cmd  : 'dovenv structure --silent',
	} },
	/**
	 * Configuration for the transform command
	 */
	transform : {
		none : {
			input : [ 'noexists.js' ],
			fn    : () => {},
		},
		yes : {
			input : [ './.pigeonposse.yml' ],
			fn    : async props => console.log( props ),
		},
	},
	/**
	 * Configuration for the check command
	 */
	check : {
		packages : {
			desc     : 'Repo packages structure.',
			type     : 'dir',
			patterns : [
				'./packages/*',
				'!./packages/{plugin,config,theme}',
				'./packages/{plugin,config,theme}/*',
			],
			validateAll : async ( { paths } ) => {

				if ( paths.length === 0 ) throw new Error( 'No packages found' )

			},
			validate : async ( { path } ) => {

				// console.log( path, content )
				const files  = [ joinPath( path, 'README.md' ) ]
				const dirs   = [ joinPath( path, 'src' ) ]
				const noDirs = [ joinPath( path, 'source' ) ]

				for ( const file of files ) {

					const exists = await existsFile( file )
					if ( !exists ) throw new Error( `File [${file}] must exist` )

				}

				for ( const dir of dirs ) {

					const exists = await existsDir( dir )
					if ( !exists ) throw new Error( `Directory [${dir}] must exist` )

				}

				for ( const dir of noDirs ) {

					const exists = await existsDir( dir )
					if ( exists ) throw new Error( `Directory [${dir}] must not exist` )

				}

			},

		},
		docs : {
			desc        : 'Documentation structure.',
			type        : 'file',
			patterns    : [ 'docs/*.md' ],
			validateAll : async ( { paths } ) => {

				const validFiles = paths.filter( p =>
					p.endsWith( 'index.md' ) || p.endsWith( 'contributors.md' ),
				)
				if ( validFiles.length !== 2 ) throw new Error( 'File [docs/index.md] and [docs/posts.md] must exist' )
				if ( paths.length < 3 ) throw new Error( `File [${paths}] must not exist` )

			},
			validate : async ( {
				path, content,
			} ) => {

				if ( !content ) throw new Error( `File [${path}] must exist` )

			},

		},
		monorepo : {
			desc        : 'Monorepo structure.',
			type        : 'file',
			patterns    : [ 'src/*' ],
			validateAll : async ( { paths } ) => {

				if ( paths.length ) throw new Error( `Directory [src] must not exist because it is a monorepo` )

			},

		},
		required : {
			desc     : 'Monorepo required files.',
			type     : 'file',
			patterns : [
				'LICENSE',
				'README.md',
				'.pigeonposse.yml',
				'package.json',
				'.gitignore',
				'.vscode/settings.json',
				'.vscode/extensions.json',
			],
			validateAll : async ( {
				paths, utils,
			} ) => {

				if ( paths.length !== 7 )
					throw new Error( `Monorepo must have this structure:\n ${utils.config?.const?.sctructure}` )

			},

		},
		packageJson : {
			desc     : 'Schema from repo packages.',
			type     : 'file',
			patterns : [ 'packages/*/package.json' ],
			validate : async ( {
				path, content,
			} ) => {

				if ( !content ) throw new Error( `File [${path}] must exist` )
				const c = JSON.parse( content )
				if ( !( 'version' in c ) && !( 'private' in c && c.private === true ) )
					throw new Error( `File [${path}] must have version field` )

			},
		},

	},
} )

```



