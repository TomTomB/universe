/* eslint-disable @typescript-eslint/no-explicit-any */

interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>;
  window: {
    didLoad: () => void;
    minimize: () => void;
    close: () => void;
    setPosition: (args: { x: number; y: number }) => void;
    getPosition: () => Promise<{ x: number; y: number }>;
  };
  lcu: {
    onConnect: (callback: (credentials: any) => void) => void;
    onDisconnect: (callback: () => void) => void;
  };
}

declare interface Window {
  electron: Readonly<ElectronApi>;
}
