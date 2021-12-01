import { Images } from './assets';
import styled, { css, keyframes } from 'styled-components';

const spinAnimation = keyframes`
100% {
  transform: rotate(360deg);
}
`;

export const StyledLoadingSpinner = styled.div<{ isLarge?: boolean }>`
  background-image: url(${Images.spinner});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 4s linear infinite;

  ${({ isLarge }) =>
    isLarge &&
    css`
      background-image: url(${Images.spinnerLarge});
      width: 60px;
      height: 60px;
    `}
`;
