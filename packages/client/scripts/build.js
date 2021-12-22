#!/usr/bin/env node
// @ts-check

const { build } = require('vite');
const { dirname } = require('path');
const path = require('path');
const { copySync, removeSync } = require('fs-extra');

const packagesPath = path.resolve(__dirname, '..');

/** @type {'production' | 'development' | string} */
const mode = (process.env.MODE = process.env.MODE || 'production');

const packagesConfigs = [
  `${packagesPath}/modules/main/vite.config.js`,
  `${packagesPath}/modules/preload/vite.config.js`,
  `${packagesPath}/modules/renderer/vite.config.js`,
];

const buildSplash = () => {
  copySync(
    path.resolve(packagesPath, 'modules/splash'),
    path.resolve(packagesPath, 'dist/splash'),
    { recursive: true },
  );
};

const cleanupDist = () => {
  removeSync(path.resolve(packagesPath, 'dist/main'));
  removeSync(path.resolve(packagesPath, 'dist/preload'));
  removeSync(path.resolve(packagesPath, 'dist/renderer'));
  removeSync(path.resolve(packagesPath, 'dist/splash'));
};

/**
 * Run `vite build` for config file
 * @param {string} configFile
 */
const buildByConfig = (configFile) => build({ configFile, mode });
(async () => {
  try {
    const totalTimeLabel = 'Total bundling time';
    console.time(totalTimeLabel);

    cleanupDist();
    buildSplash();

    for (const packageConfigPath of packagesConfigs) {
      const consoleGroupName = `${dirname(packageConfigPath)}/`;
      console.group(consoleGroupName);

      const timeLabel = 'Bundling time';
      console.time(timeLabel);

      await buildByConfig(packageConfigPath);

      console.timeEnd(timeLabel);
      console.groupEnd();
      console.log('\n'); // Just for pretty print
    }
    console.timeEnd(totalTimeLabel);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
