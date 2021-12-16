import type { WritableDraft } from 'immer/dist/internal';
import type { SettingsSlice } from './settings.types';

export type Set = (
  partial: State | ((draft: WritableDraft<State>) => void),
  replace?: boolean | undefined,
) => void;

export interface State {
  settings: SettingsSlice;

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
