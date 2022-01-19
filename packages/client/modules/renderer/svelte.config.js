/* eslint-env node */

const sveltePreprocess = require('svelte-preprocess');

/**
 * @type {import('@sveltejs/vite-plugin-svelte').Options}
 */
module.exports = {
  preprocess: sveltePreprocess(),
};
