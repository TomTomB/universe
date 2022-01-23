import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface LCUState {
  isLCUConnected: boolean;
}

const initialState: LCUState = {
  isLCUConnected: false,
};

export const lcuSlice = createSlice({
  name: 'lcu',
  initialState,
  reducers: {
    toggleIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isLCUConnected = action.payload;
    },
  },
});

export const { toggleIsConnected } = lcuSlice.actions;

export const selectIsLCUConnected = (state: RootState) =>
  state.lcu.isLCUConnected;

export const lcuReducer = lcuSlice.reducer;
