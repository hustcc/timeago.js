import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'timeago',
      formats: ['cjs', 'es'],
      fileName: (fmt) => (fmt === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    minify: false,
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
