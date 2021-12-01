import * as C from './play-button.styles';
import {
  PlayButtonFrame,
  PlayButtonLobby,
  PlayButtonLogo,
  PlayButtonPatcher,
  PlayButtonPlay,
} from './partials';
import { PlayButtonState } from './play-button.types';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { PlayButtonProps } from './play-button.types';

export const PlayButton: FC<PropsWithChildren<PlayButtonProps>> = ({
  type,
  children,
  className,
  disabled,
  onClick,
  buttonState,
  prevButtonState,
  downloadProgress,
}) => {
  const btnIsDisabled =
    disabled ||
    buttonState === PlayButtonState.PATCHER ||
    buttonState === PlayButtonState.HIDDEN ||
    buttonState === PlayButtonState.PLAY_DISABLED ||
    buttonState === PlayButtonState.LOBBY_DISABLED;

  const playPatcherIntro =
    buttonState === PlayButtonState.PATCHER &&
    prevButtonState === PlayButtonState.HIDDEN;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <C.StyledPlayButton
      className={className}
      show={buttonState !== PlayButtonState.HIDDEN}
    >
      <PlayButtonFrame
        playPatcherIntro={playPatcherIntro}
        buttonState={{ prev: prevButtonState, curr: buttonState }}
      />
      <C.PlayButtonContainer>
        <C.LeagueLogoContainer>
          <PlayButtonLogo
            playPatcherIntro={playPatcherIntro}
            buttonState={{ prev: prevButtonState, curr: buttonState }}
          />
        </C.LeagueLogoContainer>
        <C.ButtonContainer
          onClick={onClick}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          disabled={btnIsDisabled}
          type={type}
        >
          <PlayButtonPlay
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            disabled={btnIsDisabled}
            isHovering={isHovering}
          />

          <PlayButtonLobby
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            disabled={btnIsDisabled}
            isHovering={isHovering}
          />

          <PlayButtonPatcher
            playPatcherIntro={playPatcherIntro}
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            downloadProgress={downloadProgress}
          />

          <C.ContentContainer>
            <C.ButtonText
              intro={playPatcherIntro}
              patching={buttonState === PlayButtonState.PATCHER}
              reserveSpace={
                buttonState === PlayButtonState.PLAY ||
                buttonState === PlayButtonState.PLAY_DISABLED
              }
            >
              {children}
            </C.ButtonText>
          </C.ContentContainer>
        </C.ButtonContainer>
      </C.PlayButtonContainer>
    </C.StyledPlayButton>
  );
};
