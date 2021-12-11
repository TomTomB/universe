import cp from 'child_process';
import util from 'util';

const exec = util.promisify(cp.exec);

const DEFAULT_NAME = 'LeagueClientUx';
const DEFAULT_POLL_INTERVAL = 2500;

export interface Credentials {
  port: number;
  password: string;
  pid: number;
  certificate?: string;
}

export interface AuthenticationOptions {
  name?: string;
  awaitConnection?: boolean;
  pollInterval?: number;
  certificate?: string;
  unsafe?: boolean;
}

export class InvalidPlatformError extends Error {
  constructor() {
    super('process runs on platform client does not support');
  }
}

export class ClientNotFoundError extends Error {
  constructor() {
    super('league client process could not be located');
  }
}

export async function authenticate(
  options?: AuthenticationOptions,
): Promise<Credentials> {
  async function tryAuthenticate() {
    const name = options?.name ?? DEFAULT_NAME;
    const portRegex = /--app-port=([0-9]+)/;
    const passwordRegex = /--remoting-auth-token=([\w-_]+)/;
    const pidRegex = /--app-pid=([0-9]+)/;
    const isWindows = process.platform === 'win32';

    const command = isWindows
      ? `Get-CimInstance -Query "SELECT * from Win32_Process WHERE name LIKE '${name}.exe'" | Select-Object CommandLine | fl`
      : `ps x -o args | grep '${name}'`;

    const execOptions = isWindows ? { shell: 'powershell' } : {};

    try {
      const { stdout } = await exec(command, execOptions);
      const [, port] = stdout.match(portRegex) ?? [];
      const [, password] = stdout.match(passwordRegex) ?? [];
      const [, pid] = stdout.match(pidRegex) ?? [];

      const certificate = options?.certificate;

      if (!port || !password || !pid) {
        throw new ClientNotFoundError();
      }

      return {
        port: Number(port),
        pid: Number(pid),
        password,
        certificate,
      };
    } catch {
      throw new ClientNotFoundError();
    }
  }

  if (!['win32', 'linux', 'darwin'].includes(process.platform)) {
    throw new InvalidPlatformError();
  }

  if (options?.awaitConnection) {
    return new Promise(function self(resolve, reject) {
      tryAuthenticate()
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          setTimeout(
            self,
            options?.pollInterval ?? DEFAULT_POLL_INTERVAL,
            resolve,
            reject,
          );
        });
    });
  } else {
    return tryAuthenticate();
  }
}
