# `@dovenv/utils` - API documentation

weight: 213kb

## Classes

### LazyLoader\<O\>

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* `Record`\<`string`, () => `Promise`\<`unknown`\>\> |

#### Constructors

##### new LazyLoader()

```ts
new LazyLoader<O>(resources: O, options: LazyLoaderOptions): LazyLoader<O>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `resources` | `O` |
| `options` | `LazyLoaderOptions` |

###### Returns

[`LazyLoader`](#lazyloadero)\<`O`\>

#### Methods

##### get()

```ts
get<K>(key: K): Promise<Awaited<ReturnType<O[K]>>>
```

Retrieves a resource by its key, loading it if necessary and caching the result.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` | The key of the resource to load. |

###### Returns

`Promise`\<`Awaited`\<`ReturnType`\<`O`\[`K`\]\>\>\>

The loaded resource.

#### Properties

| Property | Type |
| ------ | ------ |
| `options` | `LazyLoaderOptions` |

***

### PackageManagerData

#### Accessors

##### cmds

###### Get Signature

```ts
get cmds(): PackageManagerCmdsValue
```

Retrieves the command mappings for the package manager.

The returned object contains commands for various package management tasks,
such as auditing, updating, installing, and executing packages.

###### Returns

[`PackageManagerCmdsValue`](#packagemanagercmdsvalue)

An object containing package manager commands.

##### dev

###### Get Signature

```ts
get dev(): undefined | PackageManager
```

Gets the package manager name in development mode.

Checks the "devEngines.packageManager.name" property in the package.json.

###### Returns

`undefined` \| [`PackageManager`](#packagemanager)

The package manager name.

##### devCmds

###### Get Signature

```ts
get devCmds(): undefined | PackageManagerCmdsValue
```

Retrieves the command mappings for the package manager in development mode.

The returned object contains commands for various package management tasks,
such as auditing, updating, installing, and executing packages, specifically
configured for development environments.

###### Returns

`undefined` \| [`PackageManagerCmdsValue`](#packagemanagercmdsvalue)

An object containing package manager commands for development mode, or undefined if no package manager is found.

##### prod

###### Get Signature

```ts
get prod(): undefined | PackageManager
```

Gets the package manager name.
Checks the "packageManager" property in the package.json.

###### Returns

`undefined` \| [`PackageManager`](#packagemanager)

The package manager name.

##### prodCmds

###### Get Signature

```ts
get prodCmds(): undefined | PackageManagerCmdsValue
```

Retrieves the command mappings for the package manager in production mode.

The returned object contains commands for various package management tasks,
such as auditing, updating, installing, and executing packages, specifically
configured for production environments.

###### Returns

`undefined` \| [`PackageManagerCmdsValue`](#packagemanagercmdsvalue)

An object containing package manager commands for production mode, or undefined if no package manager is found.

##### value

###### Get Signature

```ts
get value(): PackageManager
```

Retrieves the active package manager name.

This method returns the package manager in the following order of precedence:
- Development mode package manager, if specified.
- Production mode package manager, if specified.
- Default package manager.

###### Returns

[`PackageManager`](#packagemanager)

The name of the active package manager.

#### Constructors

##### new PackageManagerData()

```ts
new PackageManagerData(__namedParameters: {
  pkg: {
     devEngines: {
        cpu: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        libc: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        os: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        packageManager: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        runtime: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
       };
    };
 }): PackageManagerData
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | `object` | - |
| `__namedParameters.pkg` | `object` | - |
| `__namedParameters.pkg.devEngines`? | `object` | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `__namedParameters.pkg.devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

###### Returns

[`PackageManagerData`](#packagemanagerdata)

#### Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `default` | `"npm"` | `PKG_MANAGER.NPM` | Default package manager |

***

### RunLocalNodeBinError

#### Extends

- `Error`

#### Constructors

##### new RunLocalNodeBinError()

```ts
new RunLocalNodeBinError(message?: string): RunLocalNodeBinError
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `string` |

###### Returns

[`RunLocalNodeBinError`](#runlocalnodebinerror)

###### Inherited from

`Error.constructor`

##### new RunLocalNodeBinError()

```ts
new RunLocalNodeBinError(message?: string, options?: ErrorOptions): RunLocalNodeBinError
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `string` |
| `options`? | `ErrorOptions` |

###### Returns

[`RunLocalNodeBinError`](#runlocalnodebinerror)

###### Inherited from

`Error.constructor`

***

### RuntimeData

#### Accessors

##### dev

###### Get Signature

```ts
get dev(): undefined | Runtime
```

Gets the runtime of the current package in development mode.

Checks the "devEngines.runtime.name" property in the package.json.

###### Returns

`undefined` \| [`Runtime`](#runtime)

The runtime name.

##### prod

###### Get Signature

```ts
get prod(): undefined | Runtime
```

Gets the runtime of the current package in production mode.

Checks the "engines" property in the package.json.

###### Returns

`undefined` \| [`Runtime`](#runtime)

The runtime name.

##### value

###### Get Signature

```ts
get value(): Runtime
```

Gets the runtime of the current package.

Checks the "engines.runtime.name" property in the package.json.

###### Returns

[`Runtime`](#runtime)

The runtime name.

#### Constructors

##### new RuntimeData()

```ts
new RuntimeData(__namedParameters: {
  pkg: {
     devEngines: {
        cpu: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        libc: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        os: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        packageManager: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
        runtime: undefined | {
           name: string;
           onFail: "warn" | "error" | "ignore";
           version: string;
          };
       };
    };
 }): RuntimeData
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | `object` | - |
| `__namedParameters.pkg` | `object` | - |
| `__namedParameters.pkg.devEngines`? | `object` | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `__namedParameters.pkg.devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `__namedParameters.pkg.devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

###### Returns

[`RuntimeData`](#runtimedata)

#### Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `default` | `"node"` | `RUNTIME.NODE` | Default package Runtime |

***

### TypedError\<M, D\>

A generic error class that extends the native `Error` class to include
additional contextual data.

This class is useful for creating strongly-typed errors in TypeScript, allowing
you to provide structured data along with the error message for improved error handling.

---.

#### Examples

```ts
// Basic usage with a string message

const error = new TypedError('Something went wrong');
console.error(error.message); // "Something went wrong"
```

```ts
// Usage with additional data

const error = new TypedError('Validation failed', { field: 'email', reason: 'invalid' });
console.error(error.message); // "Validation failed"
console.error(error.data); // { field: 'email', reason: 'invalid' }
```

```ts
// Usage in a try-catch block

try {
  throw new TypedError('Database connection failed', { host: 'localhost', port: 5432 });
} catch (err) {
  if (err instanceof TypedError) {
    console.error(`Error: ${err.message}`);
    console.error('Error Data:', err.data);
  }
}
```

```ts
// Custom error class With TypeScript and specific data type

const ERRORS = ['unexpected', 'validation', 'database'] as const;
class AppError extends TypedError<typeof ERRORS[number], { user: string }> {}

const successError = new AppError( 'validation', { user: 'username' } );
const failError = new AppError( 'not-exist', { user: 'username' } );  // Must be fail because message not exist
const failError2 = new AppError( 'unexpected', { key: 'username' } ); // Must be fail because data not match
```

#### Extends

- `Error`

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `M` *extends* `string` | `string` | The type of the error message. Defaults to `string`. |
| `D` | `undefined` | The type of the additional data associated with the error. Defaults to `undefined`. |

#### Constructors

##### new TypedError()

```ts
new TypedError<M, D>(message: M, data?: D): TypedError<M, D>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `M` |
| `data`? | `D` |

###### Returns

[`TypedError`](#typederrorm-d)\<`M`, `D`\>

###### Overrides

`Error.constructor`

#### Properties

| Property | Type |
| ------ | ------ |
| `data` | `undefined` \| `D` |

***

### Validation

Utility class for data validation.
Most of the validation functions are a wrapper of `zod` functions.

#### See

https://zod.dev/

#### Constructors

##### new Validation()

```ts
new Validation(): Validation
```

###### Returns

[`Validation`](#validation)

#### Methods

##### createLiteralUnion()

```ts
createLiteralUnion<T>(values: T[]): ZodUnion<[ZodLiteral<T>, ...ZodLiteral<T>[]]>
```

Create a union of literal types from an array of strings.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `values` | `T`[] | The values of the union. |

###### Returns

`ZodUnion`\<[`ZodLiteral`\<`T`\>, `...ZodLiteral<T>[]`]\>

A union of literal types.

###### Example

```ts
const myUnion = createLiteralUnion( ['one', 'two', 'three'] )
// myUnion is a union of 'one', 'two', 'three'
```

#### Properties

| Property | Type | Default value |
| ------ | ------ | ------ |
| `deserialize` | \<`R`\>(`v`: `JsonSchema`) => `R` | `deserializeValidation` |
| `Error` | `$constructor`\<`ZodError`\<`unknown`\>, `$ZodIssue`[]\> | `ValidateError` |
| `formatError` | (`error`: `unknown`) => `string` | `formatValidationError` |
| `schema` | `__module` | `validate` |
| `serialize` | (`schema`: `$ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, `_params`?: `ToJSONSchemaParams`) => `JSONSchema.BaseSchema`(`registry`: `$ZodRegistry`\<\{\}, `$ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>, `_params`?: `RegistryToJSONSchemaParams`) => \{\} | `serializeValidation` |

## Functions

### animate()

```ts
function animate(options?: AnimateProps): {
  start: () => void;
  stop: () => void;
}
```

Creates an animation function that can be started and stopped.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `AnimateProps` | Options for the animation. |

#### Returns

```ts
{
  start: () => void;
  stop: () => void;
}
```

- Object containing `start` and `stop` functions.

| Name | Type |
| ------ | ------ |
| `start` | () => `void` |
| `stop` | () => `void` |

***

### ansiRegex()

```ts
function ansiRegex(options: {
  onlyFirst: false;
 }): RegExp
```

Creates a regular expression to match ANSI escape codes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Optional configuration object. |
| `options.onlyFirst` | `undefined` \| `boolean` | If true, the regex will stop after the first match. |

#### Returns

`RegExp`

A regular expression for matching ANSI escape codes.

                                     This function generates a regular expression that can be used to identify
                                     ANSI escape codes within a string. These codes are often used in terminal
                                     emulators to apply text formatting such as colors, styles, and hyperlinks.
                                     The regex pattern accommodates various ANSI sequences, including those
                                     terminated by BEL, ESC\, or 0x9c.

#### Example

```ts
ansiRegex().test('\u001B[4mcake\u001B[0m');
//=> true

ansiRegex().test('cake');
//=> false

'\u001B[4mcake\u001B[0m'.match(ansiRegex());
//=> ['\u001B[4m', '\u001B[0m']

'\u001B[4mcake\u001B[0m'.match(ansiRegex({onlyFirst: true}));
//=> ['\u001B[4m']

'\u001B]8;;https://github.com\u0007click\u001B]8;;\u0007'.match(ansiRegex());
//=> ['\u001B]8;;https://github.com\u0007', '\u001B]8;;\u0007']
```

***

### arePathsEqual()

```ts
function arePathsEqual(path1: string, path2: string): boolean
```

Checks if two file paths are equal after normalization.
Normalization ensures that differences like trailing slashes or redundant path segments are ignored.

---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path1` | `string` | The first file path to compare. |
| `path2` | `string` | The second file path to compare. |

#### Returns

`boolean`

`true` if the paths are equal, `false` otherwise.

***

### asciiFont()

```ts
function asciiFont(
   txt: string, 
   fontName: 
  | "reverse"
  | "filter"
  | "hex"
  | "italic"
  | "morse"
  | "jerusalem"
  | "moscow"
  | "katakana"
  | "runic"
  | "smtengwar"
  | "mshebrew210"
  | "ntgreek"
  | "runyc"
  | "1row"
  | "tengwar"
  | "3-d"
  | "tsalagi"
  | "3d-ascii"
  | "3d--diagonal"
  | "4max"
  | "amc--3--liv1"
  | "amc--3--line"
  | "5--line--oblique"
  | "5lineoblique"
  | "amc--razor"
  | "amc--neko"
  | "amc--slash"
  | "amc--thin"
  | "amc--tubes"
  | "amc--slider"
  | "3d_diagonal"
  | "ansi--regular"
  | "ascii--new--roman"
  | "amc--untitled"
  | "alligator"
  | "acrobatic"
  | "ansi--shadow"
  | "alligator2"
  | "avatar"
  | "arrows"
  | "b1ff"
  | "banner3-d"
  | "alphabet"
  | "banner3"
  | "alpha"
  | "banner4"
  | "banner"
  | "basic"
  | "barbwire"
  | "benjamin"
  | "bell"
  | "big--chief"
  | "3d"
  | "big--money-ne"
  | "big--money-se"
  | "big--money-sw"
  | "big--money-nw"
  | "bigfig"
  | "big"
  | "binary"
  | "block"
  | "bright"
  | "bloody"
  | "bolger"
  | "broadway--kb"
  | "catwalk"
  | "calvin--s"
  | "braced"
  | "cards"
  | "blocks"
  | "bulbhead"
  | "broadway"
  | "chiseled"
  | "bubble"
  | "caligraphy"
  | "chunky"
  | "coinstak"
  | "cola"
  | "caligraphy2"
  | "contrast"
  | "computer"
  | "crawford"
  | "crawford2"
  | "colossal"
  | "cosmike"
  | "cursive"
  | "cybermedium"
  | "cyberlarge"
  | "cricket"
  | "cygnet"
  | "cybersmall"
  | "crazy"
  | "decimal"
  | "danc4"
  | "dwhistled"
  | "dos--rebel"
  | "dancing--font"
  | "diamond"
  | "doom"
  | "diet--cola"
  | "delta--corps--priest--1"
  | "dot--matrix"
  | "digital"
  | "double"
  | "dr--pepper"
  | "double--shorts"
  | "efti--chess"
  | "efti--italic"
  | "efti--piti"
  | "def--leppard"
  | "efti--robot"
  | "efti--font"
  | "efti--water"
  | "efti--wall"
  | "elite"
  | "doh"
  | "epic"
  | "electronic"
  | "fender"
  | "fire--font-k"
  | "fire--font-s"
  | "flower--power"
  | "flipped"
  | "fun--face"
  | "four--tops"
  | "fun--faces"
  | "fuzzy"
  | "ghost"
  | "fraktur"
  | "graceful"
  | "goofy"
  | "ghoulish"
  | "glenyn"
  | "greek"
  | "gradient"
  | "gothic"
  | "graffiti"
  | "georgi16"
  | "heart--left"
  | "horizontal--left"
  | "hieroglyphs"
  | "heart--right"
  | "hollywood"
  | "horizontal--right"
  | "henry--3d"
  | "invita"
  | "georgia11"
  | "isometric1"
  | "isometric3"
  | "icl-1900"
  | "isometric2"
  | "impossible"
  | "js--block--letters"
  | "isometric4"
  | "ivrit"
  | "js--bracket--letters"
  | "js--capital--curves"
  | "js--cursive"
  | "amc--razor2"
  | "js--stick--letters"
  | "konto"
  | "amc--aaa01"
  | "jacky"
  | "jazmine"
  | "3x5"
  | "knob"
  | "keyboard"
  | "konto--slant"
  | "letters"
  | "lcd"
  | "larry--3d--2"
  | "linux"
  | "line--blocks"
  | "lockergnome"
  | "maxfour"
  | "larry--3d"
  | "marquee"
  | "lean"
  | "lil--devil"
  | "madrid"
  | "merlin2"
  | "mike"
  | "kban"
  | "merlin1"
  | "morse2"
  | "mirror"
  | "modular"
  | "mini"
  | "muzzle"
  | "nt--greek"
  | "nancyj-fancy"
  | "nancyj-underlined"
  | "nv--script"
  | "nscript"
  | "nancyj"
  | "mnemonic"
  | "nipples"
  | "octal"
  | "nancyj-improved"
  | "o8"
  | "old--banner"
  | "patorjks--cheese"
  | "os2"
  | "pawp"
  | "pepper"
  | "patorjk-hex"
  | "ogre"
  | "puffy"
  | "poison"
  | "peaks--slant"
  | "contessa"
  | "puzzle"
  | "rectangles"
  | "red--phoenix"
  | "pyramid"
  | "roman"
  | "rammstein"
  | "rounded"
  | "relief"
  | "relief2"
  | "rotated"
  | "sl--script"
  | "rot13"
  | "rowan--cap"
  | "rozzo"
  | "s--blood"
  | "serifcap"
  | "santa--clara"
  | "slide"
  | "short"
  | "small--caps"
  | "slant"
  | "small--isometric1"
  | "small--slant"
  | "slant--relief"
  | "small--script"
  | "small--poison"
  | "small--shadow"
  | "spliff"
  | "soft"
  | "small--tengwar"
  | "small"
  | "stacey"
  | "stforek"
  | "speed"
  | "stampate"
  | "stampatello"
  | "stick--letters"
  | "star--wars"
  | "stop"
  | "star--strips"
  | "straight"
  | "script"
  | "sub-zero"
  | "stellar"
  | "standard"
  | "test1"
  | "stronger--than--all"
  | "swan"
  | "tanja"
  | "swamp--land"
  | "pebbles"
  | "three--point"
  | "the--edge"
  | "thin"
  | "thick"
  | "term"
  | "ticks"
  | "ticks--slant"
  | "thorned"
  | "tombstone"
  | "tiles"
  | "tinker-toy"
  | "train"
  | "tubes-smushed"
  | "bear"
  | "tubular"
  | "two--point"
  | "usa--flag"
  | "weird"
  | "varsity"
  | "wow"
  | "twisted"
  | "wavy"
  | "univers"
  | "wet--letter"
  | "amc3line"
  | "amc3liv1"
  | "alligator3"
  | "amcrazo2"
  | "amcaaa01"
  | "amcslder"
  | "amcneko"
  | "amcun1"
  | "amcslash"
  | "ascii_new_roman"
  | "amcrazor"
  | "broadway_kb"
  | "amcthin"
  | "amctubes"
  | "cosmic"
  | "bigchief"
  | "dietcola"
  | "dancingfont"
  | "calgphy2"
  | "drpepper"
  | "doubleshorts"
  | "dotmatrix"
  | "eftipiti"
  | "eftichess"
  | "eftifont"
  | "eftiwall"
  | "eftitalic"
  | "funface"
  | "eftiwater"
  | "fire_font-k"
  | "eftirobot"
  | "fourtops"
  | "dosrebel"
  | "flowerpower"
  | "fire_font-s"
  | "heart_right"
  | "horizontalleft"
  | "halfiwi"
  | "funfaces"
  | "koholint"
  | "horizontalright"
  | "larry3d"
  | "kontoslant"
  | "maxiwi"
  | "lineblocks"
  | "heart_left"
  | "miniwi"
  | "kompaktblk"
  | "red_phoenix"
  | "defleppard"
  | "rowancap"
  | "oldbanner"
  | "rev"
  | "lildevil"
  | "santaclara"
  | "sblood"
  | "peaksslant"
  | "smscript"
  | "s-relief"
  | "slscript"
  | "smkeyboard"
  | "smpoison"
  | "smshadow"
  | "smisome1"
  | "six-fo"
  | "starwars"
  | "threepoint"
  | "smslant"
  | "starstrips"
  | "twopoint"
  | "ticksslant"
  | "swampland"
  | "wetletter"
  | "sweet"
  | "ublk"
  | "shimrod"
  | "usaflag"
  | "tubes-regular"
  | "whimsy"
  | "smallcaps"
  | "peaks"
  | "small--keyboard"
  | "stencil"
  | "l4me"
  | "nvscript"
  | "5x8"
  | "brite"
  | "6x9"
  | "5x7"
  | "chartr"
  | "briteb"
  | "6x10"
  | "britebi"
  | "chartri"
  | "britei"
  | "clb6x10"
  | "clb8x10"
  | "cli8x8"
  | "clb8x8"
  | "clr4x6"
  | "clr6x6"
  | "clr5x6"
  | "clr5x8"
  | "clr6x10"
  | "clr6x8"
  | "clr5x10"
  | "clr7x8"
  | "clr8x10"
  | "clr7x10"
  | "courbi"
  | "clr8x8"
  | "courb"
  | "couri"
  | "cour"
  | "helv"
  | "helvb"
  | "helvi"
  | "sansb"
  | "sansbi"
  | "sans"
  | "sbook"
  | "sbookbi"
  | "sansi"
  | "times"
  | "sbookb"
  | "sbooki"
  | "tty"
  | "ttyb"
  | "xbrite"
  | "helvbi"
  | "utopia"
  | "utopiab"
  | "utopiai"
  | "xbritei"
  | "xchartr"
  | "xbritebi"
  | "utopiabi"
  | "xbriteb"
  | "xchartri"
  | "xhelvb"
  | "xcourb"
  | "xhelv"
  | "xcourbi"
  | "xcour"
  | "xsbookbi"
  | "xsansi"
  | "xhelvbi"
  | "xsansb"
  | "trek"
  | "xsbookb"
  | "64f1____"
  | "xcouri"
  | "xsbooki"
  | "xttyb"
  | "xtimes"
  | "4x4_offr"
  | "advenger"
  | "1943____"
  | "aquaplan"
  | "a_zooloo"
  | "xsbook"
  | "atc_gran"
  | "this"
  | "assalt_m"
  | "atc_____"
  | "asc_____"
  | "battle_s"
  | "b_m__200"
  | "baz__bil"
  | "c_ascii_"
  | "c1______"
  | "beer_pub"
  | "shadow"
  | "c_consen"
  | "bubble__"
  | "c2______"
  | "bubble_b"
  | "char3___"
  | "caus_in_"
  | "charact1"
  | "char1___"
  | "charact2"
  | "charact4"
  | "char4___"
  | "char2___"
  | "charact5"
  | "charact6"
  | "characte"
  | "coil_cop"
  | "charact3"
  | "charset_"
  | "d_dragon"
  | "com_sen_"
  | "dcs_bfmo"
  | "convoy__"
  | "demo_m__"
  | "deep_str"
  | "druid___"
  | "devilish"
  | "demo_2__"
  | "demo_1__"
  | "e__fist_"
  | "eca_____"
  | "ebbs_2__"
  | "fair_mea"
  | "faces_of"
  | "fbr1____"
  | "fairligh"
  | "f15_____"
  | "fbr2____"
  | "fantasy_"
  | "fbr_stri"
  | "fbr_tilt"
  | "flyn_sh"
  | "fbr12___"
  | "fp1_____"
  | "finalass"
  | "future_3"
  | "funky_dr"
  | "fireing_"
  | "future_1"
  | "fp2_____"
  | "future_5"
  | "future_2"
  | "future_6"
  | "future_4"
  | "future_7"
  | "grand_pr"
  | "future_8"
  | "gauntlet"
  | "ghost_bo"
  | "battlesh"
  | "gothic__"
  | "heroboti"
  | "hills___"
  | "green_be"
  | "hades___"
  | "house_of"
  | "hypa_bal"
  | "high_noo"
  | "heavy_me"
  | "henry3d"
  | "italics_"
  | "home_pak"
  | "hyper___"
  | "inc_raw_"
  | "kgames_i"
  | "krak_out"
  | "kik_star"
  | "lazy_jon"
  | "letter_w"
  | "lexible_"
  | "master_o"
  | "letterw3"
  | "mad_nurs"
  | "magic_ma"
  | "joust___"
  | "modern__"
  | "mig_ally"
  | "nfi1____"
  | "npn_____"
  | "mayhem_d"
  | "outrun__"
  | "mcg_____"
  | "odel_lak"
  | "notie_ca"
  | "pacos_pe"
  | "ok_beer_"
  | "p_s_h_m_"
  | "panther_"
  | "platoon_"
  | "platoon2"
  | "pod_____"
  | "xsansbi"
  | "phonix__"
  | "rally_s2"
  | "rainbow_"
  | "pawn_ins"
  | "r2-d2___"
  | "radical_"
  | "xhelvi"
  | "raw_recu"
  | "rally_sp"
  | "rampage_"
  | "rastan__"
  | "road_rai"
  | "rok_____"
  | "skateord"
  | "rockbox_"
  | "skate_ro"
  | "roman___"
  | "skateroc"
  | "script__"
  | "ripper_"
  | "sketch_s"
  | "sm______"
  | "spc_demo"
  | "stencil1"
  | "stealth_"
  | "street_s"
  | "stencil2"
  | "super_te"
  | "subteran"
  | "space_op"
  | "star_war"
  | "tec_7000"
  | "tec1____"
  | "taxi____"
  | "tecrvs__"
  | "top_duck"
  | "tav1____"
  | "timesofl"
  | "ti_pan__"
  | "trashman"
  | "tomahawk"
  | "tsn_base"
  | "twin_cob"
  | "tsm_____"
  | "triad_st"
  | "ucf_fan_"
  | "unarmed_"
  | "ts1_____"
  | "xsans"
  | "type_set"
  | "ugalympi"
  | "usa_____"
  | "xtty"
  | "asslt__m"
  | "war_of_w"
  | "vortron_"
  | "usa_pq__"
  | "yie_ar_k"
  | "z-pilot_"
  | "yie-ar__"
  | "zig_zag_"
  | "zone7___"
  | "etcrvs__"
  | "p_skateb"
  | "ascii___"
  | "t__of_ap"
  | "rad_phan"
  | "ebbs_1__"
  | "rad_____"
  | "new_asci"
  | "rci_____", 
opts?: Options): Promise<string>
```

Fetches and generates ASCII art text using the specified font name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `txt` | `string` | The text to render as ASCII art. |
| `fontName` | \| `"reverse"` \| `"filter"` \| `"hex"` \| `"italic"` \| `"morse"` \| `"jerusalem"` \| `"moscow"` \| `"katakana"` \| `"runic"` \| `"smtengwar"` \| `"mshebrew210"` \| `"ntgreek"` \| `"runyc"` \| `"1row"` \| `"tengwar"` \| `"3-d"` \| `"tsalagi"` \| `"3d-ascii"` \| `"3d--diagonal"` \| `"4max"` \| `"amc--3--liv1"` \| `"amc--3--line"` \| `"5--line--oblique"` \| `"5lineoblique"` \| `"amc--razor"` \| `"amc--neko"` \| `"amc--slash"` \| `"amc--thin"` \| `"amc--tubes"` \| `"amc--slider"` \| `"3d_diagonal"` \| `"ansi--regular"` \| `"ascii--new--roman"` \| `"amc--untitled"` \| `"alligator"` \| `"acrobatic"` \| `"ansi--shadow"` \| `"alligator2"` \| `"avatar"` \| `"arrows"` \| `"b1ff"` \| `"banner3-d"` \| `"alphabet"` \| `"banner3"` \| `"alpha"` \| `"banner4"` \| `"banner"` \| `"basic"` \| `"barbwire"` \| `"benjamin"` \| `"bell"` \| `"big--chief"` \| `"3d"` \| `"big--money-ne"` \| `"big--money-se"` \| `"big--money-sw"` \| `"big--money-nw"` \| `"bigfig"` \| `"big"` \| `"binary"` \| `"block"` \| `"bright"` \| `"bloody"` \| `"bolger"` \| `"broadway--kb"` \| `"catwalk"` \| `"calvin--s"` \| `"braced"` \| `"cards"` \| `"blocks"` \| `"bulbhead"` \| `"broadway"` \| `"chiseled"` \| `"bubble"` \| `"caligraphy"` \| `"chunky"` \| `"coinstak"` \| `"cola"` \| `"caligraphy2"` \| `"contrast"` \| `"computer"` \| `"crawford"` \| `"crawford2"` \| `"colossal"` \| `"cosmike"` \| `"cursive"` \| `"cybermedium"` \| `"cyberlarge"` \| `"cricket"` \| `"cygnet"` \| `"cybersmall"` \| `"crazy"` \| `"decimal"` \| `"danc4"` \| `"dwhistled"` \| `"dos--rebel"` \| `"dancing--font"` \| `"diamond"` \| `"doom"` \| `"diet--cola"` \| `"delta--corps--priest--1"` \| `"dot--matrix"` \| `"digital"` \| `"double"` \| `"dr--pepper"` \| `"double--shorts"` \| `"efti--chess"` \| `"efti--italic"` \| `"efti--piti"` \| `"def--leppard"` \| `"efti--robot"` \| `"efti--font"` \| `"efti--water"` \| `"efti--wall"` \| `"elite"` \| `"doh"` \| `"epic"` \| `"electronic"` \| `"fender"` \| `"fire--font-k"` \| `"fire--font-s"` \| `"flower--power"` \| `"flipped"` \| `"fun--face"` \| `"four--tops"` \| `"fun--faces"` \| `"fuzzy"` \| `"ghost"` \| `"fraktur"` \| `"graceful"` \| `"goofy"` \| `"ghoulish"` \| `"glenyn"` \| `"greek"` \| `"gradient"` \| `"gothic"` \| `"graffiti"` \| `"georgi16"` \| `"heart--left"` \| `"horizontal--left"` \| `"hieroglyphs"` \| `"heart--right"` \| `"hollywood"` \| `"horizontal--right"` \| `"henry--3d"` \| `"invita"` \| `"georgia11"` \| `"isometric1"` \| `"isometric3"` \| `"icl-1900"` \| `"isometric2"` \| `"impossible"` \| `"js--block--letters"` \| `"isometric4"` \| `"ivrit"` \| `"js--bracket--letters"` \| `"js--capital--curves"` \| `"js--cursive"` \| `"amc--razor2"` \| `"js--stick--letters"` \| `"konto"` \| `"amc--aaa01"` \| `"jacky"` \| `"jazmine"` \| `"3x5"` \| `"knob"` \| `"keyboard"` \| `"konto--slant"` \| `"letters"` \| `"lcd"` \| `"larry--3d--2"` \| `"linux"` \| `"line--blocks"` \| `"lockergnome"` \| `"maxfour"` \| `"larry--3d"` \| `"marquee"` \| `"lean"` \| `"lil--devil"` \| `"madrid"` \| `"merlin2"` \| `"mike"` \| `"kban"` \| `"merlin1"` \| `"morse2"` \| `"mirror"` \| `"modular"` \| `"mini"` \| `"muzzle"` \| `"nt--greek"` \| `"nancyj-fancy"` \| `"nancyj-underlined"` \| `"nv--script"` \| `"nscript"` \| `"nancyj"` \| `"mnemonic"` \| `"nipples"` \| `"octal"` \| `"nancyj-improved"` \| `"o8"` \| `"old--banner"` \| `"patorjks--cheese"` \| `"os2"` \| `"pawp"` \| `"pepper"` \| `"patorjk-hex"` \| `"ogre"` \| `"puffy"` \| `"poison"` \| `"peaks--slant"` \| `"contessa"` \| `"puzzle"` \| `"rectangles"` \| `"red--phoenix"` \| `"pyramid"` \| `"roman"` \| `"rammstein"` \| `"rounded"` \| `"relief"` \| `"relief2"` \| `"rotated"` \| `"sl--script"` \| `"rot13"` \| `"rowan--cap"` \| `"rozzo"` \| `"s--blood"` \| `"serifcap"` \| `"santa--clara"` \| `"slide"` \| `"short"` \| `"small--caps"` \| `"slant"` \| `"small--isometric1"` \| `"small--slant"` \| `"slant--relief"` \| `"small--script"` \| `"small--poison"` \| `"small--shadow"` \| `"spliff"` \| `"soft"` \| `"small--tengwar"` \| `"small"` \| `"stacey"` \| `"stforek"` \| `"speed"` \| `"stampate"` \| `"stampatello"` \| `"stick--letters"` \| `"star--wars"` \| `"stop"` \| `"star--strips"` \| `"straight"` \| `"script"` \| `"sub-zero"` \| `"stellar"` \| `"standard"` \| `"test1"` \| `"stronger--than--all"` \| `"swan"` \| `"tanja"` \| `"swamp--land"` \| `"pebbles"` \| `"three--point"` \| `"the--edge"` \| `"thin"` \| `"thick"` \| `"term"` \| `"ticks"` \| `"ticks--slant"` \| `"thorned"` \| `"tombstone"` \| `"tiles"` \| `"tinker-toy"` \| `"train"` \| `"tubes-smushed"` \| `"bear"` \| `"tubular"` \| `"two--point"` \| `"usa--flag"` \| `"weird"` \| `"varsity"` \| `"wow"` \| `"twisted"` \| `"wavy"` \| `"univers"` \| `"wet--letter"` \| `"amc3line"` \| `"amc3liv1"` \| `"alligator3"` \| `"amcrazo2"` \| `"amcaaa01"` \| `"amcslder"` \| `"amcneko"` \| `"amcun1"` \| `"amcslash"` \| `"ascii_new_roman"` \| `"amcrazor"` \| `"broadway_kb"` \| `"amcthin"` \| `"amctubes"` \| `"cosmic"` \| `"bigchief"` \| `"dietcola"` \| `"dancingfont"` \| `"calgphy2"` \| `"drpepper"` \| `"doubleshorts"` \| `"dotmatrix"` \| `"eftipiti"` \| `"eftichess"` \| `"eftifont"` \| `"eftiwall"` \| `"eftitalic"` \| `"funface"` \| `"eftiwater"` \| `"fire_font-k"` \| `"eftirobot"` \| `"fourtops"` \| `"dosrebel"` \| `"flowerpower"` \| `"fire_font-s"` \| `"heart_right"` \| `"horizontalleft"` \| `"halfiwi"` \| `"funfaces"` \| `"koholint"` \| `"horizontalright"` \| `"larry3d"` \| `"kontoslant"` \| `"maxiwi"` \| `"lineblocks"` \| `"heart_left"` \| `"miniwi"` \| `"kompaktblk"` \| `"red_phoenix"` \| `"defleppard"` \| `"rowancap"` \| `"oldbanner"` \| `"rev"` \| `"lildevil"` \| `"santaclara"` \| `"sblood"` \| `"peaksslant"` \| `"smscript"` \| `"s-relief"` \| `"slscript"` \| `"smkeyboard"` \| `"smpoison"` \| `"smshadow"` \| `"smisome1"` \| `"six-fo"` \| `"starwars"` \| `"threepoint"` \| `"smslant"` \| `"starstrips"` \| `"twopoint"` \| `"ticksslant"` \| `"swampland"` \| `"wetletter"` \| `"sweet"` \| `"ublk"` \| `"shimrod"` \| `"usaflag"` \| `"tubes-regular"` \| `"whimsy"` \| `"smallcaps"` \| `"peaks"` \| `"small--keyboard"` \| `"stencil"` \| `"l4me"` \| `"nvscript"` \| `"5x8"` \| `"brite"` \| `"6x9"` \| `"5x7"` \| `"chartr"` \| `"briteb"` \| `"6x10"` \| `"britebi"` \| `"chartri"` \| `"britei"` \| `"clb6x10"` \| `"clb8x10"` \| `"cli8x8"` \| `"clb8x8"` \| `"clr4x6"` \| `"clr6x6"` \| `"clr5x6"` \| `"clr5x8"` \| `"clr6x10"` \| `"clr6x8"` \| `"clr5x10"` \| `"clr7x8"` \| `"clr8x10"` \| `"clr7x10"` \| `"courbi"` \| `"clr8x8"` \| `"courb"` \| `"couri"` \| `"cour"` \| `"helv"` \| `"helvb"` \| `"helvi"` \| `"sansb"` \| `"sansbi"` \| `"sans"` \| `"sbook"` \| `"sbookbi"` \| `"sansi"` \| `"times"` \| `"sbookb"` \| `"sbooki"` \| `"tty"` \| `"ttyb"` \| `"xbrite"` \| `"helvbi"` \| `"utopia"` \| `"utopiab"` \| `"utopiai"` \| `"xbritei"` \| `"xchartr"` \| `"xbritebi"` \| `"utopiabi"` \| `"xbriteb"` \| `"xchartri"` \| `"xhelvb"` \| `"xcourb"` \| `"xhelv"` \| `"xcourbi"` \| `"xcour"` \| `"xsbookbi"` \| `"xsansi"` \| `"xhelvbi"` \| `"xsansb"` \| `"trek"` \| `"xsbookb"` \| `"64f1____"` \| `"xcouri"` \| `"xsbooki"` \| `"xttyb"` \| `"xtimes"` \| `"4x4_offr"` \| `"advenger"` \| `"1943____"` \| `"aquaplan"` \| `"a_zooloo"` \| `"xsbook"` \| `"atc_gran"` \| `"this"` \| `"assalt_m"` \| `"atc_____"` \| `"asc_____"` \| `"battle_s"` \| `"b_m__200"` \| `"baz__bil"` \| `"c_ascii_"` \| `"c1______"` \| `"beer_pub"` \| `"shadow"` \| `"c_consen"` \| `"bubble__"` \| `"c2______"` \| `"bubble_b"` \| `"char3___"` \| `"caus_in_"` \| `"charact1"` \| `"char1___"` \| `"charact2"` \| `"charact4"` \| `"char4___"` \| `"char2___"` \| `"charact5"` \| `"charact6"` \| `"characte"` \| `"coil_cop"` \| `"charact3"` \| `"charset_"` \| `"d_dragon"` \| `"com_sen_"` \| `"dcs_bfmo"` \| `"convoy__"` \| `"demo_m__"` \| `"deep_str"` \| `"druid___"` \| `"devilish"` \| `"demo_2__"` \| `"demo_1__"` \| `"e__fist_"` \| `"eca_____"` \| `"ebbs_2__"` \| `"fair_mea"` \| `"faces_of"` \| `"fbr1____"` \| `"fairligh"` \| `"f15_____"` \| `"fbr2____"` \| `"fantasy_"` \| `"fbr_stri"` \| `"fbr_tilt"` \| `"flyn_sh"` \| `"fbr12___"` \| `"fp1_____"` \| `"finalass"` \| `"future_3"` \| `"funky_dr"` \| `"fireing_"` \| `"future_1"` \| `"fp2_____"` \| `"future_5"` \| `"future_2"` \| `"future_6"` \| `"future_4"` \| `"future_7"` \| `"grand_pr"` \| `"future_8"` \| `"gauntlet"` \| `"ghost_bo"` \| `"battlesh"` \| `"gothic__"` \| `"heroboti"` \| `"hills___"` \| `"green_be"` \| `"hades___"` \| `"house_of"` \| `"hypa_bal"` \| `"high_noo"` \| `"heavy_me"` \| `"henry3d"` \| `"italics_"` \| `"home_pak"` \| `"hyper___"` \| `"inc_raw_"` \| `"kgames_i"` \| `"krak_out"` \| `"kik_star"` \| `"lazy_jon"` \| `"letter_w"` \| `"lexible_"` \| `"master_o"` \| `"letterw3"` \| `"mad_nurs"` \| `"magic_ma"` \| `"joust___"` \| `"modern__"` \| `"mig_ally"` \| `"nfi1____"` \| `"npn_____"` \| `"mayhem_d"` \| `"outrun__"` \| `"mcg_____"` \| `"odel_lak"` \| `"notie_ca"` \| `"pacos_pe"` \| `"ok_beer_"` \| `"p_s_h_m_"` \| `"panther_"` \| `"platoon_"` \| `"platoon2"` \| `"pod_____"` \| `"xsansbi"` \| `"phonix__"` \| `"rally_s2"` \| `"rainbow_"` \| `"pawn_ins"` \| `"r2-d2___"` \| `"radical_"` \| `"xhelvi"` \| `"raw_recu"` \| `"rally_sp"` \| `"rampage_"` \| `"rastan__"` \| `"road_rai"` \| `"rok_____"` \| `"skateord"` \| `"rockbox_"` \| `"skate_ro"` \| `"roman___"` \| `"skateroc"` \| `"script__"` \| `"ripper_"` \| `"sketch_s"` \| `"sm______"` \| `"spc_demo"` \| `"stencil1"` \| `"stealth_"` \| `"street_s"` \| `"stencil2"` \| `"super_te"` \| `"subteran"` \| `"space_op"` \| `"star_war"` \| `"tec_7000"` \| `"tec1____"` \| `"taxi____"` \| `"tecrvs__"` \| `"top_duck"` \| `"tav1____"` \| `"timesofl"` \| `"ti_pan__"` \| `"trashman"` \| `"tomahawk"` \| `"tsn_base"` \| `"twin_cob"` \| `"tsm_____"` \| `"triad_st"` \| `"ucf_fan_"` \| `"unarmed_"` \| `"ts1_____"` \| `"xsans"` \| `"type_set"` \| `"ugalympi"` \| `"usa_____"` \| `"xtty"` \| `"asslt__m"` \| `"war_of_w"` \| `"vortron_"` \| `"usa_pq__"` \| `"yie_ar_k"` \| `"z-pilot_"` \| `"yie-ar__"` \| `"zig_zag_"` \| `"zone7___"` \| `"etcrvs__"` \| `"p_skateb"` \| `"ascii___"` \| `"t__of_ap"` \| `"rad_phan"` \| `"ebbs_1__"` \| `"rad_____"` \| `"new_asci"` \| `"rci_____"` | The name of the font to use for rendering. |
| `opts`? | `Options` | Optional parameters for font rendering. |

#### Returns

`Promise`\<`string`\>

- The ASCII art text.

#### Example

```ts
const asciiText = await asciiFont('Hello, World!', '3-d');
console.log(asciiText);
```

***

### box()

```ts
function box(text: string, options?: Options): string
```

Creates a styled box around the provided text.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to display inside the box. |
| `options`? | `Options` | Optional configuration options for the box. |

#### Returns

`string`

- The text with the styled box around it.

#### See

https://www.npmjs.com/package/boxen

#### Example

```ts
const boxedText = box('This is a boxed text', { padding: 1 });
console.log(boxedText);
```

***

### cache()

```ts
function cache<Values>(opts: CacheOptions<Values>): Promise<{
  defaultValues: values;
  get: <ID>(v?: ID) => Promise<ID extends keyof Values ? Values[ID<ID>] : ID extends string ? undefined : Values>;
  path: configPath;
  reset: () => Promise<void>;
  set: (obj: Partial<Values>) => Promise<void>;
}>
```

Creates a caching mechanism for storing and retrieving values.

#### Type Parameters

| Type Parameter |
| ------ |
| `Values` *extends* `Record`\<`string`, `unknown`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `CacheOptions`\<`Values`\> | Parameters for configuring the cache. |

#### Returns

`Promise`\<\{
  `defaultValues`: `values`;
  `get`: \<`ID`\>(`v`?: `ID`) => `Promise`\<`ID` *extends* keyof `Values` ? `Values`\[`ID`\<`ID`\>\] : `ID` *extends* `string` ? `undefined` : `Values`\>;
  `path`: `configPath`;
  `reset`: () => `Promise`\<`void`\>;
  `set`: (`obj`: `Partial`\<`Values`\>) => `Promise`\<`void`\>;
 \}\>

- An object with methods to interact with the cache.

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `defaultValues` | `Values` | values | The default values for the cache. |
| `get` | \<`ID`\>(`v`?: `ID`) => `Promise`\<`ID` *extends* keyof `Values` ? `Values`\[`ID`\<`ID`\>\] : `ID` *extends* `string` ? `undefined` : `Values`\> | - | Retrieve a value from the cache. **Example** `const theme = get('theme'); console.log(theme); // Output: 'light'` |
| `path` | `string` | configPath | The path to the cache file. |
| `reset` | () => `Promise`\<`void`\> | - | Resets the cache to its default values. **Example** `reset();` |
| `set` | (`obj`: `Partial`\<`Values`\>) => `Promise`\<`void`\> | - | Updates the cache with the provided values. Merges the existing cached values with the new partial values and updates the cache. |

#### Throws

If the cache value is unexpected or not found.

#### Example

```ts
import { cache } from "@dovenv/utils"

const { get, set } = await cache({
  projectName: 'myApp',
  id: 'userSettings',
  values: {
     theme: 'dark',
     language: 'en'
  },
});

// Set a new value in the cache
set({ theme: 'light' });

// Retrieve a value from the cache
const theme = get('theme');
console.log(theme); // Output: 'light'

// Retrieve all cached values
const allValues = get();
console.log(allValues); // Output: { theme: 'light', language: 'en' }

// Handle unexpected cache value
try {
  const nonExistentValue = get('nonExistent');
} catch (error) {
  console.error('Error:', error.message); // Output: Cache value is unexpected: nonExistent
}
```

***

### camel2Kebab()

```ts
function camel2Kebab(str: string): string
```

camelCase → kebab-case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### camel2Pascal()

```ts
function camel2Pascal(str: string): string
```

camelCase → PascalCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### camel2Snake()

```ts
function camel2Snake(str: string): string
```

camelCase → snake_case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### cancel()

```ts
function cancel(): never
```

Terminates the Node.js process with exit code 130.

This function is typically used to gracefully handle process termination,
such as when the user sends an interrupt signal (e.g., pressing Ctrl+C in the terminal).

#### Returns

`never`

***

### capitalize()

```ts
function capitalize(s: string): string
```

Capitalizes the first letter of a word.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `s` | `string` | The word to capitalize. |

#### Returns

`string`

- The capitalized word.

***

### catchError()

```ts
function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]>
```

Catches errors from a promise and returns a tuple indicating success or failure.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the resolved value of the promise. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `promise` | `Promise`\<`T`\> | The promise to handle errors for. |

#### Returns

`Promise`\<[`undefined`, `T`] \| [`Error`]\>

A promise that resolves to a tuple.
                                                     The tuple contains either `[undefined, T]` if the promise is resolved successfully,
                                                     or `[Error]` if an error occurs.

***

### catchExecOutput()

```ts
function catchExecOutput<Res>(command: string): Promise<[Error] | [undefined, Res]>
```

Executes a command and captures its output.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` | `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to execute, including any arguments. |

#### Returns

`Promise`\<[`Error`] \| [`undefined`, `Res`]\>

A promise that resolves with the captured output (stdout).

#### Throws

Will reject with an error if the command fails.

#### Example

```ts
const [error, output] = await catchExecOutput('dovenv --help')
if (error) {
  console.error(error);
} else {
  await writeFile('dovenvHelp.txt', output)
}
```

***

### chroma()

#### chroma(color)

```ts
function chroma(color: ChromaInput): Color
```

Attempts to guess the format of the input color for you.
For instance, it will recognize any named color from the W3CX11 specification.
If there's no matching named color, chroma.js checks for a hexadecimal string.
It ignores case, the # sign is optional, and it can recognize the shorter three
letter format as well. So, any of these are valid hexadecimal representations:

#ff3399, FF3399, #f39, etc.

In addition to hex strings, hexadecimal numbers (in fact, just any number between 0 and 16777215)
will be recognized, too.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `ChromaInput` |

##### Returns

`Color`

#### chroma(a, b, c, format)

```ts
function chroma(
   a: number, 
   b: number, 
   c: number, 
   format?: keyof ColorFormats): Color
```

Create a color in the specified color format using a, b and c as values.
The color format defaults to "rgb".

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `format`? | keyof ColorFormats |

##### Returns

`Color`

#### chroma(a, b, c, d, format)

```ts
function chroma(
   a: number, 
   b: number, 
   c: number, 
   d: number, 
   format?: keyof ColorFormats): Color
```

Create a color in the specified color format using a, b, c, and d as values.
The color format defaults to "rgb".

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `format`? | keyof ColorFormats |

##### Returns

`Color`

#### chroma(rgbArray)

```ts
function chroma(rgbArray: [number, number, number]): Color
```

Create a color from an array of RGB values. Each parameter must be within 0..255.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgbArray` | [`number`, `number`, `number`] |

##### Returns

`Color`

#### chroma(colorObject)

```ts
function chroma(colorObject: {}): Color
```

Create a color from an object with attributes corresponding to a color format.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `colorObject` | `object` |

##### Returns

`Color`

***

### color()

```ts
function color(...text: unknown[]): string
```

Provides colors for terminal output.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`text` | `unknown`[] |

#### Returns

`string`

#### Example

```ts
console.log(color.green('This text is green'));
```

***

### columns()

```ts
function columns<Data>(data: Data, options?: GlobalOptions): string
```

Formats data into aligned columns for better readability.

#### Type Parameters

| Type Parameter |
| ------ |
| `Data` *extends* [`ColumnData`](#columndata) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Data` | The data to format into columns. |
| `options`? | `GlobalOptions` | Optional configuration options for column formatting. |

#### Returns

`string`

- The text with the data formatted into columns.

#### See

https://www.npmjs.com/package/columnify

#### Example

```ts
// data for columns
const data = [
    {
        name: 'mod1',
        description: 'some description which happens to be far larger than the max',
        version: '0.0.1',
    },
    {
        name: 'module-two',
        description: 'another description larger than the max',
        version: '0.2.0',
    }
];

// set columns with custom config
const columnText = columns(data, {
    showHeaders: false,
    minWidth: 20,
    config: {
        description: {
            maxWidth: 30
        }
    }
});

// print columns
console.log(columnText);
```

***

### compress()

```ts
function compress(opts: CompressOptions): Promise<string>
```

Compresses a file or directory to a specified output directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `CompressOptions` | The options object. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the path of the compressed archive file.

#### Example

```ts
const compressedFilePath = await compress( {
  input   : resolve(  'build' ), // Path to the directory or file to compress
  output  : resolve(  'dist' ), // Directory where the compressed file should be saved
  name    : 'compressed-archive', // Optional name for the compressed archive file
  format  : 'zip', // Optional format for the compressed archive file
} )
```

***

### compressDir()

```ts
function compressDir(params: CompressDirOptions): Promise<string>
```

Compresses a directory to a specified output directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `CompressDirOptions` | The options object. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the path of the compressed archive file.

#### Example

```ts
const compressedFilePath = await compressDir( {
  input   : resolve(  'build' ), // Path to the directory to compress
  output  : resolve(  'dist' ), // Directory where the compressed file should be saved
  name    : 'compressed-archive', // Optional name for the compressed archive file
  format  : 'zip', // Optional format for the compressed archive file
} )
```

***

### compressFile()

```ts
function compressFile(params: CompressFileOptions): Promise<string>
```

Compresses a file to a specified output directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `CompressFileOptions` | The options object. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the path of the compressed file.

#### Example

```ts
const compressedFilePath = await compressFile( {
  input : resolve( 'file.txt' ),
  output: resolve( 'compressed' ),
  name  : 'renamed-compressed-file',
  format: 'tar',
  opts  : {
    tar: {
      strip: 1,
    },
  },
} )
```

***

### compressFiles()

```ts
function compressFiles(params: CompressFilesOptions): Promise<void>
```

Compresses multiple files matching the given input patterns to a specified output directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `CompressFilesOptions` | The options object. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when all files have been compressed.

#### Example

```ts
await compressFiles( {
  input  : [ 'src/*.js' ],
  output : 'compressed',
  format : 'tar',
  hook   : {
    beforeFile: (file) => console.log(`Compressing ${file}...`),
    afterFile : (file) => console.log(`${file} compressed.`),
  },
} )
```

***

### copyDir()

```ts
function copyDir(options: {
  input: string;
  output: string;
}): Promise<void>
```

Copy a directory from input path to output path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options object with input and output paths. |
| `options.input` | `string` | - |
| `options.output` | `string` | - |

#### Returns

`Promise`\<`void`\>

- Resolves when the directory has been copied.

#### Throws

If there is an error copying the directory.

#### Example

```ts
const copyResult = await copyDir({
  input : '/path/to/sourceDir',
  output: '/path/to/destinationDir',
})
```

***

### copyFile()

```ts
function copyFile(options: {
  input: string;
  output: string;
}): Promise<void>
```

Copy a file from input path to output path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options object with input and output paths. |
| `options.input` | `string` | - |
| `options.output` | `string` | - |

#### Returns

`Promise`\<`void`\>

- Resolves when the file has been copied.

#### Throws

If there is an error copying the file.

#### Example

```ts
import { copyFile } from '@dovenv/utils'

const copyResult = await copyFile({
  input : '/path/to/source.txt',
  output: '/path/to/destination.txt',
})
```

***

### createBadgeURL()

```ts
function createBadgeURL(params: BadgeURL): string
```

Create shields.io URL.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `BadgeURL` |

#### Returns

`string`

#### See

https://shields.io/badges/

#### Example

```ts
const badgeURL = createBadgeURL({path: 'badge/any_text-you_like-blue'})
```

***

### createCli()

```ts
function createCli(options: {
  args: process.argv;
  fn: <Cli>(cli: Cli) => Promise<Cli>;
}): Promise<Argv<{}>>
```

Create a cli interface.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options object with argv and a function to setup the cli. |
| `options.args` | `string`[] | - |
| `options.fn` | \<`Cli`\>(`cli`: `Cli`) => `Promise`\<`Cli`\> | - |

#### Returns

`Promise`\<`Argv`\<\{\}\>\>

- Resolves with the cli interface.

#### Example

```ts
import { createCli, hideBin } from '@dovenv/utils'
const args = hideBin( process.argv ) // removes the uneeded arguments
const cli = await createCli({
  args : args,
  fn   : async cli => {

    cli.command( 'build', 'Run the build process', async () => {
      // ...
    } ).command( 'dev', 'Run the dev server', async () => {
      // ...
    } ).command( 'preview', 'Run the preview server', async () => {
      // ...
    } ).demandCommand( 1, 'You need to specify a command (build, dev, or preview)' )

    return cli

  },
} )
```

***

### createDir()

```ts
function createDir(path: string): Promise<void>
```

Creates a directory at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the directory to create. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while creating the directory.

#### Example

```ts
import { createDir } from '@dovenv/utils'
await createDir('./my/dir')
```

***

### createMdLink()

```ts
function createMdLink(__namedParameters: MdLink): string
```

Creates a Markdown link or image from a name and URL.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `MdLink` |

#### Returns

`string`

- The constructed Markdown link or image.

***

### createMdLinks()

```ts
function createMdLinks(links: MdLink[]): string
```

Constructs Markdown links or images from an array of links.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `links` | `MdLink`[] | The links to construct. |

#### Returns

`string`

- The constructed Markdown string.

***

### createMergeDataFn()

```ts
function createMergeDataFn<Config>(opts?: Partial<Readonly<{}>>): (...config: (Config | Config[])[]) => Config
```

Creates a function to merge multiple configuration objects into a single configuration.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Config` | The type of the configuration objects. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `Partial`\<`Readonly`\<\{\}\>\> | Optional merge options for `deepmergeCustom`. |

#### Returns

`Function`

A function that accepts multiple configuration objects or arrays of configuration objects
                           and returns a single merged configuration object.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`config` | (`Config` \| `Config`[])[] |

##### Returns

`Config`

#### Example

```ts
const mergeConfig = createMergeDataFn<{ foo: string; bar: string }>()
const config1 = { foo: 'bar' }
const config2 = { bar: 'foo' }
const merged = mergeConfig( config1, config2 )
// or
const merged = mergeConfig( [ config1, config2 ] )
console.log( merged )
```

***

### createSymlink()

```ts
function createSymlink(options: {
  input: string;
  output: string;
}): Promise<void>
```

Creates a symbolic link from the input path to the output path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options object with input and output paths. |
| `options.input` | `string` | - |
| `options.output` | `string` | - |

#### Returns

`Promise`\<`void`\>

- Resolves when the symbolic link has been created.

#### Throws

If there is an error creating the symbolic link.

#### Example

```ts
import { createSymlink } from '@dovenv/utils'

const symlinkResult = await createSymlink({
  input : '/path/to/source',
  output: '/path/to/destination',
})
```

***

### createValidateSchema()

```ts
function createValidateSchema<Type>(schemaFn: (v: __module) => ValidateType<Type>): ValidateType<Type>
```

Creates and immediately returns a validation schema for a given TypeScript type.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Type` | The expected TypeScript type for the validation schema. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemaFn` | (`v`: `__module`) => [`ValidateType`](#validatetypet)\<`Type`\> | A function that defines the validation schema. |

#### Returns

[`ValidateType`](#validatetypet)\<`Type`\>

- The resulting validation schema.

#### Example

```ts
type User = { name: string}
const userSchema = createValidateSchema<User>((v) => v.object({ name: v.string().min(3) }));
```

***

### createValidateSchemaFn()

```ts
function createValidateSchemaFn<Type>(schemaFn: (v: __module) => ValidateType<Type>): (v: __module) => ValidateType<Type>
```

Creates a validation schema function for a given TypeScript type.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Type` | The expected TypeScript type for the validation schema. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemaFn` | (`v`: `__module`) => [`ValidateType`](#validatetypet)\<`Type`\> | A function that defines the validation schema. |

#### Returns

`Function`

- A function that returns the validation schema.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `__module` |

##### Returns

[`ValidateType`](#validatetypet)\<`Type`\>

#### Example

```ts
import {validate} from '@dovenv/utils' // validate = Zod  wrapper
type User = { name: string}
const schemaFn = createValidateSchemaFn<User>((v) => v.object({ name: v.string().min(3) }));
const userSchema = schemaFn(validate);
```

***

### decompress()

```ts
function decompress(params: DecompresFileOptions): Promise<string>
```

Decompresses an archive file (zip, tar, tgz) to a specified output directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `DecompresFileOptions` | The options object. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the path of the decompressed file or directory.

#### Example

```ts
await decompressFile( {
  input   : resolve(  'downloads', 'example-file.zip' ), // Path to the compressed file
  output  : resolve(  'decompressed' ),                  // Directory where the file should be decompressed
  newName : 'renamed-decompressed-file',                 // New name for the decompressed file or directory (optional)
  remove  : true,                                        // Remove the original compressed file after decompression
} )
```

***

### dedent()

A string tag that strips indentation from multi-line strings.

#### dedent(literals)

```ts
function dedent(literals: string): string
```

A string tag that strips indentation from multi-line strings.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `literals` | `string` |

##### Returns

`string`

#### dedent(strings, values)

```ts
function dedent(strings: TemplateStringsArray, ...values: unknown[]): string
```

A string tag that strips indentation from multi-line strings.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `strings` | `TemplateStringsArray` |
| ...`values` | `unknown`[] |

##### Returns

`string`

***

### delay()

```ts
function delay(ms: number): Promise<unknown>
```

Waits for the given number of milliseconds before resolving.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | The number of milliseconds to wait. |

#### Returns

`Promise`\<`unknown`\>

- A promise that resolves when the delay has finished.

#### Example

```ts
await delay( 1000 ); // waits 1 second
```

***

### deprecatedAlerts()

```ts
function deprecatedAlerts(): {
  hide: () => void;
  show: () => void;
}
```

Show/hide deprecation warnings in the process.

This function sets the `process.noDeprecation` property to `true` | `false`
Note: This is not recommended for production environments, as it might
hide useful deprecation warnings that should be addressed.

#### Returns

```ts
{
  hide: () => void;
  show: () => void;
}
```

An object with `show` and `hide` methods.

| Name | Type |
| ------ | ------ |
| `hide` | () => `void` |
| `show` | () => `void` |

#### Example

```ts
const { show, hide } = deprecatedAlerts()
hide()
// my code
show()
```

***

### deserializeValidation()

```ts
function deserializeValidation<R>(v: JsonSchema): R
```

#### Type Parameters

| Type Parameter |
| ------ |
| `R` *extends* [`ValidateAnyType`](#validateanytype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `JsonSchema` |

#### Returns

`R`

***

### downloadGitHubPath()

```ts
function downloadGitHubPath(args: {
  input: string;
  output: string;
  token: string;
}): Promise<void>
```

Downloads a directory from GitHub.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | `object` | An object containing the URL of the GitHub repo directory and the path to the output directory. |
| `args.input` | `string` | The URL of the GitHub repo directory. |
| `args.output` | `string` | The path to the output directory. |
| `args.token`? | `string` | The GitHub token for authentication. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await downloadGitHubPath({
	input  : 'https://github.com/pigeonposse/backan/tree/main/docs',
	output : './docs',
})
```

***

### downloadGitHubRelease()

```ts
function downloadGitHubRelease(options: {
  filename: string;
  newFilename: string;
  outputPath: string;
  repo: string;
  user: string;
  version: '';
}): Promise<void>
```

Downloads a GitHub release asset using the GitHub CLI and optionally renames the final file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options object. |
| `options.filename` | `string` | The name of the file to download. |
| `options.newFilename`? | `string` | The new name for the file after download (if applicable). |
| `options.outputPath` | `string` | The directory where the file should be saved. |
| `options.repo` | `string` | The GitHub project/repository name. |
| `options.user` | `string` | The GitHub username. |
| `options.version`? | `string` | The release version or 'latest' for the latest release. |

#### Returns

`Promise`\<`void`\>

***

### ensureDir()

```ts
function ensureDir(path: string): Promise<void>
```

Creates a directory if it does not exist.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the directory to create. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the directory has been created.

#### Example

```ts
await ensureDir('./path/to/directory')
```

***

### exec()

```ts
function exec(cmd: string): Promise<void>
```

Executes a command in the shell and waits for it to finish.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cmd` | `string` | The command to execute. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the command finishes successfully.

#### Throws

- Throws an error if the command fails.

***

### execChild()

```ts
function execChild(cmd: string): Promise<{
  stderr: string;
  stdout: string;
}>
```

Executes a command in a child process and captures its output.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cmd` | `string` | The command to execute. |

#### Returns

`Promise`\<\{
  `stderr`: `string`;
  `stdout`: `string`;
 \}\>

- A promise that resolves with the output of the command.

| Name | Type |
| ------ | ------ |
| `stderr` | `string` |
| `stdout` | `string` |

#### Throws

- Throws an error if the command fails, along with its stdout and stderr.

***

### execModulePath()

```ts
function execModulePath(params: {
  args: [];
  module: {
     from: string;
     id: string;
     path: string[];
    };
}): Promise<void>
```

Execute a module from a given path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `object` | Parameters for module execution. |
| `params.args`? | `string`[] | The arguments to pass to the module. |
| `params.module` | `object` | The module to execute. |
| `params.module.from`? | `string` | The path to resolve the module from. **Default** `process.cwd()` |
| `params.module.id` | `string` | The module entry name to resolve, such as a package name |
| `params.module.path`? | `string`[] | Optional additional path segments to join with the resolved module directory. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the module has finished executing.

#### Throws

Will reject with an error if the module fails to execute.

#### Example

```ts
// Execute the `bin/index.mjs` file in the `@dovenv/utils` module
await execModulePath({
  module: {
	  id: 'dovenv',
	  path: ['dist','cli.mjs'],
  },
  args: ['--help']
})
```

***

### execModulePathWithOutput()

```ts
function execModulePathWithOutput(params: {
  args: [];
  module: {
     from: string;
     id: string;
     path: string[];
    };
 }): Promise<{
  stderr: string;
  stdout: string;
}>
```

Execute a module from a given path and capture its output.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `object` | Parameters for module execution. |
| `params.args`? | `string`[] | The arguments to pass to the module. |
| `params.module` | `object` | The module to execute. |
| `params.module.from`? | `string` | The path to resolve the module from. **Default** `process.cwd()` |
| `params.module.id` | `string` | The module entry name to resolve, such as a package name |
| `params.module.path`? | `string`[] | Optional additional path segments to join with the resolved module directory. |

#### Returns

`Promise`\<\{
  `stderr`: `string`;
  `stdout`: `string`;
 \}\>

A promise that resolves with the captured output.

| Name | Type |
| ------ | ------ |
| `stderr` | `string` |
| `stdout` | `string` |

#### Throws

Will reject with an error if the module fails to execute.

#### Example

```ts
// Execute the `bin/index.mjs` file in the `dovenv` module and capture its output
const { stdout, stderr } = await execModulePathWithOutput({
  module: {
	  id: 'dovenv',
	  path: ['dist','cli.mjs'],
  },
  args: ['--help']
})
console.log('Output:', stdout)
```

***

### execProcess()

```ts
function execProcess(options: ExecProcessParams): Promise<void>
```

Executes a process with logging and error handling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `ExecProcessParams` | Options for the process execution. |

#### Returns

`Promise`\<`void`\>

- Resolves when the process execution completes.

#### Example

```ts
const onProcess = async ({ log }) => {
    log.info('Starting the process...');
    // Your process logic here
    log.success('Process completed successfully.');
};

const onError = async ({ log, error }) => {
    log.error('An error occurred:', error);
};

execProcess({
    name: 'MyProcess',
    on: onProcess,
    onError,
});
```

***

### existsDir()

```ts
function existsDir(path: string): Promise<boolean>
```

Checks if a directory exists at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if a directory exists at the specified path, otherwise false.

#### Example

```ts
import { existsDir } from '@dovenv/utils'
const exist = await existsDir('./my/dir')
```

***

### existsFile()

```ts
function existsFile(path: string): Promise<boolean>
```

Checks if a file exists at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the file. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if the file exists, otherwise false.

#### Throws

If an error occurs while checking the existence of the file.

#### Example

```ts
import { existsFile } from '@dovenv/utils'

const existPKG = await existsFile('./package.json')
```

***

### existsLocalBin()

```ts
function existsLocalBin(binName: string): Promise<boolean>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `binName` | `string` |

#### Returns

`Promise`\<`boolean`\>

***

### existsLocalBins()

```ts
function existsLocalBins<Bin>(binaries: Bin[]): Promise<{ [key in string]: boolean }>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Bin` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `binaries` | `Bin`[] |

#### Returns

`Promise`\<`{ [key in string]: boolean }`\>

***

### existsOptions()

```ts
function existsOptions(): boolean
```

Checks if there are additional command-line options provided.

#### Returns

`boolean`

True if there are more than two arguments in the process.argv array, indicating the presence of options; otherwise, false.

***

### existsPath()

```ts
function existsPath(path: string): Promise<boolean>
```

Checks if a file or directory exists at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if a file or directory exists at the specified path, otherwise false.

#### Throws

If an error occurs while checking the existence of the path.

#### Example

```ts
import { existsPath } from '@dovenv/utils'

const existPKG = await existsPath('./package.json')
```

***

### fetch2string()

```ts
function fetch2string(url: string): Promise<string>
```

Fetch content from a URL to string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | URL of the resource. |

#### Returns

`Promise`\<`string`\>

- The fetched content.

#### Throws

If there is an error fetching content from the URL.

#### Example

```ts
import { fetch2string } from '@dovenv/utils'

const imageData = await fetch2string('https://source.unsplash.com/random')
console.log(imageData)
```

***

### formatValidationError()

```ts
function formatValidationError(error: unknown): string
```

Converts a validation error into a pretty string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `unknown` | The error to convert. |

#### Returns

`string`

A pretty string representing the error.

***

### geMDTocString()

```ts
function geMDTocString(opts: MdTocStringOpts): Promise<string>
```

Creates a Markdown index from the given Markdown string.

- If the input is a path, reads the file input.
- If the input is a URL, fetches the content.
- if the input is a string, gets it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `MdTocStringOpts` | Options. |

#### Returns

`Promise`\<`string`\>

- The generated Markdown index as a string.

***

### getAbsolutePath()

```ts
function getAbsolutePath(...paths: string[]): string
```

Resolves path segments into an absolute path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`paths` | `string`[] | A sequence of paths or path segments. |

#### Returns

`string`

- The resolved absolute path.

#### Param

Path segments to resolve.

#### Throws

if any of the arguments is not a string.

***

### getArch()

```ts
function getArch(): "arm64" | "x64" | "unknown"
```

Returns the operating system CPU architecture.

#### Returns

`"arm64"` \| `"x64"` \| `"unknown"`

- The operating system CPU architecture.

***

### getArrayFlagValue()

```ts
function getArrayFlagValue(key: string): undefined | string[]
```

Gets the values of a flag passed to the process.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the flag to get the values of. |

#### Returns

`undefined` \| `string`[]

The values of the flag if it exists, or undefined.
                                    The values are returned as an array. If the flag appears multiple times, their values are concatenated.
                                    The flag can appear in two formats:
                                    - `--key=value1,value2,...` - The values are separated by commas.
                                    - `--key value1 value2 ...` - The values follow the flag in separate arguments.

***

### getBaseName()

```ts
function getBaseName(path: string, suffix?: string): string
```

Returns the last portion of a path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | the path to evaluate. |
| `suffix`? | `string` | optionally, an extension to remove from the result. |

#### Returns

`string`

#### Example

```ts
getBaseName('/path/file.txt') // 'file.txt'
getBaseName('/path/file.txt', '.txt') // 'file'
```

#### Throws

if `path` is not a string or if `ext` is given and is not a string.

***

### getBooleanFlagValue()

```ts
function getBooleanFlagValue(v: string): boolean
```

Checks if a boolean flag exists in the process arguments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `string` | The boolean flag to check for existence. |

#### Returns

`boolean`

True if the flag exists, false otherwise.

***

### getCharsAndWords()

```ts
function getCharsAndWords(text: string): {
  chars: number;
  words: number;
}
```

Gets the total number of characters and words in a given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The string to analyze. |

#### Returns

```ts
{
  chars: number;
  words: number;
}
```

- An object containing the total number of characters and words.

| Name | Type |
| ------ | ------ |
| `chars` | `number` |
| `words` | `number` |

#### Example

```ts
const result = getCharsAndWords("Hello world!");
console.log(result.chars); // 12
console.log(result.words); // 2
```

***

### getCharsAndWordsFrom()

```ts
function getCharsAndWordsFrom(options: GetCharsAndWordsFromOptions): Promise<{
  chars: 0;
  content: {
     chars: 0;
     words: 0;
    };
  paths: {
     chars: 0;
     words: 0;
    };
  url: {
     chars: 0;
     words: 0;
    };
  words: 0;
}>
```

Gets the total number of characters and words from various sources: glob pattern, URL, or string content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `GetCharsAndWordsFromOptions` | Options for processing content. |

#### Returns

`Promise`\<\{
  `chars`: `0`;
  `content`: \{
     `chars`: `0`;
     `words`: `0`;
    \};
  `paths`: \{
     `chars`: `0`;
     `words`: `0`;
    \};
  `url`: \{
     `chars`: `0`;
     `words`: `0`;
    \};
  `words`: `0`;
 \}\>

- Total characters and words in the content.

| Name | Type | Default value |
| ------ | ------ | ------ |
| `chars` | `number` | 0 |
| `content` | \{ `chars`: `0`; `words`: `0`; \} | - |
| `content.chars` | `number` | 0 |
| `content.words` | `number` | 0 |
| `paths` | \{ `chars`: `0`; `words`: `0`; \} | - |
| `paths.chars` | `number` | 0 |
| `paths.words` | `number` | 0 |
| `url` | \{ `chars`: `0`; `words`: `0`; \} | - |
| `url.chars` | `number` | 0 |
| `url.words` | `number` | 0 |
| `words` | `number` | 0 |

#### Throws

If an error occurs while processing.

#### Example

```ts
const result = await getCharsAndWordsFrom({ pattern: ['*.md'] });
console.log(result.chars); // Total characters
console.log(result.words); // Total words

const resultFromUrl = await getCharsAndWordsFrom({ url: 'https://example.com/file.txt' });
console.log(resultFromUrl);

const resultFromContent = await getCharsAndWordsFrom({ content: 'Direct string content' });
console.log(resultFromContent);
```

***

### getCharsAndWordsFromContent()

```ts
function getCharsAndWordsFromContent(param0: GetCharsAndWordsFromContentOptions): Promise<GetCharsAndWordsFromResponse>
```

Calculates the total number of characters and words from a list of string content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | `GetCharsAndWordsFromContentOptions` | An object containing the input strings to analyze. |

#### Returns

`Promise`\<`GetCharsAndWordsFromResponse`\>

- An object with the total number of characters and words.

#### Example

```ts
const result = await getCharsAndWordsFromContent({ input: ['Hello world!', 'This is a test.'] });
console.log(result.chars); // Total characters
console.log(result.words); // Total words
```

***

### getCharsAndWordsFromPaths()

```ts
function getCharsAndWordsFromPaths(param0: GetCharsAndWordsFromPathsOptions): Promise<GetCharsAndWordsFromResponse>
```

Gets the total number of characters and words in all files matching the given glob pattern.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | `GetCharsAndWordsFromPathsOptions` | An object containing the input glob pattern and options. |

#### Returns

`Promise`\<`GetCharsAndWordsFromResponse`\>

- An object with the total number of characters and words.

#### Throws

If an error occurs while reading the files.

#### Example

```ts
const result = await getCharsAndWordsFromPaths({ input: ['*.md'] });
console.log(result.chars); // Total characters
console.log(result.words); // Total words
```

***

### getCharsAndWordsFromUrl()

```ts
function getCharsAndWordsFromUrl(param0: GetCharsAndWordsFromPathsOptions): Promise<GetCharsAndWordsFromResponse>
```

Gets the total number of characters and words from the given URLs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | `GetCharsAndWordsFromPathsOptions` | An object containing the input URLs. |

#### Returns

`Promise`\<`GetCharsAndWordsFromResponse`\>

- An object with the total number of characters and words.

#### Throws

If an error occurs while fetching the URLs.

#### Example

```ts
const result = await getCharsAndWordsFromUrl({ input: ['https://example.com'] });
console.log(result.chars); // Total characters
console.log(result.words); // Total words
```

***

### getChoiceFlagValue()

```ts
function getChoiceFlagValue<VALUES>(v: string, values: Record<string, VALUES>): undefined | VALUES
```

Checks if a flag exists and the value matches one of the given values.

#### Type Parameters

| Type Parameter |
| ------ |
| `VALUES` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `string` | The key of the flag to check. |
| `values` | `Record`\<`string`, `VALUES`\> | An object with values to check against the value of the flag. |

#### Returns

`undefined` \| `VALUES`

The value of the flag if it exists and matches one of the given values, or undefined.

***

### getClosestPackageDir()

```ts
function getClosestPackageDir(startDir?: string): Promise<string>
```

Finds the closest package directory by traversing up the directory tree.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `startDir`? | `string` | `'./'` | Directory to start searching from. |

#### Returns

`Promise`\<`string`\>

Absolute path to the closest package directory.

***

### getClosestPackageJsonPath()

```ts
function getClosestPackageJsonPath(startDir?: string): Promise<string>
```

Finds the closest package.json by traversing up the directory tree.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `startDir`? | `string` | `'./'` | Directory to start searching from. |

#### Returns

`Promise`\<`string`\>

Absolute path to the closest package.json.

#### Throws

If no package.json is found.

***

### getCmd()

```ts
function getCmd(v: string): boolean
```

Checks if a specific command exists in the process arguments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `string` | The command to check for existence. |

#### Returns

`boolean`

True if the command exists in the process arguments; otherwise, false.

***

### getCountFromPaths()

```ts
function getCountFromPaths(param0: GetCharsAndWordsFromPathsOptions): Promise<{
  chars: number;
  files: files.length;
  words: number;
}>
```

Gets the total number of characters and words in all files matching the given glob pattern.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | `GetCharsAndWordsFromPathsOptions` | An object containing the input glob pattern and options. |

#### Returns

`Promise`\<\{
  `chars`: `number`;
  `files`: `files.length`;
  `words`: `number`;
 \}\>

- An object with properties for the number of files, the total number of characters, and the total number of words.

| Name | Type | Default value |
| ------ | ------ | ------ |
| `chars` | `number` | - |
| `files` | `number` | files.length |
| `words` | `number` | - |

#### Throws

If there is an error while reading the files.

***

### getCurrentDateTime()

```ts
function getCurrentDateTime(): {
  day: string;
  hours: string;
  minutes: string;
  month: string;
  seconds: string;
  year: string;
}
```

Gets the current date and time as an object containing separate fields for year, month, day, hours, minutes, and seconds.

#### Returns

```ts
{
  day: string;
  hours: string;
  minutes: string;
  month: string;
  seconds: string;
  year: string;
}
```

- An object representing the current date and time.

| Name | Type |
| ------ | ------ |
| `day` | `string` |
| `hours` | `string` |
| `minutes` | `string` |
| `month` | `string` |
| `seconds` | `string` |
| `year` | `string` |

***

### getCurrentDateTimeString()

```ts
function getCurrentDateTimeString(): string
```

Gets the current date and time in ISO 8601 format as a string.

#### Returns

`string`

- The current date and time as an ISO 8601 string.

***

### getCurrentDir()

```ts
function getCurrentDir(path?: string): string
```

Gets the current directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path`? | `string` | An optional path to resolve the directory from. |

#### Returns

`string`

- The current directory.

#### Example

```ts
getCurrentDir()
```

***

### getDirName()

```ts
function getDirName(path: string): string
```

Returns the directory name of a path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | the path to evaluate. |

#### Returns

`string`

#### Example

```ts
getDirName('/path/to/file.txt') // '/path/to'
```

#### Throws

if `path` is not a string.

***

### getDirTree()

```ts
function getDirTree(props: {
  input: string;
  max: number;
  opts: TreeConfig;
  sort: "atoz" | "ztoa";
}): Promise<string>
```

Generates a string representing the directory structure of a given path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `object` | Function props. |
| `props.input` | `string` | The root path of the directory to read. |
| `props.max`? | `number` | The maximum number of directories to traverse. |
| `props.opts`? | `TreeConfig` | - |
| `props.sort`? | `"atoz"` \| `"ztoa"` | The order to traverse the directories. **Default** `'atoz'` |

#### Returns

`Promise`\<`string`\>

The directory structure as a string.

***

### getExtName()

```ts
function getExtName(path: string): string
```

Returns the file extension of a path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | the path to evaluate. |

#### Returns

`string`

#### Example

```ts
getExtName('file.txt') // '.txt'
```

#### Throws

if `path` is not a string.

***

### getFileText()

```ts
function getFileText(path: string): Promise<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`\<`string`\>

***

### getFilteredFileNames()

```ts
function getFilteredFileNames(props: {
  extensions: [];
  path: string;
}): Promise<string[]>
```

Gets the file names in a directory and filters them by extension.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `object` | Function props. |
| `props.extensions` | `string`[] | Array of extensions to filter by, e.g., ['.md', '.txt']. |
| `props.path` | `string` | Path to the directory. |

#### Returns

`Promise`\<`string`[]\>

- A promise that resolves with an array of file names without extensions.

***

### getHTML()

```ts
function getHTML(path: string): Promise<string>
```

Retrieves the HTML content from a given path or URL or string.

- If the input is a path, reads the file content.
- If the input is a URL, fetches the content.
- If the input is a string, returns it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path or URL to retrieve the HTML content from. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the HTML content as a string.

***

### getLocalNodeBinPath()

```ts
function getLocalNodeBinPath(__namedParameters: {
  name: string;
  opts: EnvOptions;
}): Promise<undefined | string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.opts`? | `EnvOptions` |

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### getLocalPkgPath()

```ts
function getLocalPkgPath(packageName: string): undefined | string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `packageName` | `string` |

#### Returns

`undefined` \| `string`

***

### getMatch()

```ts
function getMatch(
   inputs: string | readonly string[], 
   patterns: string | readonly string[], 
   options?: Options): string[]
```

Simple [wildcard](https://en.wikipedia.org/wiki/Wildcard_character) matching.

It matches even across newlines. For example, `foo*r` will match `foo\nbar`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputs` | `string` \| readonly `string`[] | The string or array of strings to match. |
| `patterns` | `string` \| readonly `string`[] | The string or array of string patterns. Use `*` to match zero or more characters. A leading `!` negates the pattern. |
| `options`? | `Options` | - |

#### Returns

`string`[]

An array of `inputs` filtered based on the `patterns`.

#### Example

```
import {matcher} from 'matcher';

matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
//=> ['moo']

matcher(['foo', 'bar', 'moo'], ['!*oo']);
//=> ['bar']

matcher('moo', ['']);
//=> []

matcher('moo', []);
//=> []

matcher([''], ['']);
//=> ['']
```

***

### getMD()

```ts
function getMD(path: string): Promise<string>
```

Retrieves the Markdown content from a given path or URL or string.

- If the input is a path, reads the file content.
- If the input is a URL, fetches the content.
- If the input is a string, returns it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path or URL to retrieve the Markdown content from. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the Markdown content as a string.

***

### getMDToc()

```ts
function getMDToc(input: string): Promise<{
  anchor: string;
  level: number;
  title: string;
}[]>
```

Parses the given Markdown string and returns an array of objects containing
the title, level and anchor for each header found.

- If the input is a path, reads the file input.
- If the input is a URL, fetches the content.
- if the input is a string, gets it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The Markdown input to parse. |

#### Returns

`Promise`\<\{
  `anchor`: `string`;
  `level`: `number`;
  `title`: `string`;
 \}[]\>

- An array of objects with the following properties:
                                   - `level`: The header level (1-6).
                                   - `title`: The header title.
                                   - `anchor`: The header anchor.

***

### getMediaInput()

```ts
function getMediaInput(input: MediaInput): Promise<Buffer<ArrayBufferLike>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MediaInput`](#mediainput) |

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

***

### getMediaPalette()

```ts
function getMediaPalette(input: MediaInput, colorCount: number): Promise<string[]>
```

Extracts a color palette from a PNG image using pngjs.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | [`MediaInput`](#mediainput) | `undefined` | The image file path or buffer. |
| `colorCount` | `number` | `6` | Number of colors to extract. |

#### Returns

`Promise`\<`string`[]\>

- Array of HEX color codes.

***

### getModulePath()

```ts
function getModulePath(opts: {
  from: string;
  id: string;
  path: string[];
}): Promise<string>
```

Resolves the directory path of a specified module entry.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | An object with options for resolving the module path. |
| `opts.from`? | `string` | The path to resolve the module from. **Default** `process.cwd()` |
| `opts.id` | `string` | The module entry name to resolve, such as a package name |
| `opts.path`? | `string`[] | Optional additional path segments to join with the resolved module directory. |

#### Returns

`Promise`\<`string`\>

- The resolved directory path of the module.

#### Throws

If the module cannot be found in the lookup paths.

#### Example

```ts
const moduleDir = await getModulePath({ id: '@dovenv/utils' })
console.log(moduleDir) // returns: {workspace}/node_modules/@dovenv/utils

const moduleFile = await getModulePath({ id: '@dovenv/utils', path: ['dist','main.mjs'] })
console.log(moduleFile) // returns: {workspace}/node_modules/@dovenv/utils/index.js
```

***

### getObjectFrom()

```ts
function getObjectFrom<Res>(input: string): Promise<Res>
```

Retrieve an object from either a file specified by path or a URL.
Supports JSON, YAML, and TOML formats.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | Path to a file or URL of the resource. |

#### Returns

`Promise`\<`Res`\>

- The object retrieved from the file or URL.

#### Throws

If there is an error fetching data or parsing the object.

#### Example

```ts
import { getObjectFrom } from "@dovenv/utils"

const objectFromYamlUrl = await getObjectFrom( 'https://raw.githubusercontent.com/pigeonposse/super8/main/.pigeonposse.yml' )
const objectFromJSON = await getObjectFrom('/my/file.json')

console.log( objectFromYamlUrl, objectFromJSON )
```

***

### getObjectFromContent()

```ts
function getObjectFromContent<Res>(data: string): Promise<Res>
```

Get object from JSON, YAML, TOML, JS, INI, CSV, or XML string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | The string to parse. |

#### Returns

`Promise`\<`Res`\>

- The parsed object.

#### Throws

If the data is not a valid object.

#### Example

```ts
import { getObjectFromContent } from "@dovenv/utils"

const jsonContent  = '{"name": "super8"}'
const yamlContent  = 'name: super8'
const tomlContent  = 'name = "super8"'
const object1      = await getObjectFromContent( jsonContent )
const object2      = await getObjectFromContent( yamlContent )
const object3      = await getObjectFromContent( tomlContent )

console.log( object1, object2, object3 )
```

***

### getObjectFromCSVContent()

```ts
function getObjectFromCSVContent<Res>(content: string, options: Options): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |
| `options` | `Options` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromCSVFile()

```ts
function getObjectFromCSVFile<Res>(path: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromFile()

```ts
function getObjectFromFile<Res>(path: string): Promise<Res>
```

Retrieve an object from a file specified by path.
Supports JSON, YAML, TOML, JS, INI, CSV, or XML formats.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file. |

#### Returns

`Promise`\<`Res`\>

- The object retrieved from the file.

#### Throws

If the file does not exist, or if the data is not an object.

#### Example

```ts
import { getObjectFromFile } from "@dovenv/utils"

const objectFromJSON = await getObjectFromFile('/my/file.json')
const objectFromYAML = await getObjectFromFile('/my/file.yaml')
const objectFromTOML = await getObjectFromFile('/my/file.toml')
const objectFromINI = await getObjectFromFile('/my/file.ini')
console.log(
  objectFromJSON,
  objectFromYAML,
  objectFromTOML,
  objectFromINI
)
```

***

### getObjectFromINIContent()

```ts
function getObjectFromINIContent<Res>(content: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromINIFile()

```ts
function getObjectFromINIFile<Res>(path: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromJSContent()

```ts
function getObjectFromJSContent<Res>(content: string, part: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `content` | `string` | `undefined` |
| `part` | `string` | `'default'` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromJSFile()

```ts
function getObjectFromJSFile<Res>(path: string, part: string): Promise<Res>
```

Get object from a JavaScript file.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `path` | `string` | `undefined` | Path to the JavaScript file. |
| `part` | `string` | `'default'` | The part of the module to import. Defaults to 'default'. |

#### Returns

`Promise`\<`Res`\>

- The imported object.

#### Throws

If there is an error importing the module.

#### Example

```ts
import { getObjectFromJSFile } from "@dovenv/utils"

const content = await getObjectFromJSFile('/my/file.js')
const part = await getObjectFromJSFile('/my/fs.js', 'path')
console.log(content, part)
```

***

### getObjectFromJSONContent()

```ts
function getObjectFromJSONContent<Res>(content: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromJSONFile()

```ts
function getObjectFromJSONFile<Res>(path: string): Promise<Res>
```

Get object from a JSON file.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the JSON file. |

#### Returns

`Promise`\<`Res`\>

- The parsed JSON object.

#### Throws

If there is an error reading the JSON file.

#### Example

```ts
import { getObjectFromJSONFile } from "@dovenv/utils"

const object = await getObjectFromJSONFile('/my/file.json')
console.log( object )
```

***

### getObjectFromNonCheckFile()

```ts
function getObjectFromNonCheckFile<Res>(path: string): Promise<Res>
```

Retrieve an object from a file without checking if is correct file extension.
Supports JSON, YAML, TOML, JS, INI, CSV, or XML formats.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file. |

#### Returns

`Promise`\<`Res`\>

- The object retrieved from the file.

#### Throws

If there is an error reading the file or if the data is not an object.

#### Example

```ts
import { getObjectFromNonCheckFile } from "@dovenv/utils"

const objectFromFile = await getObjectFromNonCheckFile('/my/file') // without extension
console.log(objectFromFile)
```

***

### getObjectFromPath()

```ts
function getObjectFromPath<Res>(path: string, filename: string): Promise<Res>
```

Retrieve an object from a file specified by path and filename.
Supports JSON, YAML, TOML, JS, INI, CSV, or XML formats.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the directory containing the file. |
| `filename` | `string` | Name of the file (without extension). |

#### Returns

`Promise`\<`Res`\>

- The object retrieved from the file.

#### Throws

If the file does not exist, or if the data is not an object.

#### Example

```ts
import { getObjectFromPath } from "@dovenv/utils"

const content = await getObjectFromPath('/my/directory', 'my-file-name')
console.log( content )
```

***

### getObjectFromTOMLContent()

```ts
function getObjectFromTOMLContent<Res>(content: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromTOMLFile()

```ts
function getObjectFromTOMLFile<Res>(path: string): Promise<Res>
```

Get object from a TOML file.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the JSON file. |

#### Returns

`Promise`\<`Res`\>

- The parsed JSON object.

#### Throws

If there is an error reading the JSON file.

#### Example

```ts
import { getObjectFromTOMLFile } from "@dovenv/utils"

const objectFromTOML = await getObjectFromTOMLFile('/my/file.toml')
console.log(objectFromTOML)
```

***

### getObjectFromUrl()

```ts
function getObjectFromUrl<Res>(url: string): Promise<Res>
```

Retrieve an object from a URL.
Supports JSON, YAML, and TOML formats.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | URL of the resource. |

#### Returns

`Promise`\<`Res`\>

- The object retrieved from the URL.

#### Throws

If there is an error fetching data from the URL or parsing the object.

#### Example

```ts
import { getObjectFromUrl } from "@dovenv/utils"

// from YAML url
const objectFromYamlUrl = await getObjectFromUrl( 'https://raw.githubusercontent.com/pigeonposse/super8/main/.pigeonposse.yml' )
// from JSON url
const objectFromJsonUrl = await getObjectFromUrl( 'https://raw.githubusercontent.com/pigeonposse/clippo/main/package.json')

console.log( objectFromYamlUrl, objectFromJsonUrl )
```

***

### getObjectFromXMLContent()

```ts
function getObjectFromXMLContent<Res>(content: string): Promise<Res>
```

Parses an XML content string into a JavaScript object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the parsed object. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The XML content string to be parsed. |

#### Returns

`Promise`\<`Res`\>

- A promise that resolves to the parsed XML as an object.

#### Throws

If there is an error parsing the XML content.

***

### getObjectFromXMLFile()

```ts
function getObjectFromXMLFile<Res>(path: string): Promise<Res>
```

Fetches and parses an XML file into a JavaScript object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the parsed object. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The file path of the XML file to be read and parsed. |

#### Returns

`Promise`\<`Res`\>

- A promise that resolves to the parsed XML as an object.

#### Throws

If there is an error reading or parsing the XML file.

***

### getObjectFromYAMLContent()

```ts
function getObjectFromYAMLContent<Res>(content: string): Promise<Res>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`Promise`\<`Res`\>

***

### getObjectFromYAMLFile()

```ts
function getObjectFromYAMLFile<Res>(path: string): Promise<Res>
```

Get object from a YAML file.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the JSON file. |

#### Returns

`Promise`\<`Res`\>

- The parsed JSON object.

#### Throws

If there is an error reading the JSON file.

#### Example

```ts
import { getObjectFromYAMLFile } from "@dovenv/utils"

const object = await getObjectFromYAMLFile('/my/file.yaml')
console.log( object )
```

***

### getPackage()

```ts
function getPackage(input: PackageInput, opts?: PackageOpts): Promise<{
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
}>
```

Retrieves a package from either a file specified by path, a URL, or a package name.

If the input is a URL, it retrieves the package from the npm registry.
If the input is a path, it retrieves the package from the file at the path or the package.json file in the directory.
If the input is a string, it retrieves the package from the npm registry with the given package name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`PackageInput`](#packageinput) | The package name, URL, or path to the package. |
| `opts`? | [`PackageOpts`](#packageopts) | Options object. |

#### Returns

`Promise`\<\{
  `devEngines`: \{
     `cpu`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `libc`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `os`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `packageManager`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `runtime`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
    \};
 \}\>

The package object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `devEngines`? | \{ `cpu`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `libc`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `os`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `packageManager`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `runtime`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; \} | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Throws

If the package is not found.

#### Example

```ts
const pkg = await getPackage('@dovenv/core')
console.log(pkg)

// from npm web
const pkg = await getPackage('https://www.npmjs.com/package/@dovenv/core')
console.log(pkg)

// from directory
const pkg = await getPackage('./packages/core')
console.log(pkg)
```

***

### getPackageDataFromPath()

```ts
function getPackageDataFromPath(input: string): Promise<PackageData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`Promise`\<[`PackageData`](#packagedata)\>

***

### getPackageFromName()

```ts
function getPackageFromName(input: string, opts?: PackageRemoteOpts): Promise<{
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
}>
```

Retrieves a package from the npm registry.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The name of the package you want to retrieve. |
| `opts`? | [`PackageRemoteOpts`](#packageremoteopts) | Options object. |

#### Returns

`Promise`\<\{
  `devEngines`: \{
     `cpu`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `libc`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `os`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `packageManager`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `runtime`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
    \};
 \}\>

The package object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `devEngines`? | \{ `cpu`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `libc`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `os`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `packageManager`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `runtime`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; \} | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Throws

If the package is not found.

#### Example

```ts
const pkg = await getPackageFromName('@dovenv/utils')
console.log(pkg)
```

***

### getPackageFromPath()

```ts
function getPackageFromPath(input: string): Promise<{
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
}>
```

Retrieves a package from a local file path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The path to the package. Supoorts directory paths or package.json file paths. |

#### Returns

`Promise`\<\{
  `devEngines`: \{
     `cpu`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `libc`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `os`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `packageManager`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `runtime`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
    \};
 \}\>

The package object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `devEngines`? | \{ `cpu`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `libc`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `os`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `packageManager`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `runtime`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; \} | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Throws

If the package is not found.

#### Example

```ts
const pkg = await getPackageFromPath('./packages/core/package.json')
console.log(pkg)

// from directory
const pkg = await getPackageFromPath('./packages/core')
console.log(pkg)
```

***

### getPackageFromUrl()

```ts
function getPackageFromUrl(input: PackageURL, opts?: PackageRemoteOpts): Promise<{
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
}>
```

Retrieves a package from the npm registry.

If the input is a URL, it extracts the package name from the path.
If the path starts with '/package/', the package name is the next part of the path.
Otherwise, the package name is the first part of the path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`PackageURL`](#packageurl) | The name or URL of the package you want to retrieve. |
| `opts`? | [`PackageRemoteOpts`](#packageremoteopts) | Options object. |

#### Returns

`Promise`\<\{
  `devEngines`: \{
     `cpu`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `libc`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `os`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `packageManager`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
     `runtime`: `undefined` \| \{
        `name`: `string`;
        `onFail`: `"warn"` \| `"error"` \| `"ignore"`;
        `version`: `string`;
       \};
    \};
 \}\>

The package object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `devEngines`? | \{ `cpu`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `libc`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `os`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `packageManager`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; `runtime`: `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \}; \} | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Throws

If the package is not found.

#### Example

```ts
const pkg = await getPackageFromUrl('https://registry.npmjs.org/@dovenv/utils')
console.log(pkg)

// from npm web
const pkg = await getPackageFromUrl('https://www.npmjs.com/package/backan?activeTab=code')
console.log(pkg)
```

***

### getPackageJsonPath()

```ts
function getPackageJsonPath(input: string): string
```

Returns the path to the package.json file for the given package path.

If the given path is a directory, it appends 'package.json' to the path.
If the given path is a file, it returns the path as is.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The path to the package. Supports directory paths or package.json file paths. |

#### Returns

`string`

The path to the package.json file.

#### Example

```ts
const pkgJsonPath = getPackageJsonPath('./packages/core/package.json')
console.log(pkgJsonPath)

// from directory
const pkgJsonPath = getPackageJsonPath('./packages/core')
console.log(pkgJsonPath)
```

***

### getPackageManager()

```ts
function getPackageManager(input: PackageInput, opts?: {
  pkg: PackageOpts;
}): Promise<PackageManagerData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PackageInput`](#packageinput) |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageOpts`](#packageopts) |

#### Returns

`Promise`\<[`PackageManagerData`](#packagemanagerdata)\>

***

### getPackageManagerCommands()

```ts
function getPackageManagerCommands(manager: PackageManager, monoRepo: boolean): PackageManagerCmdsValue
```

Retrieves the package manager commands for the given package manager and monorepo mode.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `manager` | [`PackageManager`](#packagemanager) | The package manager. |
| `monoRepo` | `boolean` | Whether the workspace is a monorepo. |

#### Returns

[`PackageManagerCmdsValue`](#packagemanagercmdsvalue)

The package manager commands.

***

### getPackageManagerFromContent()

```ts
function getPackageManagerFromContent(input: {
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
 }): PackageManagerData
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `object` | - |
| `input.devEngines`? | `object` | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `input.devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Returns

[`PackageManagerData`](#packagemanagerdata)

***

### getPackageManagerFromName()

```ts
function getPackageManagerFromName(input: string, opts?: {
  pkg: PackageRemoteOpts;
}): Promise<PackageManagerData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageRemoteOpts`](#packageremoteopts) |

#### Returns

`Promise`\<[`PackageManagerData`](#packagemanagerdata)\>

***

### getPackageManagerFromPath()

```ts
function getPackageManagerFromPath(input: string): Promise<PackageManagerData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`Promise`\<[`PackageManagerData`](#packagemanagerdata)\>

***

### getPackageManagerFromUrl()

```ts
function getPackageManagerFromUrl(input: PackageURL, opts?: {
  pkg: PackageRemoteOpts;
}): Promise<PackageManagerData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PackageURL`](#packageurl) |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageRemoteOpts`](#packageremoteopts) |

#### Returns

`Promise`\<[`PackageManagerData`](#packagemanagerdata)\>

***

### getPackageRepoUrl()

```ts
function getPackageRepoUrl(input: PackageInput, opts?: PackageRepoUrlOpts & {
  pkg: PackageOpts;
}): Promise<undefined | string>
```

Retrieves the repository URL for a package given its path, URL, name, or content.

This function takes an input which can be a package path, URL, name, or content,
and returns the repository URL, optionally appending the directory if specified in the options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`PackageInput`](#packageinput) | The package path, URL, name, or content to retrieve the repository URL for. |
| `opts`? | [`PackageRepoUrlOpts`](#packagerepourlopts) & \{ `pkg`: [`PackageOpts`](#packageopts); \} | Options for URL retrieval, including whether to append the directory. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise resolving to the sanitized repository URL with optional directory, or undefined if not found.

#### Throws

Will throw an error if there is an unexpected error retrieving the URL.

#### Example

```ts
const repoUrl = await getPackageRepoUrl('./packages/core')
console.log(repoUrl)

// from npm web
const repoUrl = await getPackageRepoUrl('https://www.npmjs.com/package/@dovenv/utils')
console.log(repoUrl)

// from package name
const repoUrl = await getPackageRepoUrl('@dovenv/utils')
console.log(repoUrl)

// from package content
const pkg = await getPackage('@dovenv/utils')
const repoUrl = await getPackageRepoUrl(pkg)
console.log(repoUrl)
```

***

### getPackageRepoUrlFromContent()

```ts
function getPackageRepoUrlFromContent(input: {
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
 }, opts?: PackageRepoUrlOpts): undefined | string
```

Retrieves the repository URL from the given package JSON content.

If the repository is an object with a 'url' property, and the 'dir' option is true,
the directory is appended to the URL.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `object` | The package JSON object containing repository information. |
| `input.devEngines`? | `object` | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `input.devEngines.cpu`? | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.libc`? | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.os`? | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.packageManager`? | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.runtime`? | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `opts`? | [`PackageRepoUrlOpts`](#packagerepourlopts) | Options for URL retrieval. |

#### Returns

`undefined` \| `string`

The sanitized repository URL with optional directory, or undefined if not found.

#### Throws

Will throw an error if there is an unexpected error retrieving the URL.

#### Example

```ts
const pkg = await getPackage('@dovenv/utils') // get package.json object
const repoUrl = await getPackageRepoUrlFromContent(pkg)
console.log(repoUrl)
```

***

### getPackageRepoUrlFromName()

```ts
function getPackageRepoUrlFromName(input: string, opts?: PackageRepoUrlOpts & {
  pkg: PackageRemoteOpts;
}): Promise<undefined | string>
```

Retrieves the repository URL for a package given its name.

This function fetches the package JSON using the package name and extracts
the repository URL, optionally appending the directory if specified in the options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The name of the package to retrieve the repository URL for. |
| `opts`? | [`PackageRepoUrlOpts`](#packagerepourlopts) & \{ `pkg`: [`PackageRemoteOpts`](#packageremoteopts); \} | Options for URL retrieval, including whether to append the directory. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise resolving to the sanitized repository URL with optional directory, or undefined if not found.

#### Throws

Will throw an error if there is an unexpected error retrieving the URL.

#### Example

```ts
const repoUrl = await getPackageRepoUrlFromName('@dovenv/utils')
console.log(repoUrl)
```

***

### getPackageRepoUrlFromPath()

```ts
function getPackageRepoUrlFromPath(input: string, opts?: PackageRepoUrlOpts): Promise<undefined | string>
```

Retrieves the repository URL for a package given its file path.

This function fetches the package JSON using the package path and extracts
the repository URL, optionally appending the directory if specified in the options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The file path of the package to retrieve the repository URL for. |
| `opts`? | [`PackageRepoUrlOpts`](#packagerepourlopts) | Options for URL retrieval, including whether to append the directory. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise resolving to the sanitized repository URL with optional directory, or undefined if not found.

#### Throws

Will throw an error if there is an unexpected error retrieving the URL.

#### Example

```ts
const repoUrl = await getPackageRepoUrlFromPath('./packages/core')
console.log(repoUrl)
```

***

### getPackageRepoUrlFromUrl()

```ts
function getPackageRepoUrlFromUrl(input: PackageURL, opts?: PackageRepoUrlOpts & {
  pkg: PackageRemoteOpts;
}): Promise<undefined | string>
```

Retrieves the repository URL for a package given its URL.

This function fetches the package JSON using the package URL and extracts
the repository URL, optionally appending the directory if specified in the options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`PackageURL`](#packageurl) | The URL of the package to retrieve the repository URL for. |
| `opts`? | [`PackageRepoUrlOpts`](#packagerepourlopts) & \{ `pkg`: [`PackageRemoteOpts`](#packageremoteopts); \} | Options for URL retrieval, including whether to append the directory. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise resolving to the sanitized repository URL with optional directory, or undefined if not found.

#### Throws

Will throw an error if there is an unexpected error retrieving the URL.

#### Example

```ts
const repoUrl = await getPackageRepoUrlFromUrl('https://registry.npmjs.org/@dovenv/utils')
console.log(repoUrl)
```

***

### getPackageRuntime()

```ts
function getPackageRuntime(input: PackageInput, opts?: {
  pkg: PackageOpts;
}): Promise<RuntimeData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PackageInput`](#packageinput) |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageOpts`](#packageopts) |

#### Returns

`Promise`\<[`RuntimeData`](#runtimedata)\>

***

### getPackageRuntimeFromContent()

```ts
function getPackageRuntimeFromContent(input: {
  devEngines: {
     cpu: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     libc: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     os: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     packageManager: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
     runtime: undefined | {
        name: string;
        onFail: "warn" | "error" | "ignore";
        version: string;
       };
    };
 }): RuntimeData
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `object` | - |
| `input.devEngines`? | `object` | The devEngines field aids engineers working on a codebase to all be using the same tooling. **See** https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devengines |
| `input.devEngines.cpu` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.libc` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.os` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.packageManager` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |
| `input.devEngines.runtime` | `undefined` \| \{ `name`: `string`; `onFail`: `"warn"` \| `"error"` \| `"ignore"`; `version`: `string`; \} | - |

#### Returns

[`RuntimeData`](#runtimedata)

***

### getPackageRuntimeFromName()

```ts
function getPackageRuntimeFromName(input: string, opts?: {
  pkg: PackageRemoteOpts;
}): Promise<RuntimeData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageRemoteOpts`](#packageremoteopts) |

#### Returns

`Promise`\<[`RuntimeData`](#runtimedata)\>

***

### getPackageRuntimeFromPath()

```ts
function getPackageRuntimeFromPath(input: string): Promise<RuntimeData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`Promise`\<[`RuntimeData`](#runtimedata)\>

***

### getPackageRuntimeFromUrl()

```ts
function getPackageRuntimeFromUrl(input: PackageURL, opts?: {
  pkg: PackageRemoteOpts;
}): Promise<RuntimeData>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PackageURL`](#packageurl) |
| `opts`? | `object` |
| `opts.pkg`? | [`PackageRemoteOpts`](#packageremoteopts) |

#### Returns

`Promise`\<[`RuntimeData`](#runtimedata)\>

***

### getPackageVersion()

```ts
function getPackageVersion(input: PackageInput): Promise<undefined | string>
```

Retrieves the version of a package.

This function takes an input which can be a package name, URL, or path,
and returns the version of the specified package.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`PackageInput`](#packageinput) | The package identifier (name, URL, or path). |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise that resolves to the package version.

#### Throws

If the package is not found or an error occurs during retrieval.

***

### getPackageWorkspacePaths()

```ts
function getPackageWorkspacePaths(opts: Required<WorkspaceOpts> & {
  manager: PackageManager;
}): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `Required`\<[`WorkspaceOpts`](#workspaceopts)\> & \{ `manager`: [`PackageManager`](#packagemanager); \} |

#### Returns

`Promise`\<`string`[]\>

***

### getPaths()

Find files and directories using glob patterns.

#### Example

```ts
const paths = await getPaths(['*', '!src']);
console.log(paths);
//=> ['pigeon', 'rainbow']
```

#### getPaths(patterns, options)

```ts
function getPaths(patterns: string | readonly string[], options: {} & FastGlobOptionsWithoutCwd & {}): Promise<GlobEntry[]>
```

Find files and directories using glob patterns.

Note that glob patterns can only contain forward-slashes, not backward-slashes, so if you want to construct a glob pattern from path components, you need to use `path.posix.join()` instead of `path.join()`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patterns` | `string` \| readonly `string`[] | See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns). |
| `options` | \{\} & `FastGlobOptionsWithoutCwd` & \{\} | See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package. |

##### Returns

`Promise`\<`GlobEntry`[]\>

The matching paths.

##### Examples

```ts
const paths = await getPaths(['*', '!src']);
console.log(paths);
//=> ['pigeon', 'rainbow']
```

```
import {globby} from 'globby';

const paths = await globby(['*', '!cake']);

console.log(paths);
//=> ['unicorn', 'rainbow']
```

#### getPaths(patterns, options)

```ts
function getPaths(patterns: string | readonly string[], options?: Options): Promise<string[]>
```

Find files and directories using glob patterns.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `patterns` | `string` \| readonly `string`[] |
| `options`? | `Options` |

##### Returns

`Promise`\<`string`[]\>

##### Example

```ts
const paths = await getPaths(['*', '!src']);
console.log(paths);
//=> ['pigeon', 'rainbow']
```

***

### getPathsStream()

```ts
function getPathsStream(patterns: string | readonly string[], options?: Options): NodeJS.ReadableStream
```

Find files and directories using glob patterns.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patterns` | `string` \| readonly `string`[] | See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns). |
| `options`? | `Options` | See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package. |

#### Returns

`NodeJS.ReadableStream`

The stream of matching paths.

#### Examples

```ts
for await (const path of getPathsStream('*.tmp')) {
   console.log(paths);
}
```

```
import {globbyStream} from 'globby';

for await (const path of globbyStream('*.tmp')) {
	console.log(path);
}
```

***

### getPathsStructure()

```ts
function getPathsStructure(props: PathsStructureParams): Promise<TreeContent>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `PathsStructureParams` |

#### Returns

`Promise`\<`TreeContent`\>

***

### getPathsTree()

```ts
function getPathsTree(props: {
  input: string[];
  max: number;
  opts: TreeConfig;
  patternOpts: Options;
  sort: "atoz" | "ztoa";
}): Promise<string>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `object` | - |
| `props.input` | `string`[] | The input paths to process. |
| `props.max`? | `number` | The maximum number of directories to traverse. |
| `props.opts`? | `TreeConfig` | - |
| `props.patternOpts`? | `Options` | Additional options for the pattern. |
| `props.sort`? | `"atoz"` \| `"ztoa"` | The order to traverse the directories. **Default** `'atoz'` |

#### Returns

`Promise`\<`string`\>

***

### getPlatform()

```ts
function getPlatform(): Promise<"linux" | "windows" | "macos" | "unknown">
```

Determines the operating system.

#### Returns

`Promise`\<`"linux"` \| `"windows"` \| `"macos"` \| `"unknown"`\>

- The operating system. Possible values are 'linux', 'macos', or 'windows'.

***

### getRandomUUID()

```ts
function getRandomUUID(): `${string}-${string}-${string}-${string}-${string}`
```

Generates a random UUID.

#### Returns

\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

- The generated UUID.

***

### getStringFlagValue()

```ts
function getStringFlagValue(key: string): undefined | string
```

Gets the value of a flag passed to the process.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the flag to get the value of. |

#### Returns

`undefined` \| `string`

The value of the flag if it exists, or undefined.

***

### getStringFrom()

```ts
function getStringFrom(input: string): Promise<string>
```

Retrieves a string from either a file specified by path or a URL.
Supports fetching remote content via URLs and reading local files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | Path to a file or URL of the resource. |

#### Returns

`Promise`\<`string`\>

- The string retrieved from the file or URL.

#### Throws

If there is an error fetching data or parsing the string.

#### Example

```ts
import { getStringFrom } from "@dovenv/utils"

const stringFromYamlUrl = await getStringFrom( 'https://raw.githubusercontent.com/pigeonposse/super8/main/.pigeonposse.yml' )
const stringFromJSON = await getStringFrom('/my/file.json')

console.log( stringFromYamlUrl, stringFromJSON )
```

***

### getStringsFrom()

```ts
function getStringsFrom(patterns: string[], opts?: {
  path: undefined | Options;
 }): Promise<({
  content: string;
  id: string;
  path: pattern;
  type: "url";
 } | {
  content: pattern;
  id: string;
  path: pattern;
  type: "text";
})[]>
```

Fetches all strings from a given patterns (URLs or paths).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patterns` | `string`[] | An array of strings with URLs or paths. |
| `opts`? | `object` | An optional object with options. |
| `opts.path`? | `undefined` \| `Options` | An optional object with path options. |

#### Returns

`Promise`\<(\{
  `content`: `string`;
  `id`: `string`;
  `path`: `pattern`;
  `type`: `"url"`;
 \} \| \{
  `content`: `pattern`;
  `id`: `string`;
  `path`: `pattern`;
  `type`: `"text"`;
 \})[]\>

- The fetched content.

#### Throws

If there is an error fetching content from the URLs or paths.

#### Example

```ts
import { getStringsFrom } from '@dovenv/utils'

const patterns = [
  'https://pigeonposse.com', // fetches and returns content as a string
  './docs/*.md',             // reads files matching the pattern and returns content as strings
  'Just a simple string'     // returns the same string as provided
];

const data = await getStringsFrom(patterns);
console.log(data);
```

***

### getStringType()

```ts
function getStringType(value: string): "text" | "path" | "url"
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`"text"` \| `"path"` \| `"url"`

***

### getSystemEnvPaths()

```ts
function getSystemEnvPaths(__namedParameters: {
  name: string;
  suffix: 'nodejs';
 }): {
  cache: string;
  config: string;
  data: string;
  log: string;
  temp: string;
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.suffix`? | `string` |

#### Returns

```ts
{
  cache: string;
  config: string;
  data: string;
  log: string;
  temp: string;
}
```

| Name | Type |
| ------ | ------ |
| `cache` | `string` |
| `config` | `string` |
| `data` | `string` |
| `log` | `string` |
| `temp` | `string` |

***

### getTempDir()

```ts
function getTempDir(): string
```

Returns the path to the operating system's temporary directory.

#### Returns

`string`

The path to the operating system's temporary directory.

***

### getWorkspaceUtils()

```ts
function getWorkspaceUtils(opts?: WorkspaceOpts): WorkspaceData
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts`? | [`WorkspaceOpts`](#workspaceopts) |

#### Returns

`WorkspaceData`

***

### gradient()

```ts
function gradient(
   txt: string, 
   colors: GradientColors, 
   opts?: GradientOpts): string
```

Generates a gradient string with the specified colors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `txt` | `string` | The text to apply the gradient to. |
| `colors` | [`GradientColors`](#gradientcolors) | An array of color names or hex values. |
| `opts`? | [`GradientOpts`](#gradientopts) | Custom opts. |

#### Returns

`string`

- The text with the applied gradient.

#### Example

```ts
// Example usage:
const gradientText = gradient('Gradient Text', ['red', 'yellow', 'green']);
console.log(gradientText);
```

***

### hideBin()

```ts
function hideBin(argv: string[]): string[]
```

Hides the first two arguments from the process.argv array.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `argv` | `string`[] |

#### Returns

`string`[]

Array of arguments without the first two elements.

#### Example

```ts
import { hideBin } from '@dovenv/utils'
const args = hideBin( process.argv ) // removes the uneeded arguments
console.log( args )
```

***

### highlight()

```ts
function highlight(code: string, opts?: HighlightOptions): string
```

Highlights the given code using CLI highlighting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | The code to highlight. |
| `opts`? | `HighlightOptions` | Optional options for highlighting. |

#### Returns

`string`

- The highlighted code.

#### Example

```ts
const code = `
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('World'));
`;

const highlightedCode = highlight(code, { language: 'javascript' });
console.log(highlightedCode);
```

***

### html2md()

```ts
function html2md(input: string): Promise<string>
```

Converts HTML to Markdown.

- If the input is a path, reads the file and converts its content.
- If the input is a URL, fetches the content and converts it.
- if the input is a string, converts it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The HTML input to convert. |

#### Returns

`Promise`\<`string`\>

- The converted Markdown as a string.

***

### html2terminal()

```ts
function html2terminal(input: string): Promise<string>
```

Converts HTML to a formatted string suitable for the terminal.

- If the input is a path, reads the file and converts its content.
- If the input is a URL, fetches the content and converts it.
- if the input is a string, converts it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The HTML input to convert. |

#### Returns

`Promise`\<`string`\>

- The formatted string.

***

### image2DataUri()

```ts
function image2DataUri(opts: {
  input: string;
  type: string;
}): Promise<string>
```

Converts an image file to a Data URI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | Options. |
| `opts.input` | `string` | The path to the image file. |
| `opts.type`? | `string` | The MIME type to use for the Data URI. If not provided, the function will try to guess the type based on the file extension. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the Data URI.

#### Example

```ts
const dataUri = await image2DataUri({ input: './logo.png' })
```

***

### incrementMdHeaders()

```ts
function incrementMdHeaders(content: string): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`string`

***

### indent()

```ts
function indent(v: string, prefix?: string): string
```

Indents a given string by prefixing each line with a given prefix
(default is two spaces).

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `string` | `undefined` | The string to indent. |
| `prefix`? | `string` | `' '` | The prefix to prepend to each line (default is two spaces). |

#### Returns

`string`

- The indented string.

***

### isAbsolutePath()

```ts
function isAbsolutePath(path: string): boolean
```

Determines whether a path is absolute.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | path to test. |

#### Returns

`boolean`

#### Example

```ts
isAbsolutePath('/usr/bin') // true
isAbsolutePath('file.txt') // false
```

#### Throws

if `path` is not a string.

***

### isDev()

```ts
function isDev(): boolean
```

Checks if the environment is a development environment.

#### Returns

`boolean`

True if the environment is a development environment.

***

### isDirectory()

```ts
function isDirectory(path: string): Promise<boolean>
```

Checks if the given path points to a directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if the path points to a directory, otherwise false.

#### Example

```ts
import { isDirectory } from '@dovenv/utils'

const isDir = await isDirectory('./my/path')
```

***

### isGitHubAuthenticated()

```ts
function isGitHubAuthenticated(): boolean
```

Checks if the user is authenticated to GitHub using the GitHub CLI.

#### Returns

`boolean`

True if the user is authenticated, false otherwise.

***

### isPath()

```ts
function isPath(str: string): boolean
```

Check if a string is a valid path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to test. |

#### Returns

`boolean`

True if the string is a valid path.

#### Example

```ts
isPath('..') // true
isPath('foo bar') // false
isPath('C:\\') // true
isPath('foo\\bar') // true
isPath('foo/bar') // true
isPath('foo bar/baz') // false
```

***

### joinPath()

```ts
function joinPath(...paths: string[]): string
```

Joins path segments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`paths` | `string`[] | Path segments to join. |

#### Returns

`string`

- The joined path.

#### Example

```ts
joinPath('user', 'pigeonposse')
```

***

### joinUrl()

```ts
function joinUrl(...parts: string[]): string
```

Joins the given URL parts into a single string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`parts` | `string`[] | The URL parts to join. |

#### Returns

`string`

- The joined URL string.

***

### kebab2Camel()

```ts
function kebab2Camel(str: string): string
```

kebab-case → camelCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### kebab2Pascal()

```ts
function kebab2Pascal(str: string): string
```

kebab-case → PascalCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### kebab2Snake()

```ts
function kebab2Snake(str: string): string
```

kebab-case → snake_case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### line()

```ts
function line(props?: LineProps): string
```

Generates a line with a title and customizable alignment for both the title and line.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props`? | `LineProps` | Options object. |

#### Returns

`string`

Formatted line.

#### Throws

If `width` is not between 1 and 100.

***

### link()

```ts
function link(text: string, url: string): string
```

Creates a clickable hyperlink in the terminal, if supported.
If terminal doesn't support clickable links, returns the URL string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to display as the link. |
| `url` | `string` | The URL to link to. |

#### Returns

`string`

- The clickable hyperlink or URL string.

#### Example

```ts
const linkedText = link('Visit Clippo docs', 'https://clippo.pigeonposse.com');
console.log(linkedText);
```

***

### localStorage()

```ts
function localStorage(location: string): LocalStorage
```

Creates a new instance of LocalStorage with the specified location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `location` | `string` | The location where the local storage data will be stored. |

#### Returns

`LocalStorage`

- A new instance of LocalStorage.

#### Example

```ts
import { localStorage } from "@dovenv/utils"

// Creates a local storage instance in the './myStorage' directory
const storage = localStorage('./myStorage');
// Sets an item in the local storage
storage.setItem('key', 'value');
// Retrieves the value of the item from the local storage
const value = storage.getItem('key');
```

***

### md2html()

```ts
function md2html(input: string): Promise<string>
```

Converts Markdown input to HTML.

- If the input is a path, reads the file and converts its content.
- If the input is a URL, fetches the content and converts it.
- if the input is a string, converts it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The Markdown input to convert. |

#### Returns

`Promise`\<`string`\>

- The converted HTML string.

***

### md2terminal()

```ts
function md2terminal(input: string, opts?: Md2TerminalOpts): Promise<string>
```

Converts a Markdown input to a terminal formatted string.

- If the input is a path, reads the file and converts its content.
- If the input is a URL, fetches the content and converts it.
- if the input is a string, converts it directly.
---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The Markdown string, path or URL to convert. |
| `opts`? | `Md2TerminalOpts` | Options. |

#### Returns

`Promise`\<`string`\>

- The converted string.

***

### normalizePath()

```ts
function normalizePath(path: string): string
```

Normalizes a path, resolving '..', '.', and redundant separators.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | string path to normalize. |

#### Returns

`string`

#### Example

```ts
normalizePath('foo//bar/../baz') // 'foo/baz'
```

#### Throws

if `path` is not a string.

***

### object2string()

```ts
function object2string(data: unknown): string
```

Converts an object to a JSON string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `unknown` | The data to convert to a string. |

#### Returns

`string`

- The JSON string representation of the data.

***

### onCancel()

```ts
function onCancel(cb: ExitListener): void
```

Registers an event listener that will be called when the user sends an
interrupt signal (e.g., pressing Ctrl+C in the terminal).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cb` | `ExitListener` | The callback to be called when the user sends an interrupt signal. |

#### Returns

`void`

***

### onConsole()

```ts
function onConsole(opts: onConsoleOpts): {
  start: () => void;
  stop: () => void;
}
```

Intercepts console methods and applies a transformation function to all arguments.

Useful for replacing certain values in console output, such as API keys or other sensitive information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `onConsoleOpts` | Options for the console interceptor. |

#### Returns

```ts
{
  start: () => void;
  stop: () => void;
}
```

A Object with `start` and `stop` methods.

| Name | Type |
| ------ | ------ |
| `start` | () => `void` |
| `stop` | () => `void` |

#### Example

```ts
import { onConsole } from '@dovenv/utils'
const secretOut = onConsole({
  type : ['log', 'warn'],
  fn : ( { data } ) => data.replace( /secret/g, '***' ),,
});

secretOut.start();
// my code
secretOut.stop();
```

***

### onExit()

```ts
function onExit(cb: ExitListener): void
```

Registers an event listener that will be called when the Node.js process exits.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cb` | `ExitListener` | The callback to be called when the process exits. |

#### Returns

`void`

***

### onStd()

```ts
function onStd(opts: onStdOpts): {
  start: () => void;
  stop: () => void;
}
```

Replaces the output of `stdout` or `stderr` streams with a custom transformation function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `onStdOpts` | Options for customizing the stream transformation. |

#### Returns

```ts
{
  start: () => void;
  stop: () => void;
}
```

A Object with `start` and `stop` methods.

| Name | Type |
| ------ | ------ |
| `start` | () => `void` |
| `stop` | () => `void` |

#### Example

```ts
import { onStd } from '@dovenv/utils'
const secretOut = onStd({
  type : 'stdout',
  fn : ( { data } ) => data.replace( /secret/g, '***' ),,
});

secretOut.start();
// my code
secretOut.stop();
```

***

### open()

```ts
function open(target: string, options?: Options): Promise<ChildProcess>
```

Opens a system file or URL.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `string` | The thing you want to open. Can be a URL, file, or executable. Opens in the default app for the file type. For example, URLs open in your default browser. |
| `options`? | `Options` | - |

#### Returns

`Promise`\<`ChildProcess`\>

The [spawned child process](https://nodejs.org/api/child_process.html#child_process_class_childprocess). You would normally not need to use this for anything, but it can be useful if you'd like to attach custom event listeners or perform other operations directly on the spawned process.

#### Param

The file path or URL to open.

#### Examples

```ts
import { open } from "@dovenv/utils"

// Opens the image in the default image viewer.
await open('pigeon.png', {wait: true});
```

```
import open, {apps} from 'open';

// Opens the image in the default image viewer.
await open('unicorn.png', {wait: true});
console.log('The image viewer app quit');

// Opens the URL in the default browser.
await open('https://sindresorhus.com');

// Opens the URL in a specified browser.
await open('https://sindresorhus.com', {app: {name: 'firefox'}});

// Specify app arguments.
await open('https://sindresorhus.com', {app: {name: 'google chrome', arguments: ['--incognito']}});

// Opens the URL in the default browser in incognito mode.
await open('https://sindresorhus.com', {app: {name: apps.browserPrivate}});
```

***

### openApp()

```ts
function openApp(name: string | readonly string[], options?: OpenAppOptions): Promise<ChildProcess>
```

Open an app. Cross-platform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` \| readonly `string`[] | The app you want to open. Can be either builtin supported `apps` names or other name supported in platform. |
| `options`? | `OpenAppOptions` | - |

#### Returns

`Promise`\<`ChildProcess`\>

The [spawned child process](https://nodejs.org/api/child_process.html#child_process_class_childprocess). You would normally not need to use this for anything, but it can be useful if you'd like to attach custom event listeners or perform other operations directly on the spawned process.

#### Param

The app you want to open. Can be either builtin supported apps names or other name supported in platform.

#### Examples

```ts
import { openApp } from "@dovenv/utils"

// Open Xcode
await openApp('xcode');
```

```
import open, {openApp, apps} from 'open';

// Open Firefox.
await openApp(apps.firefox);

// Open Chrome in incognito mode.
await openApp(apps.chrome, {arguments: ['--incognito']});

// Open default browser.
await openApp(apps.browser);

// Open default browser in incognito mode.
await openApp(apps.browserPrivate);

// Open Xcode.
await openApp('xcode');
```

***

### pascal2Camel()

```ts
function pascal2Camel(str: string): string
```

PascalCase → camelCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### pascal2Kebab()

```ts
function pascal2Kebab(str: string): string
```

PascalCase → kebab-case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### pascal2Snake()

```ts
function pascal2Snake(str: string): string
```

PascalCase → snake_case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### path2FileUrl()

```ts
function path2FileUrl(input: string): string
```

Converts a file path to a file URL.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The file path to convert. |

#### Returns

`string`

The file URL.

#### Example

```ts
const fileUrl = path2FileUrl('./path/to/file')
console.log(fileUrl)
//=> 'file:///path/to/file'
```

***

### performance()

```ts
function performance(): {
  prettyStop: () => string;
  stop: () => number;
}
```

Creates a performance tracker to measure elapsed time.

#### Returns

```ts
{
  prettyStop: () => string;
  stop: () => number;
}
```

An object containing methods to stop and retrieve the elapsed time.

| Name | Type | Description |
| ------ | ------ | ------ |
| `prettyStop` | () => `string` | Formats and returns the elapsed time as a human-readable string. |
| `stop` | () => `number` | Calculates and returns the elapsed time in seconds. |

***

### promptGroup()

```ts
function promptGroup(props: PromptOptions | (this: Enquirer<object>) => PromptOptions | PromptOptions | ((this: Enquirer<object>) => PromptOptions)[]): Promise<object>
```

Ask questions to user with prompt function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `PromptOptions` \| (`this`: `Enquirer`\<`object`\>) => `PromptOptions` \| PromptOptions \| ((this: Enquirer\<object\>) =\> PromptOptions)[] | PromptOptions. |

#### Returns

`Promise`\<`object`\>

- Promise resolving to answers.

#### See

https://www.npmjs.com/package/enquirer

#### Example

```ts
const answers = await promptGroup([
  {
    type: 'toggle',
    name: 'ready',
    message: 'Are you ready?',
    enabled: 'Yep',
    disabled: 'Nope',
  },
  {
    type: 'number',
    name: 'age',
    message: 'What is your age',
  },
]);
console.log(answers.ready, answers.age)
```

***

### promptLineEnquirer()

```ts
function promptLineEnquirer(props: PromptOptions | (this: Enquirer<object>) => PromptOptions | PromptOptions | ((this: Enquirer<object>) => PromptOptions)[], onCancel?: () => void): Promise<unknown>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `PromptOptions` \| (`this`: `Enquirer`\<`object`\>) => `PromptOptions` \| PromptOptions \| ((this: Enquirer\<object\>) =\> PromptOptions)[] |
| `onCancel`? | () => `void` |

#### Returns

`Promise`\<`unknown`\>

***

### promptLineGroup()

```ts
function promptLineGroup<T>(params: PromptLineParams<T>): Promise<{ [P in string | number | symbol]: PromptGroupAwaitedReturn<T>[P] }>
```

Define a group of prompts to be displayed and return a results of objects within the group.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`PromptLineParams`](#promptlineparamst)\<`T`\> | PromptLine options . |

#### Returns

`Promise`\<\{ \[P in string \| number \| symbol\]: PromptGroupAwaitedReturn\<T\>\[P\] \}\>

- Object with answers.

#### Example

```ts
import { promptLineGroup } from "@dovenv/utils"

const answers = await promptLineGroup({
    intro: 'Dovenv init',
    outro: 'Succesfully finished 🌈',
    onCancel: p => {
        p.cancel('canceled 💔')
        process.exit(0)
    },
    list: async p => ({
       name: () => p.text({
           message: 'What is your organization?',
           placeholder: 'PigeonPosse',
           defaultValue: 'PigeonPosse',
       }),
       age: () => p.number({
           message: 'What is your age?',
       }),
    })
})

console.log(answers.name, answers.age)
```

***

### readDir()

```ts
function readDir(path: string): Promise<Dirent<string>[]>
```

Reads the contents of a directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the directory to read. |

#### Returns

`Promise`\<`Dirent`\<`string`\>[]\>

- A promise that resolves to an array of [fs.Dirent](https://nodejs.org/api/fs.html#class-fs-dirent) objects.

#### Example

```ts
const dirItems = await readDir('./path/to/directory')
```

***

### readFile()

Reads the content of a file at the specified path.

#### Param

The path of the file to read.

#### Throws

If an error occurs while reading the file.

#### Example

```ts
import { readFile } from '@dovenv/utils'

try {
  const content = await readFile('./example.txt');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
}
```

#### readFile(path, options)

```ts
function readFile(path: PathLike | FileHandle, options?: null | {} & Abortable): Promise<Buffer>
```

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a `Buffer` object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory's contents will be
returned.

An example of reading a `package.json` file located in the same directory of the
running code:

```js
import { readFile } from 'node:fs/promises';
try {
  const filePath = new URL('./package.json', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```

It is possible to abort an ongoing `readFile` using an `AbortSignal`. If a
request is aborted the promise returned is rejected with an `AbortError`:

```js
import { readFile } from 'node:fs/promises';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = readFile(fileName, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

Any specified `FileHandle` has to support reading.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `PathLike` \| `FileHandle` | filename or `FileHandle` |
| `options`? | `null` \| \{\} & `Abortable` | - |

##### Returns

`Promise`\<`Buffer`\>

- A promise that resolves to the content of the file as a string or buffer.

Fulfills with the contents of the file.

##### Param

The path of the file to read.

##### Throws

If an error occurs while reading the file.

##### Example

```ts
import { readFile } from '@dovenv/utils'

try {
  const content = await readFile('./example.txt');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
}
```

##### Since

v10.0.0

#### readFile(path, options)

```ts
function readFile(path: PathLike | FileHandle, options: BufferEncoding | {} & Abortable): Promise<string>
```

Asynchronously reads the entire contents of a file.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `PathLike` \| `FileHandle` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| \{\} & `Abortable` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

##### Returns

`Promise`\<`string`\>

- A promise that resolves to the content of the file as a string or buffer.

##### Param

The path of the file to read.

##### Throws

If an error occurs while reading the file.

##### Example

```ts
import { readFile } from '@dovenv/utils'

try {
  const content = await readFile('./example.txt');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
}
```

#### readFile(path, options)

```ts
function readFile(path: PathLike | FileHandle, options?: null | BufferEncoding | ObjectEncodingOptions & Abortable & {}): Promise<string | Buffer>
```

Asynchronously reads the entire contents of a file.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `PathLike` \| `FileHandle` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options`? | `null` \| `BufferEncoding` \| `ObjectEncodingOptions` & `Abortable` & \{\} | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

##### Returns

`Promise`\<`string` \| `Buffer`\>

- A promise that resolves to the content of the file as a string or buffer.

##### Param

The path of the file to read.

##### Throws

If an error occurs while reading the file.

##### Example

```ts
import { readFile } from '@dovenv/utils'

try {
  const content = await readFile('./example.txt');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
}
```

***

### readFiles()

```ts
function readFiles(patterns: string | readonly string[], opts?: {
  hook: {
     onFile: (data: {
        content: string;
        path: string;
       }) => void | Promise<void>;
    };
  inputOpts: Options;
 }): Promise<{
  content: string;
  path: string;
}[]>
```

Reads multiple files based on specified glob patterns and returns their contents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patterns` | `string` \| readonly `string`[] | The glob patterns to match file paths. |
| `opts`? | `object` | Optional configurations. |
| `opts.hook`? | `object` | Optional hooks for handling file data. |
| `opts.hook.onFile`? | (`data`: \{ `content`: `string`; `path`: `string`; \}) => `void` \| `Promise`\<`void`\> | - |
| `opts.inputOpts`? | `Options` | Optional options for glob pattern matching. |

#### Returns

`Promise`\<\{
  `content`: `string`;
  `path`: `string`;
 \}[]\>

- A promise that resolves to an array of objects containing file paths and their contents.

#### Throws

If an error occurs while reading any file.

***

### relativePath()

```ts
function relativePath(from: string, to: string): string
```

Determines the relative path from one location to another.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Example

```ts
relativePath('/data/source', '/data/source/project') // 'project'
```

#### Throws

if either `from` or `to` is not a string.

***

### removeDir()

```ts
function removeDir(path: string): Promise<void>
```

Removes a directory and its contents if it exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the directory to remove. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while removing the directory.

#### Example

```ts
import { removeDir } from '@dovenv/utils'

try {
  await removeDir('./my/path')
} catch (e) {
  console.log(e)
}
```

***

### removeDirIfExist()

```ts
function removeDirIfExist(path: string): Promise<void>
```

Removes a directory and its contents if it exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the directory to remove. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while removing the directory.

#### Example

```ts
import { removeDirIfExist } from '@dovenv/utils'

await removeDirIfExist('./my/path')
```

***

### removeEmptyLines()

```ts
function removeEmptyLines(text: string, options?: RemoveEmptyLinesOptions): string
```

Removes lines from a multiline string based on specified conditions,
such as handling consecutive empty lines, leading, and trailing empty lines.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The input multiline string. |
| `options`? | [`RemoveEmptyLinesOptions`](#removeemptylinesoptions) | Optional configuration for removing lines. |

#### Returns

`string`

- The string with empty lines processed according to the options.

***

### removeFile()

```ts
function removeFile(path: string): Promise<void>
```

Removes a file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file to remove. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while removing the file.

#### Example

```ts
try {
  await removeFile('./my/path')
} catch (e) {
  console.log(e)
}
```

***

### removeFileIfExist()

```ts
function removeFileIfExist(path: string): Promise<void>
```

Removes a file if it exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file to remove. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while removing the file.

#### Example

```ts
try {
  await removeFile('./my/path')
} catch (e) {
  console.log(e)
}
```

***

### removePathIfExist()

```ts
function removePathIfExist(path: string): Promise<void>
```

Removes a file or directory if it exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file or directory to remove. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while removing the file or directory.

#### Example

```ts
try {
  await removePathIfExist('./my/path')
} catch (e) {
  console.log(e)
}
```

***

### renamePath()

```ts
function renamePath(oldPath: PathLike, newPath: PathLike): Promise<void>
```

Renames (moves) a file or directory asynchronously.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`Promise`\<`void`\>

Resolves when the operation is complete.

Fulfills with `undefined` upon success.

#### Param

The current name or path of the file/directory.

#### Param

The new name or path for the file/directory.

#### Example

```ts
await renamePath('./old-name.txt', './new-name.txt')
```

#### Since

v10.0.0

***

### renderAsciiFont()

```ts
function renderAsciiFont(
   txt: string, 
   fontData: string, 
opts?: Options): Promise<string>
```

Generates ASCII art text using the specified font.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `txt` | `string` | The text to render as ASCII art. |
| `fontData` | `string` | The font to use for rendering. Defaults to 'Standard'. |
| `opts`? | `Options` | Optional parameters for font rendering. |

#### Returns

`Promise`\<`string`\>

- The ASCII art text.

#### Example

```ts
import font_three_d from '@ascii-kit/font-3d';
const asciiText = await renderAsciiFont('Hello, World!', font_three_d);
console.log(asciiText);
```

***

### replaceConsole()

```ts
function replaceConsole(opts: {
  params: Record<string, string>;
  transform: (opts: {
     data: string;
     type: ConsoleType;
    }) => string;
  type: Prettify<ConsoleType | ConsoleType[]>;
 }): {
  start: () => void;
  stop: () => void;
}
```

Replaces values in console output using a set of parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | Options for the console output replacer. |
| `opts.params` | `Record`\<`string`, `string`\> | Params object containing key-value pairs where each key is a string to be replaced by its corresponding value in the output. **Example** `{ 	 * 'error': 'warning' 	 * }` |
| `opts.transform`? | (`opts`: \{ `data`: `string`; `type`: `ConsoleType`; \}) => `string` | Function to transform the output before replacing it. **Example** `const transform = ( { data, type } ) => { return type === 'warm' ? data.toUpperCase() : data }` |
| `opts.type`? | [`Prettify`](#prettifyt)\<ConsoleType \| ConsoleType\[\]\> | Type of stream to replace output in. **Default** `'log'` |

#### Returns

```ts
{
  start: () => void;
  stop: () => void;
}
```

A Object with `start` and `stop` methods.

| Name | Type |
| ------ | ------ |
| `start` | () => `void` |
| `stop` | () => `void` |

#### Example

```ts
import { replaceConsole } from '@dovenv/utils'
const versionOut = replaceConsole({
  params: {
    'v1.3.4': 'v2.1.9'
  },
  type: ['stderr']
});

versionOut.start();
// mys code
versionOut.stop();
```

***

### replacePlaceholders()

```ts
function replacePlaceholders(props: Props): Promise<string>
```

Replace placeholders in a string with their corresponding values.

The function takes a string with placeholders, an object with parameter values,
and an optional custom parameter function.

The function returns a Promise that resolves to the string with all placeholders
replaced.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `Props` | Props for the function. |

#### Returns

`Promise`\<`string`\>

- A Promise that resolves to the string with all placeholders replaced.

***

### replaceStd()

```ts
function replaceStd(opts: {
  params: Record<string, string>;
  process: Process;
  transform: (opts: {
     data: string;
     type: StdType;
    }) => string;
  type: Prettify<StdType | StdType[]>;
 }): {
  start: () => void;
  stop: () => void;
}
```

Replaces output in the specified stream (stdout, stderr, or stdin) by substituting
values based on the provided parameters.

This function overrides the write method of the specified stream to replace occurrences
of specified strings in the output with replacement strings. It supports custom process
objects and stream types.

---.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | The options for replacing output. |
| `opts.params` | `Record`\<`string`, `string`\> | Params object containing key-value pairs where each key is a string to be replaced by its corresponding value in the output. **Example** `{ 	 * 'error': 'warning' 	 * }` |
| `opts.process`? | `Process` | Processs object to replace output in.. **Default** `process` |
| `opts.transform`? | (`opts`: \{ `data`: `string`; `type`: `StdType`; \}) => `string` | Function to transform the output before replacing it. **Example** `const transform = ( { data, type } ) => { return type === 'stderr' ? data.toUpperCase() : data }` |
| `opts.type`? | [`Prettify`](#prettifyt)\<StdType \| StdType\[\]\> | Type of stream to replace output in. **Default** `'stdout'` |

#### Returns

```ts
{
  start: () => void;
  stop: () => void;
}
```

A Object with `start` and `stop` methods.

| Name | Type |
| ------ | ------ |
| `start` | () => `void` |
| `stop` | () => `void` |

#### Example

```ts
import { replaceConsole } from '@dovenv/utils'
const versionOut = replaceStd({
  params: {
    'v1.3.4': 'v2.1.9'
  },
  type: ['stderr']
});

versionOut.start();
// my code
versionOut.stop();
```

***

### resolvePath()

```ts
function resolvePath(...paths: string[]): string
```

Resolves a sequence of paths or path segments into an absolute path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`paths` | `string`[] | A sequence of paths or path segments. |

#### Returns

`string`

#### Example

```ts
resolvePath('foo', 'bar') // '/absolute/path/foo/bar'
```

#### Throws

if any of the arguments is not a string.

***

### rmDeprecationAlerts()

```ts
function rmDeprecationAlerts(): void
```

Suppresses deprecation warnings in the process.

This function sets the `process.noDeprecation` property to `true`,.

Note: This is not recommended for production environments, as it might
hide useful deprecation warnings that should be addressed.

#### Returns

`void`

***

### runLocalNodeBin()

```ts
function runLocalNodeBin(options: {
  args: string[];
  name: string;
  opts: EnvOptions;
}): Promise<number>
```

Runs a local Node binary in the current project.

It uses the `PATH` and `npm-run-path` to locate the binary in the project's `node_modules/.bin`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options object. |
| `options.args`? | `string`[] | Args to pass to the bin. |
| `options.name` | `string` | Name of the bin to run. |
| `options.opts`? | `EnvOptions` | Options object. |

#### Returns

`Promise`\<`number`\>

- Resolves with the exit code of the bin.

#### Throws

- If the bin exits with a non-zero code.

***

### schema2object()

```ts
function schema2object<R>(schema: string): R
```

Parses a JSON schema string into an object.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `R` *extends* `object` | The type of the object to be returned. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schema` | `string` | The JSON schema string to parse. |

#### Returns

`R`

- The parsed object.

#### Throws

- If the input string is not a valid JSON.

#### Example

```ts
const obj = schema2object<{ foo: string }>('{"foo": "bar"}');
console.log(obj.foo); // Output: "bar"
```

***

### schema2ts()

```ts
function schema2ts(params: Schema2tsProps): Promise<string>
```

JSON schema to typescript type string.

Useful, for example, to display a schema in a readable way for the user.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Schema2tsProps` | Options. |

#### Returns

`Promise`\<`string`\>

---.

#### Example

```ts
const tsString = await schema2ts({
  name: 'MySchemaType',
  schema: {
    type: "object",
    ...
  }
})

console.log(tsString)
```

***

### schema2type()

```ts
function schema2type(params: Schema2typeProps): Promise<string>
```

Converts a JSON schema to a TypeScript type string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Schema2typeProps` | Options for conversion. |

#### Returns

`Promise`\<`string`\>

- The TypeScript type string representation of the schema.
                                                     ---.

#### Example

```ts
const typeString = await schema2type({
  schema: {
    type: "object",
    ...
  },
  required: true,
  noUnknownObject: false
});

console.log(typeString);
```

***

### schema2zod()

```ts
function schema2zod<R>(v: JsonSchema): R
```

JSON schema to zod type.

#### Type Parameters

| Type Parameter |
| ------ |
| `R` *extends* [`ValidateAnyType`](#validateanytype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `JsonSchema` |

#### Returns

`R`

- Zodtype in string.

#### Example

```ts
const zodSchema = await schema2zod({
  schema: {
    type: "object",
    ...
  }
})

console.log(zodSchema)
```

***

### serializeValidation()

Serializes and simplifies types into a JSON format.

#### serializeValidation(schema, _params)

```ts
function serializeValidation(schema: $ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, _params?: ToJSONSchemaParams): JSONSchema.BaseSchema
```

Serializes and simplifies types into a JSON format.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `$ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |
| `_params`? | `ToJSONSchemaParams` |

##### Returns

`JSONSchema.BaseSchema`

#### serializeValidation(registry, _params)

```ts
function serializeValidation(registry: $ZodRegistry<{}, $ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>, _params?: RegistryToJSONSchemaParams): {}
```

Serializes and simplifies types into a JSON format.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `$ZodRegistry`\<\{\}, `$ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |
| `_params`? | `RegistryToJSONSchemaParams` |

##### Returns

```ts
{}
```

***

### setDirTree()

```ts
function setDirTree(opts: SetDirTree): string
```

Returns a string representing the content of an object as a directory structure.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `SetDirTree` | An object with options for generating the directory structure string. |

#### Returns

`string`

A string representing the content of `structure` as a directory structure.

                                 ---.

#### Example

```ts
const result = setDirTree({
  structure: {
  src: {
    components: {
      "Button.js": null,
      "Header.js": null
    },
    utils: {
      "helpers.js": null
    },
    "index.js": null
  },
  "package.json": null
  },
  name: "my-project",
});

console.log(result);
```

***

### snake2Camel()

```ts
function snake2Camel(str: string): string
```

snake_case → camelCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### snake2Kebab()

```ts
function snake2Kebab(str: string): string
```

snake_case → kebab-case

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### snake2Pascal()

```ts
function snake2Pascal(str: string): string
```

snake_case → PascalCase

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

- The converted string.

***

### spinner()

```ts
function spinner(options?: string | Options): Ora
```

Elegant terminal spinner.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `string` \| `Options` | If a string is provided, it is treated as a shortcut for `options.text`. |

#### Returns

`Ora`

#### Example

```
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

***

### table()

```ts
function table(data: TableData, options?: TableConstructorOptions): string
```

Generates a text-based table from the provided data array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`TableData`](#tabledata) | The data to display in the table. |
| `options`? | `TableConstructorOptions` | Optional configuration options for the table. |

#### Returns

`string`

- The text-based table.

#### See

https://www.npmjs.com/package/table

#### Example

```ts
const data = [
    ['Name', 'Age', 'Country'],
    ['John', 30, 'USA'],
    ['Alice', 25, 'UK'],
    ['Bob', 35, 'Canada'],
];
const tableText = table(data);
console.log(tableText);
```

***

### truncate()

```ts
function truncate(
   text: string, 
   maxLength: number, 
   ellipsis?: string): string
```

Truncates a given string to a maximum length and adds an ellipsis (...) at the end.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `string` | `undefined` | The string to truncate. |
| `maxLength` | `number` | `undefined` | The maximum length of the string. |
| `ellipsis`? | `string` | `'…'` | The ellipsis to add at the end of the truncated string (default is '…'). |

#### Returns

`string`

- The truncated string.

***

### validateHomeDir()

```ts
function validateHomeDir(path: string): string
```

Validates and resolves a path with home directory replacement.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to validate and resolve. |

#### Returns

`string`

- The validated and resolved absolute path.

#### Example

```ts
import { validateHomeDir } from '@dovenv/utils'

const path = validateHomeDir('~/Documents')

console.log(path) // returns: /users/{username}/Documents

const path = validateHomeDir('/Home')

console.log(path) // returns same: /Home
```

***

### validateSchema()

```ts
function validateSchema(data: string | object, schema: string | object): Promise<object>
```

Validate a data from a schema.

This function accepts both `data` and `schema` as required parameters, which can either be
an object or a string. If a string is provided, it may represent a file path or a URL, and
the format can be one of the following: JSON, YAML, TOML, JS, INI, CSV, or XML.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` \| `object` | The data to be validated. It can be a string representing a file path or URL, or an object containing the data to validate. |
| `schema` | `string` \| `object` | The schema against which the data will be validated. It can be a string representing a file path or URL, or an object representing the schema. |

#### Returns

`Promise`\<`object`\>

- The validated JSON data.

#### Throws

- If the schema is invalid or the data does not conform to the schema.

#### Example

```ts
import { validateSchema } from '@dovenv/utils'

try {
  const validData = await validateSchema(
    '../../package.json',
    'https://json.schemastore.org/package.json'
  );
  console.log(validData);
} catch (error) {
    console.error('Validation failed:', error.message);
}
```

***

### writeFile()

```ts
function writeFile(
   file: PathLike | FileHandle, 
   data: 
  | string
  | Stream
  | ArrayBufferView<ArrayBufferLike>
  | Iterable<string | ArrayBufferView<ArrayBufferLike>, any, any>
  | AsyncIterable<string | ArrayBufferView<ArrayBufferLike>, any, any>, 
options?: null | BufferEncoding | ObjectEncodingOptions & {} & Abortable): Promise<void>
```

Asynchronously writes data to a file, replacing the file if it already exists. `data` can be a string, a buffer, an
[AsyncIterable](https://tc39.github.io/ecma262/#sec-asynciterable-interface), or an
[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.

The `encoding` option is ignored if `data` is a buffer.

If `options` is a string, then it specifies the encoding.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

Any specified `FileHandle` has to support writing.

It is unsafe to use `fsPromises.writeFile()` multiple times on the same file
without waiting for the promise to be settled.

Similarly to `fsPromises.readFile` \- `fsPromises.writeFile` is a convenience
method that performs multiple `write` calls internally to write the buffer
passed to it. For performance sensitive code consider using `fs.createWriteStream()` or `filehandle.createWriteStream()`.

It is possible to use an `AbortSignal` to cancel an `fsPromises.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  const promise = writeFile('message.txt', data, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `PathLike` \| `FileHandle` | filename or `FileHandle` |
| `data` | \| `string` \| `Stream` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `Iterable`\<string \| ArrayBufferView\<ArrayBufferLike\>, `any`, `any`\> \| `AsyncIterable`\<string \| ArrayBufferView\<ArrayBufferLike\>, `any`, `any`\> | - |
| `options`? | `null` \| `BufferEncoding` \| `ObjectEncodingOptions` & \{\} & `Abortable` | - |

#### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

#### Since

v10.0.0

***

### writeFileContent()

```ts
function writeFileContent(path: string, content: string | Buffer<ArrayBufferLike>): Promise<void>
```

Writes content to a file at the specified path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file to write to. |
| `content` | `string` \| `Buffer`\<`ArrayBufferLike`\> | The content to write to the file. |

#### Returns

`Promise`\<`void`\>

#### Throws

If an error occurs while writing to the file.

#### Example

```ts
import { writeFileContent } from '@dovenv/utils'

await writeFileContent('./greetFile.txt', 'Hello')
```

***

### zod2schema()

```ts
function zod2schema(params: Zod2schema): Promise<JSONSchema>
```

Converts a zod schema to a JSON schema.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Zod2schema` | Options. |

#### Returns

`Promise`\<`JSONSchema`\>

The JSON schema.

#### Example

```ts
const jsonSchema = await zod2schema({
  schema: z.object({
    foo: z.string(),
  }),
  opts: {
    // zodToJsonSchema options
  },
})
```

## Type Aliases

### Any

```ts
type Any: any;
```

Any type
Same as `any` type. Used only for prevent ts errors.

***

### AnyArray

```ts
type AnyArray: any[];
```

Any Array type
Same as `any[]` type. Used only for prevent ts errors.

***

### AssertEqual\<T, U\>

```ts
type AssertEqual<T, U>: <V>() => V extends T ? 1 : 2 extends <V>() => V extends U ? 1 : 2 ? true : false;
```

AssertEqual.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

#### Description

Checks if two types `T` and `U` are equal.

#### Example

```ts
type Test = AssertEqual<string, string>; // Expected: true
  type TestFail = AssertEqual<string, number>; // Expected: false
```

***

### BoxOptions

```ts
type BoxOptions: NonNullable<Parameters<typeof boxen>[1]>;
```

***

### BoxParams

```ts
type BoxParams: Parameters<typeof box>;
```

Parameters of the `box` function from the `@dovenv/utils` module.

[See module](https://clippo.pigeonposse.com/guide/utils/styles#box).

***

### ColumnData

```ts
type ColumnData: Record<string, unknown> | Record<string, unknown>[];
```

***

### ColumnOpts

```ts
type ColumnOpts: columnify.GlobalOptions;
```

***

### ColumnsParams

```ts
type ColumnsParams: Parameters<typeof columns>;
```

Parameters of the `columns` function from the `@dovenv/utils` module.

[See module](https://clippo.pigeonposse.com/guide/utils/styles#columns).

***

### CreateDedent()

```ts
type CreateDedent: (options: DedentOptions) => Dedent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DedentOptions`](#dedentoptions) |

#### Returns

[`Dedent`](#dedent-1)

***

### DeepNonNullable\<T\>

```ts
type DeepNonNullable<T>: Prettify<_DeepNonNullable<T>>;
```

DeepNonNullable.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Description

NonNullable that works for deeply nested structure.

#### Example

```ts
type NestedProps = {
    first?: null | {
      second?: null | {
        name?: string | null |
        undefined;
      };
    };
  };
  type RequiredNestedProps = DeepNonNullable<NestedProps>;
  // Expect: {
  //   first: {
  //     second: {
  //       name: string;
  //     };
  //   };
  // }
```

***

### DeepPartial\<T\>

```ts
type DeepPartial<T>: T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
```

DeepPartial.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### DeepRequired\<T\>

```ts
type DeepRequired<T>: Prettify<_DeepRequired<T>>;
```

DeepRequired.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Description

Required that works for deeply nested structure.

#### Example

```ts
type NestedProps = {
    first?: {
      second?: {
        name?: string;
      };
    };
  };
  type RequiredNestedProps = DeepRequired<NestedProps>
  // Expect: {
  //   first: {
  //     second: {
  //       name: string;
  //     };
  //   };
  // }
```

***

### ExpectEqual\<T, U\>

```ts
type ExpectEqual<T, U>: AssertEqual<T, U> extends true ? T : never;
```

ExpectEqual.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

#### Description

Returns the type `T` if `T` and `U` are equal; otherwise, returns `never`.

#### Example

```ts
type Test = ExpectEqual<string, string>; // Expected: string
  type TestFail = ExpectEqual<string, number>; // Expected: never
```

***

### FontName

```ts
type FontName: typeof FontArray[number];
```

***

### FunctionKeys\<T\>

```ts
type FunctionKeys<T>: { [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never }[keyof T];
```

FunctionKeys.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Description

Get union type of keys that are functions in object type `T`.

#### Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "setName | someFn"
  type Keys = FunctionKeys<MixedProps>;
```

***

### GradientColors

```ts
type GradientColors: string[] | {
  color: string;
  pos: number;
 }[];
```

***

### GradientOpts

```ts
type GradientOpts: {
  hsvSpin: "short" | "long";
  interpolation: "rgb" | "hsv";
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `hsvSpin`? | `"short"` \| `"long"` | Used only in the case of HSV interpolation. Because hue can be considered as a circle, there are two ways to go from a color to another color. HsvSpin can be either short or long, depending on if you want to take the shortest or the longest way between two colors. Defaults to short. Case insensitive. |
| `interpolation`? | `"rgb"` \| `"hsv"` | The gradient can be generated using RGB or HSV interpolation. HSV usually produces brighter colors. Interpolation can be set to rgb for RGB interpolation, orhsv for HSV interpolation. Defaults to rgb. Case insentitive. |

***

### HighlightOpts

```ts
type HighlightOpts: Parameters<typeof highlight>[1];
```

***

### MediaInput

```ts
type MediaInput: URL | string | Buffer;
```

***

### NonFunctionKeys\<T\>

```ts
type NonFunctionKeys<T>: { [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K }[keyof T];
```

NonFunctionKeys.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Description

Get union type of keys that are non-functions in object type `T`.

#### Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "name | someKey"
  type Keys = NonFunctionKeys<MixedProps>;
```

***

### NonUndefined\<A\>

```ts
type NonUndefined<A>: A extends undefined ? never : A;
```

NonUndefined.

#### Type Parameters

| Type Parameter |
| ------ |
| `A` |

#### Description

Exclude undefined from set `A`.

#### Example

```ts
// Expect: "string | null"
  SymmetricDifference<string | null | undefined>;
```

***

### NumberParams

```ts
type NumberParams: p.TextOptions & {
  defaultValue: number;
  errorText: string;
  placeholder: number;
};
```

NUMBER.

#### Type declaration

| Name | Type |
| ------ | ------ |
| `defaultValue`? | `number` |
| `errorText`? | `string` |
| `placeholder`? | `number` |

***

### ObjectKeys\<Values\>

```ts
type ObjectKeys<Values>: keyof Values;
```

Keys of Object.

#### Type Parameters

| Type Parameter |
| ------ |
| `Values` |

***

### ObjectValues\<Values\>

```ts
type ObjectValues<Values>: Values[keyof Values];
```

Values of Object.

#### Type Parameters

| Type Parameter |
| ------ |
| `Values` |

***

### PackageContent

```ts
type PackageContent: PackageJSON;
```

***

### PackageData

```ts
type PackageData: {
  content: PackageContent;
  dir: string;
  id: string;
  packagePath: string;
  repoUrl: string;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `content` | [`PackageContent`](#packagecontent) | Package.json content |
| `dir` | `string` | Directory of package |
| `id` | `string` | name of the package or basename to package.json |
| `packagePath` | `string` | Path to package.json |
| `repoUrl`? | `string` | Sanitized Repository URL |

***

### PackageInput

```ts
type PackageInput: PackagePath | PackageURL | PackageName | PackageContent;
```

***

### PackageJSON

```ts
type PackageJSON: Prettify<JSONSchemaForNPMPackageJsonFiles & {
  devEngines: { [key in "cpu" | "os" | "libc" | "runtime" | "packageManager"]?: Object };
}>;
```

***

### PackageManager

```ts
type PackageManager: typeof PKG_MANAGER[keyof typeof PKG_MANAGER];
```

***

### PackageManagerCmds

```ts
type PackageManagerCmds: Record<PackageManager, PackageManagerCmdsValue>;
```

***

### PackageManagerCmdsValue

```ts
type PackageManagerCmdsValue: {
  audit: string;
  auditFix: string;
  exec: string;
  install: string;
  outdated: string;
  upDeps: string;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `audit` | `string` | Audit package(s) |
| `auditFix` | `string` | Fix Audition package(s) |
| `exec` | `string` | Fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes. |
| `install` | `string` | Install packages |
| `outdated` | `string` | Checks for outdated packages |
| `upDeps` | `string` | Update dependencies |

***

### PackageName

```ts
type PackageName: string;
```

***

### PackageOpts

```ts
type PackageOpts: {
  remote: PackageRemoteOpts;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `remote`? | [`PackageRemoteOpts`](#packageremoteopts) |

***

### PackagePath

```ts
type PackagePath: string;
```

***

### PackageRemoteOpts

```ts
type PackageRemoteOpts: {
  registry: string;
  version: number | string;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `registry`? | `string` | Registry to get package from **Default** `'https://registry.npmjs.org'` |
| `version` | `number` \| `string` | Package version **Default** `'latest'` |

***

### PackageRepoUrlOpts

```ts
type PackageRepoUrlOpts: {
  dir: boolean;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `dir` | `boolean` | Returns url with directory if has one. **Default** `true` |

***

### PackageURL

```ts
type PackageURL: string | URL;
```

***

### Prettify\<T\>

```ts
type Prettify<T>: { [K in keyof T]: T[K] } & {};
```

Prettify your type for better readability.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### PromptLineCancelProps

```ts
type PromptLineCancelProps: typeof p & {
  box: (opts: {
     opts: BoxParams[1];
     type: PromptLineMethod;
     value: BoxParams[0];
    }) => void;
  columns: (opts: {
     opts: ColumnsParams[1];
     type: PromptLineMethod;
     value: ColumnsParams[0];
    }) => void;
  number: typeof number;
  table: (opts: {
     opts: TableParams[1];
     type: PromptLineMethod;
     value: TableParams[0];
    }) => void;
};
```

Props for canceling a prompt line, including functions from various modules.

#### Type declaration

| Name | Type |
| ------ | ------ |
| `box` | (`opts`: \{ `opts`: [`BoxParams`](#boxparams)\[`1`\]; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: [`BoxParams`](#boxparams)\[`0`\]; \}) => `void` |
| `columns` | (`opts`: \{ `opts`: [`ColumnsParams`](#columnsparams)\[`1`\]; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: [`ColumnsParams`](#columnsparams)\[`0`\]; \}) => `void` |
| `number` | *typeof* `number` |
| `table` | (`opts`: \{ `opts`: [`TableParams`](#tableparams)\[`1`\]; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: [`TableParams`](#tableparams)\[`0`\]; \}) => `void` |

***

### PromptLineMethod

```ts
type PromptLineMethod: typeof promptLineMethods[keyof typeof promptLineMethods];
```

***

### PromptLineParams\<T\>

```ts
type PromptLineParams<T>: {
  intro: string;
  list: (prompt: PromptLineExecProps) => p.PromptGroup<T> | Promise<p.PromptGroup<T>>;
  onCancel: (prompt: PromptLineCancelProps) => Promise<void>;
  outro: string;
};
```

Parameters for configuring a prompt line.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Type declaration

| Name | Type |
| ------ | ------ |
| `intro`? | `string` |
| `list` | (`prompt`: `PromptLineExecProps`) => `p.PromptGroup`\<`T`\> \| `Promise`\<`p.PromptGroup`\<`T`\>\> |
| `onCancel`? | (`prompt`: [`PromptLineCancelProps`](#promptlinecancelprops)) => `Promise`\<`void`\> |
| `outro`? | `string` |

***

### PromptParams

```ts
type PromptParams: Parameters<typeof Enquirer.prompt>[0];
```

***

### RemoveEmptyLinesOptions

```ts
type RemoveEmptyLinesOptions: {
  maxConsecutive: number;
  trimEnd: boolean;
  trimStart: boolean;
};
```

Defines the options for filtering empty lines.

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `maxConsecutive`? | `number` | The maximum number of consecutive empty lines to allow. - 0: Removes all consecutive empty lines (default). - 1: Allows a single empty line between content. - Any number N: Allows up to N empty lines. |
| `trimEnd`? | `boolean` | Whether to remove trailing empty lines. **Default** `false` |
| `trimStart`? | `boolean` | Whether to remove leading empty lines. **Default** `false` |

***

### ReturnAwaitedType\<T\>

```ts
type ReturnAwaitedType<T>: Awaited<ReturnType<T>>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: [`Any`](#any)) => [`Any`](#any) |

***

### Runtime

```ts
type Runtime: typeof RUNTIME[keyof typeof RUNTIME];
```

***

### TableData

```ts
type TableData: string[][];
```

***

### TableOpts

```ts
type TableOpts: TableConstructorOptions;
```

***

### TableParams

```ts
type TableParams: Parameters<typeof table>;
```

Parameters of the `table` function from the `@dovenv/utils` module.

[See module](https://clippo.pigeonposse.com/guide/utils/style#table).

***

### ToObjectValidate\<T\>

```ts
type ToObjectValidate<T>: toZod<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

***

### ToValidate\<T\>

```ts
type ToValidate<T>: z.ZodType<T, Any, Any>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### Validate

```ts
type Validate: typeof z;
```

Validate type (zod type wrappper)

***

### ValidateAnyType

```ts
type ValidateAnyType: ZodType<any, any, any>;
```

***

### ValidateErrorType

```ts
type ValidateErrorType: ZodError;
```

***

### ValidateInfer\<O\>

```ts
type ValidateInfer<O>: z.infer<O>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `O` *extends* [`ValidateAnyType`](#validateanytype) |

***

### ValidateType\<T\>

```ts
type ValidateType<T>: ZodType<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### WorkspaceOpts

```ts
type WorkspaceOpts: {
  pkg: PackageContent;
  wsDir: string;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `pkg`? | [`PackageContent`](#packagecontent) | Main package json |
| `wsDir`? | `string` | Workspace directory **Default** `process.cwd()` |

***

### WorkspaceParams

```ts
type WorkspaceParams: {
  pkg: PackageJSON;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `pkg` | [`PackageJSON`](#packagejson) |

## Interfaces

### Dedent()

```ts
interface Dedent(literals: string): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `literals` | `string` |

#### Returns

`string`

```ts
interface Dedent(strings: TemplateStringsArray, ...values: unknown[]): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `strings` | `TemplateStringsArray` |
| ...`values` | `unknown`[] |

#### Returns

`string`

#### Properties

##### withOptions

```ts
withOptions: CreateDedent;
```

***

### DedentOptions

Fork from https://github.com/dmnd/dedent/blob/main/src/types.ts

#### Properties

##### escapeSpecialCharacters?

```ts
optional escapeSpecialCharacters: boolean;
```

##### trimWhitespace?

```ts
optional trimWhitespace: boolean;
```

## Variables

### \_styledeps

```ts
const _styledeps: LazyLoader<{
  font: () => Promise<typeof Font>;
}>;
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `font` | () => `Promise`\<*typeof* `Font`\> |

***

### colorConversion

```ts
const colorConversion: {
  hex2rgb: hexToRgb;
  hslToRgb: hslToRgb;
  rgb2CIELab: rgbToCIELab;
  rgb2hex: rgbToHex;
  rgb2sl: rgbToHsl;
  rgb2xyz: rgbToXyz;
  xyz2CIELab: xyzToCIELab;
};
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `hex2rgb` | (`hex`: `string`) => `Vec3` | hexToRgb |
| `hslToRgb` | (`h`: `number`, `s`: `number`, `l`: `number`) => `Vec3` | hslToRgb |
| `rgb2CIELab` | (`r`: `number`, `g`: `number`, `b`: `number`) => `Vec3` | rgbToCIELab |
| `rgb2hex` | (`r`: `number`, `g`: `number`, `b`: `number`) => `string` | rgbToHex |
| `rgb2sl` | (`r`: `number`, `g`: `number`, `b`: `number`) => `Vec3` | rgbToHsl |
| `rgb2xyz` | (`r`: `number`, `g`: `number`, `b`: `number`) => `Vec3` | rgbToXyz |
| `xyz2CIELab` | (`x`: `number`, `y`: `number`, `z`: `number`) => `Vec3` | xyzToCIELab |

***

### icon

```ts
const icon: {} = figures;
```

Unicode symbols with fallbacks for older terminals.

#### See

https://github.com/sindresorhus/figures/blob/main/index.js

#### Example

```ts
console.log(
  icon.warning,
  icon.cross,
  icon.arrowDown,
  icon.bullet
)
```

***

### isBrowser

```ts
const isBrowser: boolean;
```

#### See

https://www.npmjs.com/package/browser-or-node

***

### isBun

```ts
const isBun: boolean;
```

***

### isDeno

```ts
const isDeno: boolean;
```

***

### isJsDom

```ts
const isJsDom: boolean;
```

***

### isNode

```ts
const isNode: boolean;
```

***

### isWebWorker

```ts
const isWebWorker: boolean;
```

***

### json

```ts
const json: {
  deserialize: getObjectFromJSONContent;
  parser: getObjectFromJSONContent;
  serialize: (content: object) => string;
  stringify: (content: object) => string;
};
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `deserialize` | \<`Res`\>(`content`: `string`) => `Promise`\<`Res`\> | getObjectFromJSONContent |
| `parser` | \<`Res`\>(`content`: `string`) => `Promise`\<`Res`\> | getObjectFromJSONContent |
| `serialize` | (`content`: `object`) => `string` | - |
| `stringify` | (`content`: `object`) => `string` | - |

***

### logger

```ts
const logger: ConsolaInstance = consola;
```

***

### promptLine

```ts
const promptLine: {
  box: (opts: {
     opts: Options;
     type: PromptLineMethod;
     value: string;
    }) => void;
  columns: (opts: {
     opts: GlobalOptions;
     type: PromptLineMethod;
     value: ColumnData;
    }) => void;
  log: {
     errorWithExit: (m: string) => never;
    };
  number: (opts: NumberParams) => Promise<string | symbol>;
  table: (opts: {
     opts: TableConstructorOptions;
     type: PromptLineMethod;
     value: TableData;
    }) => void;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `box` | (`opts`: \{ `opts`: `Options`; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: `string`; \}) => `void` |
| `columns` | (`opts`: \{ `opts`: `GlobalOptions`; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: [`ColumnData`](#columndata); \}) => `void` |
| `log` | \{ `errorWithExit`: (`m`: `string`) => `never`; \} |
| `log.errorWithExit` | (`m`: `string`) => `never` |
| `number` | (`opts`: [`NumberParams`](#numberparams)) => `Promise`\<`string` \| `symbol`\> |
| `table` | (`opts`: \{ `opts`: `TableConstructorOptions`; `type`: [`PromptLineMethod`](#promptlinemethod); `value`: [`TableData`](#tabledata); \}) => `void` |

***

### promptLineCore

```ts
const promptLineCore: typeof p = p;
```

***

### promptLineMethods

```ts
const promptLineMethods: {
  error: 'error';
  info: 'info';
  message: 'message';
  step: 'step';
  success: 'success';
  warn: 'warn';
  warning: 'warning';
};
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `error` | `"error"` | 'error' |
| `info` | `"info"` | 'info' |
| `message` | `"message"` | 'message' |
| `step` | `"step"` | 'step' |
| `success` | `"success"` | 'success' |
| `warn` | `"warn"` | 'warn' |
| `warning` | `"warning"` | 'warning' |

***

### validate

```ts
const validate: __module = z;
```

Create schema validation from js.
The validation functions are a wrapper of `zod` functions.

#### See

https://zod.dev/

***

### ValidateError

```ts
const ValidateError: $constructor<ZodError<unknown>, $ZodIssue[]> = ZodError;
```

Validate error class.
The validation functions are a wrapper of `zod` functions.

#### See

https://zod.dev/


