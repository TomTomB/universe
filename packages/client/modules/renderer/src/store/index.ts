import create from 'zustand';
import { immer } from './core';

interface StoreState {
  playLoginAnimations: boolean;
  playLoginMusic: boolean;
  setPlayLoginAnimations: (play: boolean) => void;
  setPlayLoginMusic: (play: boolean) => void;
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
  })),
);
