import { Images } from './assets';
import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: relative;
  background-color: #000;
  background-image: url(${Images.backdropMagic});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
