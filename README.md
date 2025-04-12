# VitePress Plugin LLMS Text

This plugin automatically generates **LLMS text files** (`llms.txt` and `llms-full.txt`) for VitePress projects. It can be used to create useful metadata files and provide structured information for large language models (LLMs).

## Features
- Generate `llms.txt` for each page and `llms-full.txt` with all content.
- Supports custom frontmatter addition.
- Supports transformation of page data via a callback.
- Option to build only the `llms-full.txt` file.
- Generates an index table of contents if configured.

## Installation

Install the plugin:

```bash
npm install vitepress-plugin-llmstxt
# or
pnpm install vitepress-plugin-llmstxt
# or
yarn add vitepress-plugin-llmstxt
# or
bun add vitepress-plugin-llmstxt
# or
deno add vitepress-plugin-llmstxt
```

## Usage
Import and use the plugin in your VitePress configuration:

```typescript
import { defineConfig } from 'vitepress';
import llmstxtPlugin from 'vitepress-plugin-llmstxt';

export default defineConfig({
  vite: {
    plugins: [llmstxtPlugin()],
  },
});
```

## Configuration
The plugin supports the following configuration options:

### `hostname` (string)
The base URL to use for generated links. Defaults to the server's origin.

### `ignore` (string[])
An array of glob patterns to exclude from processing.

### `onlyFull` (boolean)
If `true`, only the `llms-full.txt` file will be generated.

### `indexTOC` (boolean | 'only-llms' | 'only-web')
Add index table of content in index 'llms.txt' file.

- _'only-llms'_ - Only title with LLMs links
- _'only-web'_ - Only title with web links
- _true_ - both
- _false_ - none


### `transform` (function)
A callback to transform each page's data.

### Example

```typescript
import { defineConfig } from 'vitepress';
import llmstxtPlugin from 'vitepress-plugin-llmstxt';

export default defineConfig({
  vite: {
    plugins: [llmstxtPlugin({
      hostname: 'https://example.com',
      ignore: ['api/**/*'],
      onlyFull: false,
      indexTOC: true,
      transform: ({ page, pages }) => {
		if ( page.path === '/llms.txt' )
			page.content = `Structured information designed to provide useful metadata to large language models (LLMs)\n\n` + page.content

		return page
      }
    })],
  },
});
```

## License

GPL-3.0

