#!/usr/bin/env node
// @ts-check
const { createServer, build, createLogger } = require('vite');
const electronPath = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const { copySync } = require('fs-extra');

const packagesPath = path.resolve(__dirname, '..');

/** @type {'production' | 'development' | string} */
const mode = (process.env.MODE = process.env.MODE || 'development');

/** @type {import('vite').LogLevel} */
const LOG_LEVEL = 'info';

/** @type {import('vite').InlineConfig} */
const sharedConfig = {
  mode,
  build: {
    watch: {},
  },
  logLevel: LOG_LEVEL,
};

/** Messages on stderr that match any of the contained patterns will be stripped from output */
const stderrFilterPatterns = [
  // warning about devtools extension
  // https://github.com/cawa-93/vite-electron-builder/issues/492
  // https://github.com/MarshallOfSound/electron-devtools-installer/issues/143
  /ExtensionLoadWarning/,
];

/**
 *
 * @param {{name: string; configFile: string; writeBundle: import('rollup').OutputPlugin['writeBundle'] }} param0
 * @returns {Promise<import('rollup').RollupOutput | import('rollup').RollupOutput[] | import('rollup').RollupWatcher >}
 */
const getWatcher = ({ name, configFile, writeBundle }) => {
  return build({
    ...sharedConfig,
    configFile,
    plugins: [{ name, writeBundle }],
  });
};

/**
 * Start or restart App when source files are changed
 * @param {import('vite').ViteDevServer} viteDevServer
 * @returns {Promise<import('rollup').RollupOutput | import('rollup').RollupOutput[] | import('rollup').RollupWatcher >}
 */
const setupMainPackageWatcher = (viteDevServer) => {
  // Write a value to an environment variable to pass it to the main process.
  {
    const protocol = `http${viteDevServer.config.server.https ? 's' : ''}:`;
    const host = viteDevServer.config.server.host || 'localhost';
    const port = viteDevServer.config.server.port; // Vite searches for and occupies the first free port: 3000, 3001, 3002 and so on
    const path = '/';
    process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}${path}`;
  }

  const logger = createLogger(LOG_LEVEL, {
    prefix: '[main]',
  });

  /** @type {import('child_process').ChildProcessWithoutNullStreams | null} */
  let spawnProcess = null;

  return getWatcher({
    name: 'reload-app-on-main-package-change',
    configFile: `${packagesPath}/modules/main/vite.config.js`,
    writeBundle() {
      if (spawnProcess !== null) {
        spawnProcess.kill('SIGINT');
        spawnProcess = null;
      }

      spawnProcess = spawn(String(electronPath), ['.']);

      spawnProcess.stdout.on(
        'data',
        (d) =>
          d.toString().trim() && logger.warn(d.toString(), { timestamp: true }),
      );
      spawnProcess.stderr.on('data', (d) => {
        const data = d.toString().trim();
        if (!data) return;
        const mayIgnore = stderrFilterPatterns.some((r) => r.test(data));
        if (mayIgnore) return;
        logger.error(data, { timestamp: true });
      });
    },
  });
};

/**
 * Start or restart App when source files are changed
 * @param {import('vite').ViteDevServer} viteDevServer
 * @returns {Promise<import('rollup').RollupOutput | import('rollup').RollupOutput[] | import('rollup').RollupWatcher >}
 */
const setupPreloadPackageWatcher = (viteDevServer) => {
  return getWatcher({
    name: 'reload-page-on-preload-package-change',
    configFile: `${packagesPath}/modules/preload/vite.config.js`,
    writeBundle() {
      viteDevServer.ws.send({
        type: 'full-reload',
      });
    },
  });
};

const buildSplash = () => {
  copySync(
    path.resolve(packagesPath, 'modules/splash'),
    path.resolve(packagesPath, 'dist/splash'),
    { recursive: true },
  );
};

(async () => {
  try {
    buildSplash();

    const viteDevServer = await createServer({
      ...sharedConfig,
      configFile: `${packagesPath}/modules/renderer/vite.config.js`,
    });

    await viteDevServer.listen();

    await setupPreloadPackageWatcher(viteDevServer);
    await setupMainPackageWatcher(viteDevServer);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
