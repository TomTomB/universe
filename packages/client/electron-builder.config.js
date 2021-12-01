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
      to: '',
      filter: ['**/*'],
    },
    {
      from: 'dist/preload',
      to: 'preload',
      filter: ['**/*'],
    },
    {
      from: 'dist/renderer',
      to: 'renderer',
      filter: ['**/*'],
    },
  ],
};

module.exports = config;
