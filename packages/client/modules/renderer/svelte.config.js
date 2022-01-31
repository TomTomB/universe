/* eslint-env node */

const sveltePreprocess = require('svelte-preprocess');
const { resolve } = require('path');

const SRC_PATH = `${resolve(__dirname, 'src')}`;

const scssAliases = (aliases) => {
  return (url) => {
    for (const [alias, aliasPath] of Object.entries(aliases)) {
      if (url.indexOf(alias) === 0) {
        return {
          file: url.replace(alias, aliasPath),
        };
      }
    }
    return url;
  };
};

/**
 * @type {import('@sveltejs/vite-plugin-svelte').Options}
 */
module.exports = {
  preprocess: sveltePreprocess({
    aliases: { '@': SRC_PATH },
    scss: {
      importer: [
        scssAliases({
          '@': SRC_PATH,
        }),
      ],
    },
  }),
};
