import { defineConfig } from 'vite';
import { node } from '../../temp/build-vars.json';
import { resolve } from 'path';
import { builtinModules } from 'module';

const SRC_PATH = `${resolve(__dirname, 'src')}`;

export default defineConfig({
  mode: process.env.MODE,
  root: __dirname,
  envDir: process.cwd(),
  resolve: {
    alias: {
      '@universe/client-main': SRC_PATH,
    },
  },
  build: {
    sourcemap: process.env.MODE === 'development' ? 'inline' : false,
    target: `node${node}`,
    assetsDir: '.',
    minify: process.env.MODE !== 'development',
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['electron', 'electron-devtools-installer', ...builtinModules],
      output: {
        dir: 'dist/main',
        entryFileNames: '[name].cjs',
      },
    },
    emptyOutDir: false,
    brotliSize: false,
  },
});
