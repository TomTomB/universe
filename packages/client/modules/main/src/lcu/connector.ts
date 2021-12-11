import type { Credentials } from './authentication';
import { authenticate } from './authentication';
import type { LeagueWebSocket } from './websocket';
import { connect } from './websocket';
import type { RequestOptions } from './request';
import { request } from './request';
import { getMainWindow } from '../util/window';
import pem from './riot.pem?raw';
import type { BrowserWindow } from 'electron';

export class LCUConnector {
  private _ws?: LeagueWebSocket;
  private _credentials?: Credentials;
  private _window?: BrowserWindow;

  async connect() {
    const win = getMainWindow();

    if (!win) {
      throw new Error('No main window found');
    }
    this._window = win;

    const credentials = await authenticate({
      awaitConnection: true,
      pollInterval: 2500,
      certificate: pem,
    });
    this._credentials = credentials;

    const ws = await connect(credentials);
    this._ws = ws;

    ws.on('open', () => {
      win.webContents.send('universe:lcu-websocket-open');
    });

    ws.on('close', () => {
      win.webContents.send('universe:lcu-websocket-close');
    });

    ws.on('error', () => {
      win.webContents.send('universe:lcu-websocket-error');
    });

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
        'universe:lcu-websocket-message',
        JSON.stringify(innerData),
      );
    });
  }

  request(opts: RequestOptions<unknown>) {
    if (!this._credentials) {
      return;
    }

    return request(opts, this._credentials);
  }

  disconnect() {
    if (this._ws) {
      this._ws.close();
    }
  }
}
