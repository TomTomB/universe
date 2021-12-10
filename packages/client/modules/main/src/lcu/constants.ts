export const IS_WINDOWS = process.platform === 'win32';

export const INSTALL_REGEX_WIN = /"--install-directory=(.*?)"/;
export const INSTALL_REGEX_MAC = /--install-directory=(.*?)( --|\n|$)/;
export const INSTALL_REGEX = IS_WINDOWS ? INSTALL_REGEX_WIN : INSTALL_REGEX_MAC;

export const COMMAND = IS_WINDOWS
  ? '(Get-CimInstance Win32_Process -Filter "name = \'LeagueClientUx.exe\'").CommandLine'
  : "ps x -o args | grep 'LeagueClientUx'";
