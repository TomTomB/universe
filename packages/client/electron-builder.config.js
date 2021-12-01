/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'Universe',
  appId: 'digital.bornholdt.Universe',
  // publish: {
  //   provider: 'github',
  //   owner: 'TomTomB',
  //   repo: 'universe',
  //   releaseType: 'release',
  // },
  directories: {
    output: 'dist/bin',
  },
  files: [
    'package.json',
    {
      from: 'dist/main',
      to: 'dist/main',
      filter: ['**/*'],
    },
    {
      from: 'dist/preload',
      to: 'dist/preload',
      filter: ['**/*'],
    },
    {
      from: 'dist/renderer',
      to: 'dist/renderer',
      filter: ['**/*'],
    },
    {
      from: 'dist/splash',
      to: 'dist/splash',
      filter: ['**/*'],
    },
    {
      from: 'modules/renderer/public',
      to: 'dist/renderer',
      filter: ['**/*'],
    },
  ],
};

module.exports = config;
