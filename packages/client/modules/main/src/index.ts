import { app, BrowserWindow, shell, protocol } from 'electron';
import { join } from 'path';
import { URL } from 'url';
import { Logger } from './util/logger';
import * as Protocol from './util/protocol';
import { init as initSentryMain } from '@sentry/electron/dist/main';
import { version } from '../../../package.json';

initSentryMain({
  dsn: import.meta.env.VITE_SENTRY_URL,
  enabled: app.isPackaged,
  release: `v${version}`,
});

protocol.registerSchemesAsPrivileged([
  {
    scheme: Protocol.scheme,
    privileges: {
      standard: true,
      secure: true,
    },
  },
]);

const isSingleInstance = app.requestSingleInstanceLock();

if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}

if (import.meta.env.DEV) {
  app
    .whenReady()
    .then(() => import('electron-devtools-installer'))
    .then(
      ({ default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS }) =>
        installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS], {
          loadExtensionOptions: {
            allowFileAccess: true,
          },
        })
    )
    .catch((e) => Logger.error('Failed install extension:', e));
}

let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
  if (app.isPackaged) {
    protocol.registerFileProtocol(Protocol.scheme, Protocol.requestHandler);
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1280,
    height: 720,
    resizable: false,
    backgroundColor: '#010a13',
    fullscreenable: false,
    roundedCorners: false,
    transparent: true,
    center: true,
    frame: false,
    webPreferences: {
      sandbox: true,
      contextIsolation: true,
      devTools: !app.isPackaged,
      nativeWindowOpen: true,
      disableBlinkFeatures: 'Auxclick',
      preload: join(__dirname, '../preload/index.cjs'),
    },
  });

  const splash = new BrowserWindow({
    width: 500,
    height: 230,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    fullscreenable: false,
    center: true,
    resizable: false,
    webPreferences: {
      devTools: !app.isPackaged,
      sandbox: true,
      contextIsolation: true,
      disableBlinkFeatures: 'Auxclick',
    },
  });

  mainWindow.webContents.once('dom-ready', () => {
    splash.destroy();

    if (!mainWindow) {
      Logger.error('Main window is null');
      return;
    }

    mainWindow.show();
    mainWindow.focus();

    if (import.meta.env.DEV) {
      mainWindow?.webContents.openDevTools({ mode: 'detach' });
    }
  });

  const mainWindowUrl =
    import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
      ? import.meta.env.VITE_DEV_SERVER_URL
      : new URL(
          join(__dirname, '../renderer/index.html'),
          `${Protocol.scheme}://`
        ).toString();

  const splashWindowUrl = import.meta.env.DEV
    ? new URL(join(__dirname, '../splash/index.html'), 'file://').toString()
    : new URL(
        join(__dirname, '../splash/index.html'),
        `${Protocol.scheme}://`
      ).toString();

  splash.loadURL(splashWindowUrl);
  mainWindow.loadURL(mainWindowUrl);
};

app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(createWindow)
  .catch((e) => Logger.error('Failed create window:', e));

if (import.meta.env.PROD) {
  app
    .whenReady()
    .then(() => import('electron-updater'))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => Logger.error('Failed check updates:', e));
}

app.on('web-contents-created', (_event, contents) => {
  contents.on('will-navigate', (event, url) => {
    const allowedOrigins: ReadonlySet<string> = new Set<`https://${string}`>();
    const { origin, hostname } = new URL(url);
    const isDevLocalhost = import.meta.env.DEV && hostname === 'localhost';

    if (!allowedOrigins.has(origin) && !isDevLocalhost) {
      Logger.warn('Blocked navigating to an unallowed origin:', origin);
      event.preventDefault();
    }
  });

  contents.setWindowOpenHandler(({ url }) => {
    const allowedOrigins: ReadonlySet<string> = new Set<`https://${string}`>();

    const { origin } = new URL(url);
    if (allowedOrigins.has(origin)) {
      shell.openExternal(url);
    } else {
      Logger.warn('Blocked the opening of an unallowed origin:', origin);
    }
    return { action: 'deny' };
  });
});
