import * as C from './frame.styles';
import { PlayButtonState } from '../../play-button.types';
import { Videos } from './assets';
import { useCompare } from '@/uikit/core/hooks';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

export interface PlayButtonFrameProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
}

export const PlayButtonFrame: FC<PlayButtonFrameProps> = ({
  playPatcherIntro,
  buttonState,
}) => {
  const patcherFrameIntroAnim = useRef<HTMLVideoElement>(null);

  const [patcherFrameIntroEnded, setPatcherFrameIntroEnded] = useState(false);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (!patcherFrameIntroAnim.current) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        if (playPatcherIntro && buttonState.prev === PlayButtonState.HIDDEN) {
          patcherFrameIntroAnim.current.currentTime = 0;
          patcherFrameIntroAnim.current.play();
        }

        break;

      case PlayButtonState.PLAY:
        break;

      case PlayButtonState.LOBBY:
        break;

      case PlayButtonState.HIDDEN:
      default:
        setPatcherFrameIntroEnded(false);

        break;
    }
  }, [playPatcherIntro, buttonState, hasButtonStateChanged]);

  return (
    <>
      <C.Frame
        show={
          (patcherFrameIntroEnded || !playPatcherIntro) &&
          buttonState.curr !== PlayButtonState.HIDDEN
        }
      />
      <C.FrameAnimation
        show={playPatcherIntro && !patcherFrameIntroEnded}
        src={Videos.patcherFrameIntro}
        ref={patcherFrameIntroAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setPatcherFrameIntroEnded(true);
        }}
      />
    </>
  );
};
