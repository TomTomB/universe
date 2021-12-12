import fetch from 'node-fetch';
import https from 'https';
import type { LCUCredentials, RequestOptions } from './types';

export const createLCURequest = async (
  options: RequestOptions,
  credentials: LCUCredentials,
) => {
  const url = `https://127.0.0.1:${credentials?.appPort}${options.url}`;
  const hasBody = options.method !== 'GET' && options.body !== undefined;

  const response = await fetch(url, {
    method: options.method,
    body: hasBody ? JSON.stringify(options.body) : undefined,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${credentials.username}:${credentials?.authToken}`,
        ).toString('base64'),
    },
    agent: new https.Agent({
      ca: credentials.appCertificate,
    }),
  });

  const json = await response.json();

  return { data: JSON.stringify(json), status: response.status };
};
