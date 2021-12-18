import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface WindowState {
  isCloseModalVisible: boolean;
  isSettingsModalVisible: boolean;
  isNotificationCenterVisible: boolean;
}

const initialState: WindowState = {
  isCloseModalVisible: false,
  isSettingsModalVisible: false,
  isNotificationCenterVisible: false,
};

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleIsCloseModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalVisible = action.payload;
    },
    toggleIsSettingsModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSettingsModalVisible = action.payload;
    },
    toggleIsNotificationCenterVisible: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.isNotificationCenterVisible = action.payload;
    },
  },
});

export const {
  toggleIsCloseModalVisible,
  toggleIsSettingsModalVisible,
  toggleIsNotificationCenterVisible,
} = windowSlice.actions;

export const selectIsCloseModalVisible = (state: RootState) =>
  state.window.isCloseModalVisible;
export const selectIsSettingsModalVisible = (state: RootState) =>
  state.window.isSettingsModalVisible;
export const selectIsNotificationCenterVisible = (state: RootState) =>
  state.window.isNotificationCenterVisible;

export const selectIsModalOpen = (state: RootState) =>
  selectIsCloseModalVisible(state) || selectIsSettingsModalVisible(state);

export const windowReducer = windowSlice.reducer;
