import { Animation } from '../../../../base';
import { Images } from './assets';
import styled, { css } from 'styled-components';

export const Frame = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Images.playButtonFrameImage});
  transition: 400ms background ease;
  opacity: 0;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export const FrameAnimation = styled(Animation)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
