interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>;
  window: {
    didLoad: () => void;
    minimize: () => void;
    close: () => void;
    setPosition: (args: { x: number; y: number }) => void;
    getPosition: () => Promise<{ x: number; y: number }>;
  };
}

declare interface Window {
  electron: Readonly<ElectronApi>;
}
