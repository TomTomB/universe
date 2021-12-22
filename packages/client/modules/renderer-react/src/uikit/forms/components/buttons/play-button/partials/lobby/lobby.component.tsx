import * as C from './lobby.styles';
import { PlayButtonState } from '../../play-button.types';
import { Videos } from './assets';
import { useCompare } from '@/uikit/core/hooks';
import { useEffect, useRef } from 'react';
import type { FC } from 'react';

export interface PlayButtonLobbyProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  disabled: boolean;
  isHovering: boolean;
}

export const PlayButtonLobby: FC<PlayButtonLobbyProps> = ({
  buttonState,
  disabled,
  isHovering,
}) => {
  const lobbyHoverIntroElem = useRef<HTMLVideoElement>(null);
  const lobbyHoverLoopElem = useRef<HTMLVideoElement>(null);
  const lobbyHoverOutroElem = useRef<HTMLVideoElement>(null);
  const lobbyIntroElem = useRef<HTMLVideoElement>(null);
  const lobbyMagicReleaseElem = useRef<HTMLVideoElement>(null);
  const lobbyReleaseElem = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (
      !lobbyIntroElem.current ||
      !lobbyMagicReleaseElem.current ||
      !lobbyReleaseElem.current
    ) {
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
        if (buttonState.prev === PlayButtonState.LOBBY_DISABLED) {
          lobbyIntroElem.current.currentTime = 0;
          lobbyIntroElem.current.play();
        }
        break;

      case PlayButtonState.LOBBY_DISABLED:
        if (buttonState.prev === PlayButtonState.LOBBY) {
          lobbyMagicReleaseElem.current.currentTime = 0;
          lobbyMagicReleaseElem.current.play();

          lobbyReleaseElem.current.currentTime = 0;
          lobbyReleaseElem.current.play();
        }
        break;

      case PlayButtonState.HIDDEN:
      default:
        break;
    }
  }, [hasButtonStateChanged, buttonState, disabled]);

  useEffect(() => {
    if (!lobbyHoverIntroElem.current) {
      return;
    }

    if (isHovering) {
      lobbyHoverIntroElem.current.currentTime = 0;
      lobbyHoverIntroElem.current.play();
    }
  }, [isHovering]);

  return (
    <C.LobbyContainer
      show={
        buttonState.curr === PlayButtonState.LOBBY ||
        buttonState.curr === PlayButtonState.LOBBY_DISABLED
      }
      instant={
        buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
        buttonState.prev === PlayButtonState.PLAY_DISABLED
      }
    >
      <C.LobbyAnimationWithoutTransition
        muted
        show={
          buttonState.prev === PlayButtonState.LOBBY_DISABLED &&
          buttonState.curr === PlayButtonState.LOBBY
        }
        src={Videos.lobbyIntro}
        ref={lobbyIntroElem}
      />

      <C.LobbyAnimation
        muted
        show={isHovering}
        src={Videos.lobbyHoverIntro}
        ref={lobbyHoverIntroElem}
      />

      <C.LobbyAnimation
        show={isHovering}
        src={Videos.lobbyHoverLoop}
        autoPlay
        muted
        loop
        ref={lobbyHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <C.LobbyAnimation
        muted
        show={false}
        src={Videos.lobbyHoverOutro}
        ref={lobbyHoverOutroElem}
      />

      <C.LobbyAnimationWithoutTransition
        show={
          buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
          (buttonState.prev === PlayButtonState.LOBBY ||
            buttonState.prev === PlayButtonState.PLAY_DISABLED)
        }
        autoPlay
        muted
        src={Videos.lobbyRelease}
        ref={lobbyReleaseElem}
      />

      <C.LobbyAnimationWithoutTransition
        show={
          buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
          (buttonState.prev === PlayButtonState.LOBBY ||
            buttonState.prev === PlayButtonState.PLAY_DISABLED)
        }
        autoPlay
        muted
        src={Videos.lobbyMagicRelease}
        ref={lobbyMagicReleaseElem}
      />
    </C.LobbyContainer>
  );
};
