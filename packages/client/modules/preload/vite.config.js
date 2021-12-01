import { chrome } from '../../temp/build-vars.json';
import { resolve } from 'path';
import { builtinModules } from 'module';
import { defineConfig } from 'vite';

const SRC_PATH = `${resolve(__dirname, 'src')}`;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  mode: process.env.MODE,
  root: __dirname,
  resolve: {
    alias: {
      '@universe/client-preload': SRC_PATH,
    },
  },
  build: {
    sourcemap: process.env.MODE === 'development' ? 'inline' : false,
    target: `chrome${chrome}`,
    assetsDir: '.',
    minify: process.env.MODE !== 'development',
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['electron', ...builtinModules],
      output: {
        dir: 'dist/preload',
        entryFileNames: '[name].cjs',
      },
    },
    brotliSize: false,
  },
});
