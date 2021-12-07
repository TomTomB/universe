import styled, { css, keyframes } from 'styled-components';

export const dashStrokeAnimation = keyframes`
  to {
    stroke-dashoffset: -100;
  }
`;

export const dashStrokeOffsetAnimation = keyframes`
  to {
    stroke-dashoffset: -150;
  }
`;

export const Container = styled.div`
  width: calc(100% + 16px) !important;
  height: calc(100% + 16px) !important;
  left: -8px;
  top: -8px;
  position: absolute;
  cursor: default;
  pointer-events: none;

  #scalable-path {
    transform: translate(8px, 8px);
  }

  #animated-magic-container {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 300ms linear;
  }

  #animated-magic-low {
    filter: blur(2px) contrast(1.15);
    opacity: 0.75;
  }

  #animated-magic-high {
    filter: blur(4px) contrast(1.35) brightness(1.5);
    opacity: 0.85;
  }

  .svg-container {
    position: absolute;
    left: 0;
    top: 0;
  }

  .dashed-border {
    stroke: #fff;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 0ms;
    stroke-dasharray: 50;
    animation-name: ${dashStrokeAnimation};
    &.offset {
      stroke-dashoffset: -50;
      animation-name: ${dashStrokeOffsetAnimation};
    }
  }
`;

export const AnimatedArrowOverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const AnimatedArrowOverlayStateIntro = css`
  ${Container} {
    .dashed-border {
      animation-duration: 750ms;
    }

    #animated-magic-container {
      opacity: 1;
    }
  }
`;

export const AnimatedArrowOverlayStateHoverFocus = css`
  ${Container} {
    .dashed-border {
      animation-duration: 1500ms;
    }

    #animated-magic-container {
      opacity: 1;
    }
  }
`;

export const AnimatedArrowOverlayStateActive = css`
  ${Container} {
    .dashed-border {
      animation-duration: 750ms;
    }

    #animated-magic-container {
      opacity: 1;
    }
  }
`;
