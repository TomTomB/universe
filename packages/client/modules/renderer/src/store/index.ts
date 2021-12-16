import create from 'zustand';
import { immer } from './core';

interface State {
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

export const useStore = create<State>(
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

export const getPlayLoginAnimations = (s: State) => s.playLoginAnimations;
export const setPlayLoginAnimations = (s: State) => s.setPlayLoginAnimations;

export const getPlayLoginMusic = (s: State) => s.playLoginMusic;
export const setPlayLoginMusic = (s: State) => s.setPlayLoginMusic;

export const getLCU = (s: State) => s.lcu;

export const getIsConnected = (s: State) => getLCU(s).isConnected;
export const setIsConnected = (s: State) => getLCU(s).setIsConnected;

export const getWindow = (s: State) => s.window;

export const getIsNotificationCenterVisible = (s: State) =>
  getWindow(s).isNotificationCenterVisible;
export const setIsNotificationCenterVisible = (s: State) =>
  getWindow(s).setIsNotificationCenterVisible;

export const getIsCloseModalVisible = (s: State) =>
  getWindow(s).isCloseModalVisible;
export const setIsCloseModalVisible = (s: State) =>
  getWindow(s).setIsCloseModalVisible;
