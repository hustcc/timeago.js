import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'timeago',
      formats: ['cjs', 'es', 'umd'],
      fileName: (fmt) =>
        fmt === 'es' ? 'index.mjs' : fmt === 'cjs' ? 'index.cjs' : 'timeago.min.js',
    },
    minify: 'terser',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
  },
});
