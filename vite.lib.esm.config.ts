import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/esm',
    emptyOutDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        full: resolve(__dirname, 'src/full.ts'),
      },
      formats: ['es'],
      fileName: '[name].js',
    },
    minify: false,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
});
