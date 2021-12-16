import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface WindowState {
  isCloseModalVisible: boolean;
  isNotificationCenterVisible: boolean;
}

const initialState: WindowState = {
  isCloseModalVisible: false,
  isNotificationCenterVisible: false,
};

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleIsCloseModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalVisible = action.payload;
    },
    toggleIsNotificationCenterVisible: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.isNotificationCenterVisible = action.payload;
    },
  },
});

export const { toggleIsCloseModalVisible, toggleIsNotificationCenterVisible } =
  windowSlice.actions;

export const selectIsCloseModalVisible = (state: RootState) =>
  state.window.isCloseModalVisible;
export const selectIsNotificationCenterVisible = (state: RootState) =>
  state.window.isNotificationCenterVisible;

export const windowReducer = windowSlice.reducer;
