import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SettingsState {
  playLoginMusic: boolean;
  playLoginAnimations: boolean;
}

const initialState: SettingsState = {
  playLoginAnimations: true,
  playLoginMusic: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    togglePlayLoginMusic: (state, action: PayloadAction<boolean>) => {
      state.playLoginMusic = action.payload;
    },
    togglePlayLoginAnimations: (state, action: PayloadAction<boolean>) => {
      state.playLoginAnimations = action.payload;
    },
  },
});

export const { togglePlayLoginMusic, togglePlayLoginAnimations } =
  settingsSlice.actions;

export const selectPlayLoginMusic = (state: RootState) =>
  state.settings.playLoginMusic;
export const selectPlayLoginAnimations = (state: RootState) =>
  state.settings.playLoginAnimations;

export const settingsReducer = settingsSlice.reducer;
