import styled, { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const popInAnimation = keyframes`
  0% {
    transform: perspective(100px) translate3d(0, 0, 40px);
    -webkit-filter: brightness(1.5);
  }
  100% {
    transform: perspective(0px) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
  }
`;

export const smallPopInAnimation = keyframes`
  0% {
    transform: perspective(100px) translate3d(0, 0, 1.05px);
  }
  100% {
    transform: perspective(0px) translate3d(0, 0, 1px);
  }
`;

export const popFadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: perspective(100px) translate3d(0, 0, 40px);
    -webkit-filter: brightness(1.5);
  }
  100% {
    opacity: 1;
    transform: perspective(0px) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
  }

`;

export const StyledBackgroundSwitcher = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  img {
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;

    &.hidden {
      opacity: 0;
    }

    &.loading {
      display: none;
    }

    &.pop-in {
      animation: ${popInAnimation} 900ms;
    }

    &.small-pop {
      animation: ${smallPopInAnimation} 900ms;
    }

    &.fade {
      animation: ${fadeInAnimation} 900ms;
    }

    &.pop-in-fade {
      animation: ${popFadeInAnimation} 900ms;
    }
  }
`;
