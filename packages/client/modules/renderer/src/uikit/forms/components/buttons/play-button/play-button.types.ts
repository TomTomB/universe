import type { DownloadProgress } from '@/types';
import type { ButtonProps } from '../button.types';

export enum PlayButtonState {
  /**
   * Allowed transitions: PATCHER / PLAY
   */
  HIDDEN,

  /**
   * Allowed transitions: PLAY / HIDDEN
   */
  PATCHER,

  /**
   * Allowed transitions: PLAY_DISABLED / PATCHER / HIDDEN
   */
  PLAY,

  /**
   * Allowed transitions: PLAY / LOBBY_DISABLED / PATCHER / HIDDEN
   */
  // FIXME(TRB): Transition to PATCHER and HIDDEN shows a blue frame
  PLAY_DISABLED,

  /**
   * Allowed transitions: LOBBY / PLAY / PATCHER / HIDDEN
   */
  LOBBY_DISABLED,

  /**
   * Allowed transitions: LOBBY_DISABLED / PLAY / PATCHER / HIDDEN
   */
  LOBBY,
}

export interface PlayButtonProps extends ButtonProps {
  downloadProgress?: DownloadProgress | null;
  buttonState: PlayButtonState;
  prevButtonState: PlayButtonState;
  playSounds?: boolean;
}

export interface ButtonTextProps {
  intro: boolean;
  reserveSpace: boolean;
  patching: boolean;
}
