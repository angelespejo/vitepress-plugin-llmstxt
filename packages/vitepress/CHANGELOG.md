# vitepress-plugin-llmstxt

## 0.5.4

### Patch Changes

- [`feb1338`](https://github.com/angelespejo/vitepress-plugin-llmstxt/commit/feb1338dd9f6b64391ef13b11d6a0ceb943b6112) Thanks [@angelespejo](https://github.com/angelespejo)! - fix: resolve `ignore` globs relative to the VitePress `srcDir`, so they also work when VitePress is started from a directory other than the docs root (e.g. `vitepress dev ../docs`)

## 0.5.3

### Patch Changes

- Use forward slashes in URL paths on Windows: `LLMS_URL` and the LLMs links in `llms.txt` no longer contain backslashes, and the dev server now serves `llms.txt`, `llms-full.txt` and the `.md` files ([#8](https://github.com/angelespejo/vitepress-plugin-llmstxt/issues/8)).

- [#9](https://github.com/angelespejo/vitepress-plugin-llmstxt/pull/9) [`fc59993`](https://github.com/angelespejo/vitepress-plugin-llmstxt/commit/fc59993927c2ff0278221f46c9ead602a159e82c) Thanks [@rhorenov](https://github.com/rhorenov)! - Use forward slashes in URL paths on Windows: `LLMS_URL` and the LLMs links in `llms.txt` no longer contain backslashes, and the dev server now serves `llms.txt`, `llms-full.txt` and the `.md` files ([#8](https://github.com/angelespejo/vitepress-plugin-llmstxt/issues/8)).

## 0.5.2

### Patch Changes

- [#7](https://github.com/angelespejo/vitepress-plugin-llmstxt/pull/7) [`26d249a`](https://github.com/angelespejo/vitepress-plugin-llmstxt/commit/26d249a8aa144ee9ae9019af9382e8619ab54883) Thanks [@YfengJ](https://github.com/YfengJ)! - Fix the package repository git metadata.

- - fix [issue](https://github.com/angelespejo/vitepress-plugin-llmstxt/issues/8)
  - add more tests
  - update devDependences

## 0.5.1

### Patch Changes

- update dependences and add tests for vitepress v2

## 0.5.0

### Minor Changes

- Add experimental support for vitepress 2.0.0-alpha

## 0.4.2

### Patch Changes

- up docs

## 0.4.1

### Patch Changes

- fix plugin name

## 0.4.0

### Minor Changes

- Refactored code
- Added support for view mode for development.
- Fixed issues with build size.
- Added tests to make the plugin robust.
- Modified `/client` functions.

## 0.3.2

### Patch Changes

- up docs

## 0.3.1

### Patch Changes

- add docs

## 0.3.0

### Minor Changes

- Add suport to dynamic routes [Related issue](https://github.com/angelespejo/vitepress-plugin-llmstxt/issues/2)

## 0.2.1

### Patch Changes

- Add support to dynamic routes

## 0.2.0

### Minor Changes

- add client support

## 0.1.1

### Patch Changes

- up devDeps, add docs, change license

## 0.1.0

### Minor Changes

- add some changes to plugin options

## 0.0.6

### Patch Changes

- add feats

## 0.0.5

### Patch Changes

- add perf, add feats

## 0.0.4

### Patch Changes

- add exports

## 0.0.3

### Patch Changes

- fix format

## 0.0.2

### Patch Changes

- add v0
