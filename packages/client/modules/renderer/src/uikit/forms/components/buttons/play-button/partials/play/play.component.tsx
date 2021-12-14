import * as C from './play.styles';
import { PlayButtonState } from '../../play-button.types';
import { Videos } from './assets';
import { useCompare } from '@/uikit/core/hooks';
import { useEffect, useRef, useState, type FC } from 'react';

export interface PlayButtonPlayProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  disabled: boolean;
  isHovering: boolean;
}

export const PlayButtonPlay: FC<PlayButtonPlayProps> = ({
  buttonState,
  disabled,
  isHovering,
}) => {
  const patcherToPlayElem = useRef<HTMLVideoElement>(null);
  const lobbyToPlayElem = useRef<HTMLVideoElement>(null);

  const playEnabledIntroElem = useRef<HTMLVideoElement>(null);
  const playHoverIntroElem = useRef<HTMLVideoElement>(null);
  const playHoverLoopElem = useRef<HTMLVideoElement>(null);
  const playHoverOutroElem = useRef<HTMLVideoElement>(null);
  const playReleaseElem = useRef<HTMLVideoElement>(null);
  const playReleaseMagicElem = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  const [showPatcherToPlay, setShowPatcherToPlay] = useState(false);
  const [showLobbyToPlay, setShowLobbyToPlay] = useState(false);
  const [transitionToPlayEnded, setTransitionToPlayEnded] = useState(false);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (
      !patcherToPlayElem.current ||
      !playEnabledIntroElem.current ||
      !lobbyToPlayElem.current ||
      !playReleaseElem.current ||
      !playReleaseMagicElem.current
    ) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        setTransitionToPlayEnded(false);
        setShowPatcherToPlay(false);
        break;

      case PlayButtonState.PLAY:
        if (buttonState.prev === PlayButtonState.PATCHER && !disabled) {
          setShowPatcherToPlay(true);
          patcherToPlayElem.current.currentTime = 0;
          patcherToPlayElem.current.play();
        } else if (buttonState.prev === PlayButtonState.PLAY_DISABLED) {
          playEnabledIntroElem.current.currentTime = 0;
          playEnabledIntroElem.current.play();
        } else if (
          buttonState.prev === PlayButtonState.LOBBY_DISABLED ||
          buttonState.prev === PlayButtonState.LOBBY
        ) {
          setShowLobbyToPlay(true);
          lobbyToPlayElem.current.currentTime = 0;
          lobbyToPlayElem.current.play();
        }

        break;

      case PlayButtonState.PLAY_DISABLED:
        if (buttonState.prev === PlayButtonState.PLAY) {
          playReleaseElem.current.currentTime = 0;
          playReleaseElem.current.play();
          playReleaseMagicElem.current.currentTime = 0;
          playReleaseMagicElem.current.play();
        }

        break;

      case PlayButtonState.LOBBY:
        break;

      case PlayButtonState.LOBBY_DISABLED:
        break;

      case PlayButtonState.HIDDEN:
      default:
        setTransitionToPlayEnded(false);
        setShowPatcherToPlay(false);
        break;
    }
  }, [hasButtonStateChanged, buttonState, disabled]);

  useEffect(() => {
    if (!playHoverIntroElem.current) {
      return;
    }

    if (isHovering) {
      playHoverIntroElem.current.currentTime = 0;
      playHoverIntroElem.current.play();
    }
  }, [isHovering]);

  return (
    <C.PlayContainer
      show={
        buttonState.curr === PlayButtonState.PLAY ||
        buttonState.curr === PlayButtonState.PLAY_DISABLED
      }
      instant={
        buttonState.curr === PlayButtonState.PLAY_DISABLED &&
        buttonState.prev === PlayButtonState.LOBBY_DISABLED
      }
    >
      <C.PatcherToPlayAnimation
        show={showPatcherToPlay}
        src={Videos.patcherToPlay}
        ref={patcherToPlayElem}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setTransitionToPlayEnded(true);
          setShowPatcherToPlay(false);
        }}
      />

      <C.PlayAnimation
        show={showLobbyToPlay}
        src={Videos.lobbyToPlay}
        ref={lobbyToPlayElem}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setTransitionToPlayEnded(true);
          setShowLobbyToPlay(false);
        }}
      />

      <C.PlayAnimation
        show={
          (transitionToPlayEnded ||
            buttonState.prev !== PlayButtonState.PATCHER) &&
          buttonState.curr !== PlayButtonState.PLAY_DISABLED &&
          !showLobbyToPlay
        }
        muted
        src={Videos.playButtonEnabledIntro}
        ref={playEnabledIntroElem}
        autoPlay
      />

      <C.PlayAnimation
        show={isHovering}
        src={Videos.playButtonHoverIntro}
        ref={playHoverIntroElem}
        muted
      />

      <C.PlayAnimation
        show={isHovering}
        src={Videos.playButtonHoverLoop}
        autoPlay
        loop
        muted
        ref={playHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <C.PlayAnimation
        show={false}
        src={Videos.playButtonHoverOutro}
        ref={playHoverOutroElem}
        muted
      />

      <C.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={Videos.playButtonRelease}
        ref={playReleaseElem}
        muted
      />

      <C.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={Videos.playButtonMagicRelease}
        ref={playReleaseMagicElem}
        muted
      />
    </C.PlayContainer>
  );
};
