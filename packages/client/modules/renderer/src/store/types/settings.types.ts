export interface SettingsSlice {
  audio: {
    playLoginMusic: boolean;
    setPlayLoginMusic: (play: boolean) => void;
  };
  playLoginAnimations: boolean;
  setPlayLoginAnimations: (play: boolean) => void;
}
