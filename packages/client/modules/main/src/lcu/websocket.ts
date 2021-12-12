import https from 'https';
import { WebSocket } from 'ws';
import type { LCUCredentials } from './types';

export const createLCUWebSocket = (credentials: LCUCredentials) => {
  const url = `wss://riot:${credentials.authToken}@127.0.0.1:${credentials.appPort}`;

  const ws = new WebSocket(url, {
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(`riot:${credentials.authToken}`).toString('base64'),
    },
    agent: new https.Agent({
      ca: credentials.appCertificate,
    }),
  });

  ws.on('open', () => {
    ws.send(JSON.stringify([5, 'OnJsonApiEvent']));
  });

  return ws;
};
