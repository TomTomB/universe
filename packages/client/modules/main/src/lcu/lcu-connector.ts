import * as cp from 'child_process';
import * as fs from 'fs';
import * as util from 'util';
import { COMMAND, INSTALL_REGEX, IS_WINDOWS } from './constants';
import type { FSWatcher } from 'chokidar';
import { watch } from 'chokidar';
import type { LCUCredentials } from '../../../renderer/src/types';
import { getMainWindow } from '../util/window';
import { Logger } from '../util/logger';

export class LCUConnector {
  private exec = util.promisify(cp.exec);

  private readFile = util.promisify(fs.readFile);

  foundProcess = false;

  lockfileWatcher: FSWatcher | undefined;

  processWatcher: NodeJS.Timeout | undefined;

  start = async () => {
    Logger.info('LCU CONNECTOR > Start');

    this.foundProcess = false;

    if (this.processWatcher) {
      this.processWatcher.unref();
    }

    this.watchProcess();
    this.processWatcher = setInterval(async () => {
      this.watchProcess();
    }, 5000);
  };

  stop = async () => {
    Logger.info('LCU CONNECTOR > Stop');

    if (this.processWatcher) {
      this.processWatcher.unref();
    }

    if (this.lockfileWatcher) {
      await this.lockfileWatcher.close();
    }

    this.foundProcess = false;
  };

  watchLockfile = async (fullPath: string) => {
    return watch(fullPath).on('all', async (eventName) => {
      if (eventName !== 'add' && eventName !== 'unlink') {
        return;
      }

      const mainWindow = getMainWindow();

      if (!mainWindow) {
        Logger.error('LCU CONNECTOR > Main window found');
        return;
      }

      if (eventName === 'add') {
        const credentialString = await this.readFile(fullPath, 'utf8');
        const credentials = this.decryptLockfile(credentialString);

        if (credentials) {
          mainWindow.webContents.send('lcu-connect', credentials);
          Logger.info('LCU CONNECTOR > lcu-connect', credentials);
        }
      } else {
        mainWindow.webContents.send('lcu-disconnect');
        Logger.info('LCU CONNECTOR > lcu-disconnect');
      }
    });
  };

  watchProcess = async () => {
    try {
      if (this.foundProcess) {
        return;
      }

      const { stdout } = await this.exec(COMMAND, {
        shell: IS_WINDOWS ? 'powershell' : undefined,
      });

      const parts = stdout.match(INSTALL_REGEX) || [];
      const installPath = parts[1];
      const fullPath = `${installPath}\\lockfile`;

      if (!installPath) {
        return;
      }

      this.foundProcess = true;

      if (this.lockfileWatcher) {
        await this.lockfileWatcher.close();
      }

      this.lockfileWatcher = await this.watchLockfile(fullPath);
    } catch {
      if (this.lockfileWatcher) {
        await this.lockfileWatcher.close();
      }
      this.foundProcess = false;
    }
  };

  decryptLockfile = (file: string) => {
    const credentialArray = file.split(':');

    if (credentialArray.length !== 5) {
      Logger.error(
        `LCU CONNECTOR > Credential array has invalid length. Has ${credentialArray.length}!`,
      );
      return null;
    }

    const credentials: LCUCredentials = {
      username: 'riot',
      process: credentialArray[0],
      address: '127.0.0.1',
      PID: +credentialArray[1],
      port: +credentialArray[2],
      password: credentialArray[3],
      protocol: credentialArray[4],
    };

    return credentials;
  };
}
