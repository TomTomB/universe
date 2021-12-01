import { AnimationWithTransition } from '../../../../base';
import styled, { css, keyframes } from 'styled-components';

export interface ProgressContainerProps {
  show: boolean;
  showWithIntro: boolean;
  delay: number;
}

export const patcherShowAnimation = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const patcherShowWithTransitionAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scaleX(0);
  }
  50% {
    opacity: 0;
    transform: scaleX(0.5);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const patcherHideAnimation = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ProgressContainer = styled.div<ProgressContainerProps>`
  position: absolute;
  width: 160px;
  height: 60px;
  top: -8px;
  left: -20px;
  overflow: hidden;
  opacity: 0;
  transform-origin: left center;
  pointer-events: none;
  animation: 300ms forwards ${({ theme }) => theme.easing.soft};

  ${({ show }) =>
    show &&
    css`
      animation-name: ${patcherShowAnimation};
    `}

  ${({ showWithIntro }) =>
    showWithIntro &&
    css`
      animation-name: ${patcherShowWithTransitionAnimation};
      animation-duration: 500ms;
      animation-timing-function: ${({ theme }) => theme.easing.softStern};
    `}

  ${({ show, showWithIntro }) =>
    !show &&
    !showWithIntro &&
    css`
      opacity: 1;
      animation-name: ${patcherHideAnimation};
    `}

  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay}ms;
    `}
`;

export const ProgressBarContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 15px;
  height: 30px;
  left: 22px;
  transition: width 100ms ${({ theme }) => theme.easing.stern};
`;

export const ProgressBarBorderAnimation = styled(AnimationWithTransition)`
  top: -1px;
  min-width: 147px;
  max-width: 147px;
  width: 147px;
  height: 60px;
  left: 10px;
`;

export const ProgressBarMainLoopAnimation = styled(AnimationWithTransition)`
  top: -1px;
  left: 0;
  width: 119px;
  min-width: 119px;
  max-width: 119px;
`;

export const ProgressBarTipLoopAnimation = styled(AnimationWithTransition)`
  top: -1px;
  height: 60px;
  min-width: 147px;
  max-width: 147px;
  width: 147px;
  transition-duration: 100ms;
`;
