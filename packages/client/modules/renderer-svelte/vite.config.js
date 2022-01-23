/* eslint-env node */

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { chrome } from '../../temp/build-vars.json';
import { resolve } from 'path';

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
  plugins: [svelte()],
  build: {
    sourcemap: process.env.MODE === 'development',
    target: `chrome${chrome}`,
    minify: process.env.MODE !== 'development',
    assetsDir: '.',
    assetsInlineLimit: 16384,
    outDir: '../../dist/renderer',
    brotliSize: false,
  },
});
