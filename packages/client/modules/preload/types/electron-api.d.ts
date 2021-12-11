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
    ws: {
      onMessage: (callback: (message: string) => void) => void;
      onOpen: (callback: () => void) => void;
      onClose: (callback: () => void) => void;
      onError: (callback: () => void) => void;
    };
    request: (args: {
      url: string;
      method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      body?: unknown;
    }) => Promise<{ data: unknown; status: number }>;
  };
}

declare interface Window {
  electron: Readonly<ElectronApi>;
}
