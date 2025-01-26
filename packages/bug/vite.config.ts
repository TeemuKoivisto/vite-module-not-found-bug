import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve('src/index.ts'),
      fileName: '[name]',
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      input: {
        index: path.resolve(`./src/index.ts`),
      },
    },
  },
  plugins: [dts()],
})
