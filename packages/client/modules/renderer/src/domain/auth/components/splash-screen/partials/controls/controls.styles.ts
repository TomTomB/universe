import { PrimaryReplayButton, CheckboxStyles } from '@/uikit/forms/components';
import styled from 'styled-components';
import lineVerticalFade from './assets/images/line-vertical-fade.png';

export const SplashScreenControlsContainer = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const ReplayButton = styled(PrimaryReplayButton)`
  margin-right: 1rem;
`;

export const StyledControls = styled.div`
  position: absolute;
  bottom: 28px;
  left: 32px;
  display: flex;
  align-items: center;
  pointer-events: all;
`;

export const LineVerticalFade = styled.div`
  background-image: url(${lineVerticalFade});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 1px;
  height: 56px;
  margin-right: 1.5rem;
`;

export const UniverseLogo = styled.h2`
  margin-right: 1.5rem;
  margin-bottom: 0;
  font-size: 25px;
`;

export const SplashCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${CheckboxStyles.CheckboxContainer}:first-of-type {
    margin-bottom: 5px;
  }
`;
