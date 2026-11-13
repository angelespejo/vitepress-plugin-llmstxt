---
'vitepress-plugin-llmstxt': patch
---

fix: resolve `ignore` globs relative to the VitePress `srcDir`, so they also work when VitePress is started from a directory other than the docs root (e.g. `vitepress dev ../docs`)
