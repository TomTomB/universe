import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type SettingsModalPage =
  | 'client:general'
  | 'client:notifications'
  | 'client:chat-and-friends'
  | 'client:sound'
  | 'client:voice'
  | 'client:block-list'
  | 'in-game:hotkeys'
  | 'in-game:sound'
  | 'in-game:interface'
  | 'in-game:game'
  | 'in-game:replays'
  | 'about:verfification'
  | 'about:privacy-notice'
  | 'about:terms-of-use'
  | 'about:third-party-licenses'
  | 'about:version';

interface WindowState {
  isCloseModalVisible: boolean;
  isSettingsModalVisible: boolean;
  isNotificationCenterVisible: boolean;

  activeSettingsModalPage: SettingsModalPage;
}

const initialState: WindowState = {
  isCloseModalVisible: false,
  isSettingsModalVisible: false,
  isNotificationCenterVisible: false,

  activeSettingsModalPage: 'client:general',
};

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleIsCloseModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalVisible = action.payload;
    },
    toggleIsSettingsModalVisible: (
      state,
      action: PayloadAction<{ visible: boolean; page?: SettingsModalPage }>,
    ) => {
      state.isSettingsModalVisible = action.payload.visible;

      if (action.payload.page) {
        state.activeSettingsModalPage = action.payload.page;
      }
    },
    toggleIsNotificationCenterVisible: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.isNotificationCenterVisible = action.payload;
    },
    setActiveSettingsModalPage: (
      state,
      action: PayloadAction<SettingsModalPage>,
    ) => {
      state.activeSettingsModalPage = action.payload;
    },
  },
});

export const {
  toggleIsCloseModalVisible,
  toggleIsSettingsModalVisible,
  toggleIsNotificationCenterVisible,
  setActiveSettingsModalPage,
} = windowSlice.actions;

export const selectIsCloseModalVisible = (state: RootState) =>
  state.window.isCloseModalVisible;
export const selectIsSettingsModalVisible = (state: RootState) =>
  state.window.isSettingsModalVisible;
export const selectIsNotificationCenterVisible = (state: RootState) =>
  state.window.isNotificationCenterVisible;
export const selectActiveSettingsModalPage = (state: RootState) =>
  state.window.activeSettingsModalPage;

export const selectIsModalOpen = (state: RootState) =>
  selectIsCloseModalVisible(state) || selectIsSettingsModalVisible(state);

export const windowReducer = windowSlice.reducer;
