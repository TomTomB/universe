/* eslint-env node */

import { chrome } from '../../temp/build-vars.json';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
      '@universe/client-renderer': SRC_PATH,
    },
  },
  plugins: [react()],
  build: {
    sourcemap: process.env.MODE === 'development',
    target: `chrome${chrome}`,
    assetsDir: '.',
    minify: process.env.MODE !== 'development',
    rollupOptions: {
      output: {
        dir: 'dist/renderer',
      },
    },
    brotliSize: false,
  },
});
