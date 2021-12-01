import * as C from './patcher.styles';
import { PlayButtonState } from '../../play-button.types';
import { Videos } from './assets';
import { useCompare } from '@/uikit/core/hooks';
import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import type { DownloadProgress } from '@/types';

export interface PlayButtonPatcherProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
  downloadProgress?: DownloadProgress | null;
}

export const PlayButtonPatcher: FC<PlayButtonPatcherProps> = ({
  playPatcherIntro,
  buttonState,
  downloadProgress,
}) => {
  const patcherBorderLoopAnim = useRef<HTMLVideoElement>(null);
  const patcherFillLoopAnim = useRef<HTMLVideoElement>(null);
  const patcherTipIntroAnim = useRef<HTMLVideoElement>(null);
  const patcherTipLoopAnim = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  const currentDownloadPercentage = downloadProgress?.percent ?? 0;

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        break;

      case PlayButtonState.PLAY:
        break;

      case PlayButtonState.PLAY_DISABLED:
        break;

      case PlayButtonState.LOBBY:
        break;

      case PlayButtonState.LOBBY_DISABLED:
        break;

      case PlayButtonState.HIDDEN:
      default:
        break;
    }
  }, [hasButtonStateChanged, playPatcherIntro, buttonState]);

  return (
    <C.ProgressContainer
      show={!playPatcherIntro && buttonState.curr === PlayButtonState.PATCHER}
      showWithIntro={playPatcherIntro}
      delay={playPatcherIntro ? 500 : 0}
    >
      <C.ProgressBarContainer
        style={{
          width: `${120 * (currentDownloadPercentage / 100)}px`,
        }}
      >
        <C.ProgressBarMainLoopAnimation
          src={Videos.progressBarMainLoop}
          show={true}
          loop
          autoPlay
          muted
          ref={patcherFillLoopAnim}
        />
      </C.ProgressBarContainer>

      {/* TODO(TRB): Implement */}
      <C.ProgressBarTipLoopAnimation
        src={Videos.progressBarTipIntro}
        show={false}
        muted
        ref={patcherTipIntroAnim}
      />

      <C.ProgressBarTipLoopAnimation
        src={Videos.progressBarTipLoop}
        show={119 * (currentDownloadPercentage / 100) - 94 > -86}
        style={{
          left: `${119 * (currentDownloadPercentage / 100) - 94}px`,
        }}
        loop
        autoPlay
        muted
        ref={patcherTipLoopAnim}
      />

      <C.ProgressBarBorderAnimation
        src={Videos.progressBarBorderLoop}
        show={true}
        loop
        autoPlay
        muted
        ref={patcherBorderLoopAnim}
      />
    </C.ProgressContainer>
  );
};
