import { createLCUWebSocket } from './websocket';
import type { WebSocket } from 'ws';
import { createLCURequest } from './request';
import { getMainWindow } from '../util/window';
import pem from './riot.pem?raw';
import { getLCUCredentials } from './client';
import type { LCUCredentials, RequestOptions } from './types';

export class LCUConnector {
  private _ws?: WebSocket;
  private _credentials?: LCUCredentials;

  private _isPolling = false;
  private _pollingInterval?: NodeJS.Timer;
  private _isConnected = false;

  get isConnected() {
    return this._isConnected;
  }

  async connect() {
    this._setupLCUPolling(
      (credentials, ws) => {
        const win = getMainWindow();

        if (!win) {
          return;
        }

        win.webContents.send('universe:lcu:connected');

        this._ws?.close();
        this._setupWs(ws);

        this._credentials = credentials;
        this._isConnected = true;
      },
      () => {
        const win = getMainWindow();

        if (!win) {
          return;
        }

        win.webContents.send('universe:lcu:disconnected');
        this._isConnected = false;
      },
    );
  }

  request(opts: RequestOptions<unknown>) {
    if (!this._credentials) {
      return;
    }

    return createLCURequest(opts, this._credentials);
  }

  disconnect() {
    if (this._ws) {
      this._ws.close();
    }
    this._isPolling = false;
    this._pollingInterval?.unref();
    this._pollingInterval = undefined;
  }

  private _setupWs(ws: WebSocket) {
    const win = getMainWindow();

    if (!win) {
      return;
    }

    ws.on('message', (message) => {
      const msg = message.toString();

      if (!msg) {
        return;
      }

      const data = JSON.parse(msg) as [
        number,
        string,
        { data: Record<string, unknown>; uri: string; eventType: string },
      ];

      const innerData = data?.[2];

      if (!innerData) {
        return;
      }

      win.webContents.send(
        'universe:lcu:websocket-message',
        JSON.stringify(innerData),
      );
    });

    this._ws = ws;
  }

  private _setupLCUPolling(
    onConnect: (credentials: LCUCredentials, ws: WebSocket) => void,
    onDisconnect: () => void,
  ) {
    if (this._isPolling) {
      return;
    }

    this._isPolling = true;
    let previousResult: 'connect' | 'disconnect' = 'disconnect';

    const tick = async () => {
      const credentials = await getLCUCredentials();

      if (!credentials) {
        if (previousResult === 'disconnect') {
          return;
        }

        onDisconnect();
        previousResult = 'disconnect';
        return;
      }

      if (previousResult === 'connect') {
        return;
      }

      const lcuCredentials = {
        authToken: credentials.authToken,
        appPort: credentials.appPort,
        appCertificate: pem,
        username: 'riot',
      };

      const ws = createLCUWebSocket(lcuCredentials);

      const win = getMainWindow();

      if (!win) {
        return;
      }

      ws.on('open', () => {
        onConnect(lcuCredentials, ws);
        previousResult = 'connect';
      });

      ws.on('error', () => {
        previousResult = 'disconnect';
      });
    };

    tick();

    this._pollingInterval = setInterval(async () => await tick(), 2500);
  }
}
