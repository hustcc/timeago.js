import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'timeago',
      formats: ['umd'],
      fileName: () => 'timeago.min.js',
    },
    minify: 'terser',
  },
});
