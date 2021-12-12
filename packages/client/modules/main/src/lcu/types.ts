export interface LCUCredentials {
  authToken: string;
  appPort: string;
  appCertificate: string;
  username: string;
}

export interface RequestOptions<T = unknown> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: T;
}
