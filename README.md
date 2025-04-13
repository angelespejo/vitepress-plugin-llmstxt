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
The base URL to use for generated links.  
**@example** `'https://example.org'`  
Defaults to the server's origin if not specified.

### `ignore` (string[])
An array of glob patterns to exclude from processing.  
**@example** `["**/guide/api.md"]`

### `llmsFile` (boolean | object)
Whether to generate the main `llms.txt` file.  
Defaults to `true`.

If passed as an object, you can control additional options:

#### `indexTOC` (boolean | 'only-llms' | 'only-web' | 'only-llms-links' | 'only-web-links')
Controls the content of the table of contents inside the `llms.txt` file.

- `'only-llms'` - Only the title with LLMs links  
- `'only-web'` - Only the title with web links  
- `'only-llms-links'` - Only the LLMs links  
- `'only-web-links'` - Only the web links  
- `true` - Show both  
- `false` - No index included  

### `llmsFullFile` (boolean)
Whether to generate the extended `llms-full.txt` file.  
**@default** `true`

### `mdFiles` (boolean)
Whether to generate a `.md` file for each route.  
**@default** `true`

### `transform` (function)
A callback to transform each page's data before writing it.  
It receives:

```ts
{
  page: LlmsPageData,
  pages: LlmsPageData[],
  vpConfig?: VPConfig,
  utils: {
    getIndexTOC: (type: IndexTOC) => string,
    removeFrontmatter: (content: string) => string
  }
}
```

You can use this to mutate `page.content`, add or remove metadata, or conditionally skip pages.

### Example

```ts
import { defineConfig } from 'vitepress';
import llmstxtPlugin from 'vitepress-plugin-llmstxt';

export default defineConfig({
  vite: {
    plugins: [
      llmstxtPlugin({
        hostname: 'https://example.com',
        ignore: ['*/api/**/*'],
        llmsFile: {
          indexTOC: 'only-llms',
        },
        llmsFullFile: true,
        mdFiles: false,
        transform: ({ page, pages }) => {
          if (page.path === '/llms.txt') {
            page.content = `Structured information designed to provide useful metadata to large language models (LLMs)\n\n` + page.content;
          }
          return page;
        },
      })
    ],
  },
});
```

## License

GPL-3.0

