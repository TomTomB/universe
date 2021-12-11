import fetch from 'node-fetch';
import https from 'https';
import type { Credentials } from './authentication';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface RequestOptions<T = any> {
  /**
   * Relative URL (relative to LCU API base url) to send api request to
   */
  url: string;
  /**
   * Http verb to use for request
   */
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  /**
   * Optionally a body to pass to PUT/PATCH/POST/DELETE. This is typically
   * an object type as the library will parse this into JSON and send along
   * with the request
   */
  body?: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function request(
  options: RequestOptions,
  credentials?: Credentials,
) {
  const uri = trim(options.url);
  const url = `https://127.0.0.1:${credentials?.port}/${uri}`;
  const hasBody = options.method !== 'GET' && options.body !== undefined;

  const response = await fetch(url, {
    method: options.method,
    body: hasBody ? JSON.stringify(options.body) : undefined,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(`riot:${credentials?.password}`).toString('base64'),
    },
    agent: new https.Agent(
      typeof credentials?.certificate === 'undefined'
        ? {
            rejectUnauthorized: false,
          }
        : {
            ca: credentials?.certificate,
          },
    ),
  });

  const json = await response.json();

  return { data: JSON.stringify(json), status: response.status };
}

/**
 * Trim slashes in front of a string
 * @param s
 */
function trim(s: string): string {
  let r = s;
  while (r.startsWith('/')) {
    r = r.substring(1);
  }
  return r;
}
