# [vite-module-not-found-bug](https://teemukoivisto.github.io/vite-module-not-found-bug/)

How to reproduce:

1. `pnpm i`
2. `pnpm pnpm --filter lib --filter my-lib build`
3. `pnpm --filter bug build`
4. Build should fail with:

```
[vite]: Rollup failed to resolve import "@/lib/schemas" from "/Users/teemu/git_projects/omat/vite-module-not-found-bug/packages/bug/src/index.ts".
```

On client-side vite would sometimes show:

```
Error: The following dependencies are imported but could not be resolved:
```

or 

```
Failed to resolve entry for package
```
