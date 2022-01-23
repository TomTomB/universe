import * as C from './play-button.styles';
import {
  PlayButtonFrame,
  PlayButtonLobby,
  PlayButtonLogo,
  PlayButtonPatcher,
  PlayButtonPlay,
} from './partials';
import { PlayButtonState } from './play-button.types';
import { type FC, useState } from 'react';
import type { PlayButtonProps } from './play-button.types';
import { useAudio } from '@/uikit/core/hooks';
import lobbyClickAudioFile from './assets/sounds/sfx-nav-button-lobby-click.ogg';
import lobbyHoverAudioFile from './assets/sounds/sfx-nav-button-lobby-hover.ogg';
import playClickAudioFile from './assets/sounds/sfx-nav-button-play-click.ogg';
import playHoverAudioFile from './assets/sounds/sfx-nav-button-play-hover.ogg';

export const PlayButton: FC<PlayButtonProps> = ({
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

  const lobbyClickAudio = useAudio(lobbyClickAudioFile, 'sfx');
  const lobbyHoverAudio = useAudio(lobbyHoverAudioFile, 'sfx');

  const playClickAudio = useAudio(playClickAudioFile, 'sfx');
  const playHoverAudio = useAudio(playHoverAudioFile, 'sfx');

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
          onClick={(e) => {
            onClick?.(e);
            lobbyClickAudio.active.onClick();
            playClickAudio.active.onClick();
          }}
          onMouseEnter={() => {
            setIsHovering(true);
            lobbyHoverAudio.hover.onMouseEnter();
            playHoverAudio.hover.onMouseEnter();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onFocus={() => {
            lobbyHoverAudio.hover.onMouseEnter();
            playHoverAudio.hover.onMouseEnter();
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
