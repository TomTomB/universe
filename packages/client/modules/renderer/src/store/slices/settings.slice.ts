import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SettingsState {
  enableMusic: boolean;
  enableSfx: boolean;
  enableSound: boolean;

  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;

  playAmbientSounds: boolean;
  playBanQuotes: boolean;
  playChampionSelectMusic: boolean;
  playLobbyPostGameMusic: boolean;
  playLoginMusic: boolean;
  playPickQuotes: boolean;

  playLoginAnimations: boolean;
}

const initialState: SettingsState = {
  enableMusic: true,
  enableSfx: true,
  enableSound: true,

  masterVolume: 100,
  musicVolume: 100,
  sfxVolume: 100,

  playAmbientSounds: true,
  playBanQuotes: true,
  playChampionSelectMusic: true,
  playLobbyPostGameMusic: true,
  playLoginMusic: false,
  playPickQuotes: true,

  playLoginAnimations: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMasterVolume: (state, action: PayloadAction<number>) => {
      state.masterVolume = action.payload;
    },
    setMusicVolume: (state, action: PayloadAction<number>) => {
      state.musicVolume = action.payload;
    },
    setSfxVolume: (state, action: PayloadAction<number>) => {
      state.sfxVolume = action.payload;
    },

    toggleEnableMusic: (state, action: PayloadAction<boolean>) => {
      state.enableMusic = action.payload;
    },
    toggleEnableSfx: (state, action: PayloadAction<boolean>) => {
      state.enableSfx = action.payload;
    },
    toggleEnableSound: (state, action: PayloadAction<boolean>) => {
      state.enableSound = action.payload;
    },

    togglePlayAmbientSounds: (state, action: PayloadAction<boolean>) => {
      state.playAmbientSounds = action.payload;
    },
    togglePlayBanQuotes: (state, action: PayloadAction<boolean>) => {
      state.playBanQuotes = action.payload;
    },
    togglePlayChampionSelectMusic: (state, action: PayloadAction<boolean>) => {
      state.playChampionSelectMusic = action.payload;
    },
    togglePlayLobbyPostGameMusic: (state, action: PayloadAction<boolean>) => {
      state.playLobbyPostGameMusic = action.payload;
    },
    togglePlayLoginMusic: (state, action: PayloadAction<boolean>) => {
      state.playLoginMusic = action.payload;
    },
    togglePlayPickQuotes: (state, action: PayloadAction<boolean>) => {
      state.playPickQuotes = action.payload;
    },

    togglePlayLoginAnimations: (state, action: PayloadAction<boolean>) => {
      state.playLoginAnimations = action.payload;
    },
  },
});

export const {
  togglePlayLoginMusic,
  togglePlayLoginAnimations,
  setMasterVolume,
  setMusicVolume,
  setSfxVolume,
  toggleEnableMusic,
  toggleEnableSfx,
  toggleEnableSound,
  togglePlayAmbientSounds,
  togglePlayBanQuotes,
  togglePlayChampionSelectMusic,
  togglePlayLobbyPostGameMusic,
  togglePlayPickQuotes,
} = settingsSlice.actions;

export const selectEnableMusic = (state: RootState) =>
  state.settings.enableMusic;

export const selectEnableSfx = (state: RootState) => state.settings.enableSfx;

export const selectEnableSound = (state: RootState) =>
  state.settings.enableSound;

export const selectMasterVolume = (state: RootState) =>
  state.settings.masterVolume;

export const selectMusicVolume = (state: RootState) =>
  state.settings.musicVolume;

export const selectSfxVolume = (state: RootState) => state.settings.sfxVolume;

export const selectPlayAmbientSounds = (state: RootState) =>
  state.settings.playAmbientSounds;

export const selectPlayBanQuotes = (state: RootState) =>
  state.settings.playBanQuotes;

export const selectPlayChampionSelectMusic = (state: RootState) =>
  state.settings.playChampionSelectMusic;

export const selectPlayLobbyPostGameMusic = (state: RootState) =>
  state.settings.playLobbyPostGameMusic;

export const selectPlayLoginMusic = (state: RootState) =>
  state.settings.playLoginMusic;

export const selectPlayPickQuotes = (state: RootState) =>
  state.settings.playPickQuotes;

export const selectPlayLoginAnimations = (state: RootState) =>
  state.settings.playLoginAnimations;

export const settingsReducer = settingsSlice.reducer;
