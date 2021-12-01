import { Images } from './assets';
import styled from 'styled-components';

export const StyledInfoIcon = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background-image: url(${Images.infoIcon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
