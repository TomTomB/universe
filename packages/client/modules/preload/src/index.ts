import { contextBridge, ipcRenderer } from 'electron';
import { init as initSentryRenderer } from '@sentry/electron/dist/renderer';
import { version } from '../../../package.json';

initSentryRenderer({
  dsn: import.meta.env.VITE_SENTRY_URL,
  enabled: import.meta.env.PROD,
  release: `v${version}`,
});

const apiKey = 'electron';
/**
 * @see https://github.com/electron/electron/issues/21437#issuecomment-573522360
 */
const api: ElectronApi = {
  versions: process.versions,
  window: {
    didLoad: () => ipcRenderer.send('universe:window:did-load'),
    minimize: () => ipcRenderer.send('universe:window:minimize'),
    close: () => ipcRenderer.send('universe:window:close'),
    setPosition: (args) =>
      ipcRenderer.send('universe:window:set-position', args),
    getPosition: () => ipcRenderer.invoke('universe:window:get-position'),
  },
  lcu: {
    ws: {
      onMessage: (callback) =>
        ipcRenderer.on('universe:lcu:websocket-message', (e, d) => callback(d)),
    },
    onConnected: (callback) =>
      ipcRenderer.on('universe:lcu:connected', () => callback()),
    onDisconnected: (callback) =>
      ipcRenderer.on('universe:lcu:disconnected', () => callback()),
    getIsConnected: () => ipcRenderer.invoke('universe:lcu:get-is-connected'),

    request: (data) => ipcRenderer.invoke('universe:lcu:request', data),
  },
};

/**
 * The "Main World" is the JavaScript context that your main renderer code runs in.
 * By default, the page you load in your renderer executes code in this world.
 *
 * @see https://www.electronjs.org/docs/api/context-bridge
 */
contextBridge.exposeInMainWorld(apiKey, api);
