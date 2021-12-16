import create from 'zustand';
import { immer } from './core';

interface StoreState {
  playLoginAnimations: boolean;
  playLoginMusic: boolean;
  setPlayLoginAnimations: (play: boolean) => void;
  setPlayLoginMusic: (play: boolean) => void;

  lcu: {
    isConnected: boolean;
    setIsConnected: (play: boolean) => void;
  };

  window: {
    isCloseModalVisible: boolean;
    setIsCloseModalVisible: (visible: boolean) => void;

    isNotificationCenterVisible: boolean;
    setIsNotificationCenterVisible: (visible: boolean) => void;
  };
}

export const useStore = create<StoreState>(
  immer((set) => ({
    playLoginAnimations: true,
    playLoginMusic: false,
    setPlayLoginAnimations: (play) =>
      set((state) => {
        state.playLoginAnimations = play;
      }),
    setPlayLoginMusic: (play) =>
      set((state) => {
        state.playLoginMusic = play;
      }),

    lcu: {
      isConnected: false,
      setIsConnected: (isConnected) =>
        set((state) => {
          state.lcu.isConnected = isConnected;
        }),
    },

    window: {
      isCloseModalVisible: false,
      setIsCloseModalVisible: (visible) =>
        set((state) => {
          state.window.isCloseModalVisible = visible;
        }),

      isNotificationCenterVisible: false,
      setIsNotificationCenterVisible: (visible) =>
        set((state) => {
          state.window.isNotificationCenterVisible = visible;
        }),
    },
  })),
);
