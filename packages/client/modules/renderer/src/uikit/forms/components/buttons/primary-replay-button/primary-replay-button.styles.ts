import buttonReplay from './assets/images/button-replay.png';
import buttonReplayActive from './assets/images/button-replay-active.png';
import buttonReplayHover from './assets/images/button-replay-hover.png';
import styled from 'styled-components';

export const ButtonStateBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 300ms cubic-bezier(0, 0, 0, 1);
`;

export const ButtonStateDefault = styled(ButtonStateBase)`
  background-image: url(${buttonReplay});
`;

export const ButtonStateHover = styled(ButtonStateBase)`
  background-image: url(${buttonReplayHover});
`;

export const ButtonStateActive = styled(ButtonStateBase)`
  background-image: url(${buttonReplayActive});
`;

export const StyledPrimaryReplayButton = styled.button`
  width: 49px;
  height: 49px;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  transition: opacity 300ms cubic-bezier(0, 0, 0, 1);

  ${ButtonStateDefault} {
    opacity: 1;
  }

  &:hover,
  &:focus-visible {
    ${ButtonStateHover} {
      opacity: 1;
    }
  }

  &:active {
    ${ButtonStateActive} {
      opacity: 1;
    }
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  }
`;
