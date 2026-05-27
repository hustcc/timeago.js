import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/full.ts'),
      name: 'timeago',
      formats: ['cjs', 'es', 'umd'],
      fileName: (fmt) =>
        fmt === 'es' ? 'full.mjs' : fmt === 'cjs' ? 'full.cjs' : 'timeago.full.umd.js',
    },
    minify: 'terser',
  },
});
