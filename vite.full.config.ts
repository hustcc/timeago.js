import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/full.ts'),
      name: 'timeago',
      formats: ['umd'],
      fileName: () => 'timeago.full.min.js',
    },
    minify: 'terser',
  },
});
