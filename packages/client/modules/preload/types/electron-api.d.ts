interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>;
  didLoad: () => void;
}

declare interface Window {
  electron: Readonly<ElectronApi>;
}
