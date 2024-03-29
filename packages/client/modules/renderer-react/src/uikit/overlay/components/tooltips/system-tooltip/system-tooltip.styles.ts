import { Images } from './assets';
import { animated } from 'react-spring';
import styled from 'styled-components';

export const StyledSystemTooltip = styled(animated.div)`
  --frameColors: #614a1f 0, #463714 5px, #463714 100%;

  box-sizing: border-box;
  flex: 1;
  background-color: ${(props) => props.theme.colors.black};
  border-width: 2px;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
  min-width: 41px;
  border: 2px solid transparent;
  z-index: 100;
  pointer-events: none;
  will-change: opacity;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    top: 6px;
    left: 6px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .tooltip-arrow {
    width: 16px;
    height: 11px;

    &::after {
      content: '';
      position: absolute;
      background: url(${Images.tooltipSystemCaret}) center no-repeat;
      width: 16px;
      height: 11px;
    }
  }

  &[data-popper-placement='top'] {
    border-image: linear-gradient(to top, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      bottom: 0;
      ::after {
        bottom: -11px;
        left: 0;
      }
    }
  }

  &[data-popper-placement='bottom'] {
    border-image: linear-gradient(to bottom, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      top: 0;
      ::after {
        transform: rotate(180deg);
        top: -11px;
        left: 0;
      }
    }
  }

  &[data-popper-placement='left'] {
    border-image: linear-gradient(to left, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      right: 0;

      ::after {
        transform: rotate(-90deg);
        right: -14px;
      }
    }
  }

  &[data-popper-placement='right'] {
    border-image: linear-gradient(to right, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      left: 0;

      ::after {
        transform: rotate(90deg);
        left: -14px;
      }
    }
  }
`;
