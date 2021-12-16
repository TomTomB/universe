import type { Set, SettingsSlice, State } from './types';

export const createSettingsSlice = (set: Set): SettingsSlice => ({
  audio: {
    playLoginMusic: false,
    setPlayLoginMusic: (play) =>
      set((state) => {
        state.settings.audio.playLoginMusic = play;
      }),
  },
  playLoginAnimations: false,
  setPlayLoginAnimations: (play) =>
    set((state) => {
      state.settings.playLoginAnimations = play;
    }),
});

export const getSettings = (s: State) => s.settings;
export const getAudio = (s: State) => getSettings(s).audio;

export const selectPlayLoginAnimations = (s: State) =>
  getSettings(s).playLoginAnimations;
export const dispatchPlayLoginAnimations = (s: State) =>
  getSettings(s).setPlayLoginAnimations;

export const getPlayLoginMusic = (s: State) => getAudio(s).playLoginMusic;
export const setPlayLoginMusic = (s: State) => getAudio(s).setPlayLoginMusic;
