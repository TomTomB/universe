import { Animation, AnimationWithTransition } from '../../../../base';
import styled, { css } from 'styled-components';

export interface LobbyContainerProps {
  show: boolean;
  instant: boolean;
}

export const LobbyContainer = styled.div<LobbyContainerProps>`
  position: absolute;
  width: 160px;
  height: 60px;
  top: -8px;
  left: -24px;
  overflow: hidden;
  opacity: 0;
  transform-origin: left center;
  pointer-events: none;
  transition: opacity 300ms ${({ theme }) => theme.easing.soft};

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}

  ${({ instant }) =>
    instant &&
    css`
      transition: none;
    `}
`;

export const LobbyAnimation = styled(AnimationWithTransition)`
  min-width: 145px;
  max-width: 145px;
  width: 145px;
  height: 60px;
  left: 8px;
`;

export const LobbyAnimationWithoutTransition = styled(Animation)`
  min-width: 145px;
  max-width: 145px;
  width: 145px;
  height: 60px;
  left: 8px;
`;
