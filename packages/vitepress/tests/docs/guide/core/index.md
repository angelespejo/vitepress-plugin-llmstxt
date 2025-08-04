# Dovenv Documentation

`dovenv` is a versatile tool that helps manage and transform your workspace files, directories, and configurations with ease.

This page provides examples and commands to guide you in using `dovenv` effectively.

- **Alias Commands:** Create shortcuts for other commands.
- **Check Commands:** Validate the workspace structure.
- **Transform Commands:** Process and modify files based on specific inputs.

## 🔑 Installation

::: code-group

```bash [npm]
npm install @dovenv/core
```

```bash [pnpm]
pnpm install @dovenv/core
```

```bash [yarn]
yarn add @dovenv/core
```

```bash [bun]
bun add @dovenv/core
```

```bash [deno]
deno add @dovenv/core
```

:::

---

## Features

### 2. Check Commands

Check commands validate workspace structure, ensuring required files or directories exist and follow expected patterns.

#### Configuration

```ts
import {defineConfig} from '@dovenv/core'
import {joinPath, existsFile, existsDir} from '@dovenv/utils'

export default defineConfig({ check: {
  packages: {
    desc: 'Repo packages structure.',
    type: 'dir',
    patterns: [
      './packages/*',
      '!./packages/{plugin,config,theme}',
      './packages/{plugin,config,theme}/*',
    ],
    validateAll: async ({ paths }) => {
      if (paths.length === 0) throw new Error('No packages found');
    },
    validate: async ({ path }) => {
      const files = [joinPath(path, 'README.md')];
      const dirs = [joinPath(path, 'src')];
      for (const file of files) {
        const exists = await existsFile(file);
        if (!exists) throw new Error(`File [${file}] must exist`);
      }
      for (const dir of dirs) {
        const exists = await existsDir(dir);
        if (!exists) throw new Error(`Directory [${dir}] must exist`);
      }
    },
  },
} })
```

#### Example Usage

```bash
dovenv check -k packages
```

This validates the structure of the `packages` directory and ensures required files and subdirectories are present.

---

### 3. Transform Commands

Transform commands allow you to process and modify specific files. For example, adding a watermark or replacing placeholders in templates.

#### Configuration

```ts
import {defineConfig} from '@dovenv/core'
import {replacePlaceholders} from '@dovenv/utils'

export default defineConfig( { transform : {
 readme : {
  input : [ 'README.md' ],
  fn    : async props => {

   const mark = props.const?.mark as string
   if ( mark === undefined ) throw new Error( 'Missing mark in configuration' )
   return props.content + `\n<!--${mark}-->\n`

  },
 },
 pp : {
  input : [ '.pigeonposse.yml' ],
  fn    : async props => {

   const ppTemplate = props.const?.template['.pigeonposse.yml'] as string
   const content    = await replacePlaceholders( {
    content : ppTemplate,
    params  : props.const || {},
   } )
   return content

  },
 },
} } )

```

#### Example Usage

```bash
dovenv transform -k readme
```

This command appends a custom ASCII watermark to the `README.md` file.

---

### Alias Commands

#### Configuration

```ts
import {defineConfig} from '@dovenv/core'

export default defineConfig({
alias: {
  deps: {
 desc: 'List pacakge dependencies',
 cmd: 'pnpm list --depth=0',
  },
}
})
```

#### Example Usage

```bash
dovenv x deps
```

---

## More Usage

### Check Specific Key

```bash
dovenv check -k packages
```

### Check Pattern Key

```bash
dovenv check -k 'package*'
```

### Check Multiple Keys

```bash
dovenv check -k 'package*' 'docs'
```

### Transform Specific Key

```bash
dovenv transform -k readme
```

### Show Constants

```bash
dovenv const
```

### Show Aliases

Lists aliases of your config file. Use the following to display a specific alias:

```bash
dovenv alias -k deps
```

### Execute Alias

Run a specific alias. For example:

```bash
dovenv x deps
```

### Print Config File in Terminal

```bash
dovenv config
```

## ➕ More

- 💡 [Examples](examples.md)
- 📖 [API Docs](api.md)
- 📦 [NPM](https://www.npmjs.com/package/@dovenv/core)
