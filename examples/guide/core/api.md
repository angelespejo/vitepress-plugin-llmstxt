# `@dovenv/core` - API documentation

## Classes

### Dovenv

Instance `Dovenv`.

This is the "dovenv" class that builds the command line interface.

It is similar to the cli tool but for use in `js`|`ts` projects.

Provides tools for managing configurations, constants, and path transformations etc.
Supports custom configurations and predefined commands.
Features:
- Validate files or directories with custom rules.
- Manage workspace constants efficiently.
- Transform paths with configurable patterns.
- Extend or override default behaviors with custom configurations.

---

#### See

https://dovenv.pigeonposse.com/guide/core

#### Example

```ts
// Create an instance with custom configurations
const dovenv = new Dovenv({
  config: {
    check: {
      pkg: { include: ['src/**'], ... }
    },
  }
});

// Run a predefined action
await dovenv.run(['check', '-k', 'pkg']);
```

#### Constructors

##### new Dovenv()

```ts
new Dovenv(params?: Params): Dovenv
```

Creates a new `Dovenv` instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params`? | [`Params`](#params) | Optional initialization parameters. |

###### Returns

[`Dovenv`](#dovenv)

#### Methods

##### run()

```ts
run(args: string[]): Promise<void>
```

Runs the build process with the given arguments.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `args` | `string`[] | `[]` | Arguments to pass to the run process. |

###### Returns

`Promise`\<`void`\>

###### Example

```ts
const dovenv = new Dovenv({
  config: {
    check: {
      pkg: {...}
    },
    ...
  }
})
await dovenv.run(['check', '-k', 'pkg'])
```

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `config` | `undefined` \| [`Config`](#config) | Configuration object for commands and options of the `Dovenv` instance. |
| `dovenvConfigPath` | `undefined` \| `string` | Contains Dovenv config path. This property is used for user information purposes only. If the "config" option is added via the class constructor, this option will be undefined. In this case you can change its value, but this may alter the behavior of the class. Do so at your own risk. |

## Functions

### createCLI()

```ts
function createCLI(opts?: CreateCliParams): Promise<Argv<{}>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts`? | `CreateCliParams` |

#### Returns

`Promise`\<`Argv`\<\{\}\>\>

***

### defineConfig()

```ts
function defineConfig(...config: (Config | Config[])[]): Config
```

Defines and returns the given configuration object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`config` | ([`Config`](#config) \| [`Config`](#config)[])[] | The configuration object to define. |

#### Returns

[`Config`](#config)

- The defined configuration object.

#### See

https://dovenv.pigeonposse.com/guide/core

---

#### Examples

```ts
// Example 1: A single configuration object
export default defineConfig(config1);
```

```ts
// Example 2: Multiple configurations as arguments
export default defineConfig(config1, config2);
```

```ts
// Example 3: An array of configurations
export default defineConfig([config1, config2]);
```

***

### getCommandUtils()

```ts
function getCommandUtils(data?: {
  pkg: Record<string, unknown>;
  wsDir: string;
}): Promise<CommandSuper>
```

Retrieves command utilities for the given workspace directory.
If a package.json object is not provided, it reads and parses it from the workspace directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data`? | `object` | Data |
| `data.pkg`? | `Record`\<`string`, `unknown`\> | Optional package.json content as an object. |
| `data.wsDir`? | `string` | The workspace directory path. **Default** `process.cwd()` |

#### Returns

`Promise`\<`CommandSuper`\>

- A promise that resolves to the command utilities.

#### Example

```ts
const utils = await getCommandUtils();
console.log(utils);
```

***

### run()

```ts
function run(args: string[]): Promise<void>
```

Runs the build process with the given arguments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | `string`[] | Arguments to pass to the build process. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
import { run } from '@dovenv/core'

await run(['-c', 'my/config.js', 'check'])
```

## Type Aliases

### CommandUtils

```ts
type CommandUtils: CommandSuper;
```

***

### Config

```ts
type Config: {
  alias: AliasesConfig;
  check: CheckConfig;
  const: ConstConfig;
  custom: CustomConfig;
  desc: string;
  name: string;
  transform: TransformConfig;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `alias`? | `AliasesConfig` | Configuration for the `aliases` |
| `check`? | `CheckConfig` | Configuration for the `check` command |
| `const`? | `ConstConfig` | Configuration for set the constants used in templates |
| `custom`? | `CustomConfig` | Configuration for create `custom` commands |
| `desc`? | `string` | Description of the project |
| `name`? | `string` | Name of the project |
| `transform`? | `TransformConfig` | Configuration for the `transform` command |

***

### Params

```ts
type Params: {
  config: Config;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`Config`](#config) | Configuration for dovenv **See** https://dovenv.pigeonposse.com/guide/core/api#config |
