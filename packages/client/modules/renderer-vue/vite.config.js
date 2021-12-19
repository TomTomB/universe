/* eslint-env node */

import { chrome } from '../../temp/build-vars.json';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const SRC_PATH = `${resolve(__dirname, 'src')}`;

export default defineConfig({
  mode: process.env.MODE,
  root: __dirname,
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  resolve: {
    alias: {
      '@': SRC_PATH,
    },
  },
  plugins: [vue()],
  build: {
    sourcemap: process.env.MODE === 'development',
    target: `chrome${chrome}`,
    minify: process.env.MODE !== 'development',
    assetsDir: '.',
    outDir: '../../dist/renderer',
    brotliSize: false,
  },
});
