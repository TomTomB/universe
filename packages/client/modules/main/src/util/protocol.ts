import * as path from 'path';
import { Logger } from './logger';

export const scheme = 'universe';

export const requestHandler = (
  request: Electron.ProtocolRequest,
  callback: (response: string | Electron.ProtocolResponse) => void,
): void => {
  const url = request.url.substr(scheme.length + 3);

  const rootDir = path.join(__dirname, '..');

  Logger.verbose('Loading file', `${rootDir}/${url}`);

  callback({ path: path.normalize(`${rootDir}/${url}`) });
};
