import sliderBtn from './assets/images/slider-btn.png';
import styled from 'styled-components';

export const NativeSlider = styled.input`
  display: none;
`;

export const SliderBase = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: #1e2328;
  }
`;

export const Fill = styled.div`
  position: absolute;
  border: thin solid #010a13;
  transition: transform 25ms linear;
`;

export const Thumb = styled.div`
  cursor: grab;
  width: 30px;
  height: 30px;
  background: url(${sliderBtn}) no-repeat top left;
  background-size: 100%;
  position: absolute;
  z-index: 1;
`;

export const ThumbRail = styled.div`
  position: absolute;
  transition: transform 25ms linear;
  z-index: 1;
`;

export const StyledSlider = styled.div`
  display: flex;

  position: relative;
  overflow: hidden;
  outline: none;

  &[aria-orientation='horizontal'] {
    height: 30px;
    width: 100%;
    padding: 0 15px;
    align-items: center;
    ${SliderBase} {
      width: 100%;

      ::before {
        left: 0;
        width: 100%;
        height: 2px;
        background: #1e2328;
        top: 0;
      }
    }

    ${Fill} {
      background: linear-gradient(to left, #695625, #463714);
      left: 0;
      width: 100%;
      transform-origin: left center;
      transform: scaleX(var(--slider-value-scale));
      height: 4px;
      top: -1px;
    }

    ${ThumbRail} {
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      transform: translateX(calc(var(--thumb-translate) - 15px));
    }

    ${Thumb} {
      top: -14px;
    }
  }

  &[aria-orientation='vertical'] {
    height: 100%;
    width: 30px;
    padding: 15px 0;
    justify-content: center;
    ${SliderBase} {
      height: 100%;

      ::before {
        bottom: 0;
        width: 2px;
        height: 100%;
      }
    }

    ${Fill} {
      background: linear-gradient(to top, #695625, #463714);
      width: 4px;
      bottom: 0;
      left: -1px;
      height: 100%;
      transform-origin: center bottom;
      transform: scaleY(var(--slider-value-scale));
    }

    ${ThumbRail} {
      bottom: 0;
      left: 0;
      height: 100%;
      width: 0;
      transform: translateY(calc(var(--thumb-translate) + 15px));
    }

    ${Thumb} {
      transform: rotate(90deg);
      left: -14px;
      bottom: 0;
    }
  }

  &:hover,
  &:focus-visible {
    ${Fill} {
      background: linear-gradient(
        to right,
        #785a28 0%,
        #c89b3c 56%,
        #c8aa6e 100%
      );
    }

    ${Thumb} {
      background-position: 0 -30px;
    }
  }

  &:active {
    cursor: grabbing;

    ${Fill} {
      background: linear-gradient(to right, #695625, #463714);
    }

    ${Thumb} {
      background-position: 0 -60px;
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    ${Fill} {
      background: rgba(1, 10, 19, 0.15);
    }

    ${Thumb} {
      background-position: 0 -90px;
    }
  }
`;
