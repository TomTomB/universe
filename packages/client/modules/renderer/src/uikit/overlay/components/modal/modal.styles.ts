import { ButtonGroup, CloseButton } from '@/uikit/forms/components';
import { Images } from './assets';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

export const ModalContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const ToastCloseButton = styled.button<{ withBackground?: boolean }>`
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  background: url(${Images.closeIcon}), rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 4px;
  background-size: 75% 75%, 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  border: 0;
  appearance: none;
  padding: 0;

  &:hover {
    background: url(${Images.closeIcon}), rgba(10, 20, 40, 0.5);
    background-size: 75% 75%, 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  ${({ withBackground }) =>
    withBackground &&
    css`
      background-color: #0a1428;
      background-size: 18px 18px;
      background-position: center;
      border-radius: 2px;
      opacity: 0.8;
      transition: opacity 0.05s ease-in-out;

      &:hover {
        opacity: 1;
      }
    `}
`;

export const ModalTopCloseContainer = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 38px;
    height: 68px;
    top: -22px;
    right: -22px;
    background-image: url(${Images.frameButtonCloseTopDown});
    background-size: 38px 68px;
  }
`;

export const ModalTopCloseButton = styled(CloseButton)`
  position: absolute;
  top: -17px;
  right: -17px;
  width: 28px;
  height: 28px;

  > div {
    width: 24px;
    height: 24px;
  }
`;

export const StyledModalSubBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ::before,
  ::after {
    content: '';
    position: absolute;
    display: flex;
    border-image-repeat: stretch;
    border-style: solid;
  }
`;

export const StyledModal = styled(animated.div)`
  --frameColors: #614a1f 0, #463714 5px, #463714 100%;

  border: 2px solid transparent;
  position: relative;
  background: #010a13;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
  max-width: 800px;

  will-change: transform, opacity;

  &.withButtons {
    padding-bottom: 35px;
  }

  &.borderless ${StyledModalSubBorder} {
    display: none;
  }

  &.caret {
    &::after {
      content: '';
      position: absolute;
      background: url(${Images.caret}) 50% no-repeat;
    }

    &.top::after {
      height: 18px;
      width: 100%;
      top: -16px;
      transform: rotate(180deg);
    }

    &.bottom::after {
      height: 18px;
      width: 100%;
      bottom: -17px;
    }

    &.left::after {
      height: 100%;
      width: 32px;
      top: 0;
      left: -23px;
      transform: rotate(90deg);
    }

    &.right::after {
      height: 100%;
      width: 32px;
      top: 0;
      right: -23px;
      transform: rotate(-90deg);
    }
  }

  &.top,
  &.bottom {
    ${StyledModalSubBorder} {
      ::before,
      ::after {
        left: 12px;
        width: calc(100% - 24px);
        height: 0;
        border-width: 4px 4px 0 4px;
        border-image-width: 4px 4px 0 4px;
        border-image-slice: 4 4 0 4;
      }

      ::before {
        top: -6px;
        border-image-source: url(${Images.subBorderSecondaryHorizontal});
      }

      ::after {
        bottom: -6px;
        border-image-source: url(${Images.subBorderPrimaryHorizontal});
      }
    }
  }

  &.left,
  &.right {
    ${StyledModalSubBorder} {
      ::before,
      ::after {
        top: 12px;
        height: calc(100% - 24px);
        width: 0;
        border-width: 4px 4px 4px 0;
        border-image-width: 4px 4px 4px 0;
        border-image-slice: 4 4 4 0;
      }

      ::before {
        left: -6px;
        border-image-source: url(${Images.subBorderPrimaryVertical});
      }

      ::after {
        right: -6px;
        border-image-source: url(${Images.subBorderSecondaryVertical});
      }
    }
  }

  &.left {
    border-image: linear-gradient(to right, var(--frameColors) 100%) 1 stretch;
  }

  &.right {
    border-image: linear-gradient(to left, var(--frameColors) 100%) 1 stretch;

    ${StyledModalSubBorder} {
      ::before,
      ::after {
        transform: rotate(180deg);
      }

      ::before {
        border-image-source: url(${Images.subBorderSecondaryVertical});
      }

      ::after {
        border-image-source: url(${Images.subBorderPrimaryVertical});
      }
    }
  }

  &.top {
    border-image: linear-gradient(to bottom, var(--frameColors) 100%) 1 stretch;

    ${StyledModalSubBorder} {
      ::before,
      ::after {
        transform: rotate(180deg);
      }

      ::before {
        border-image-source: url(${Images.subBorderPrimaryHorizontal});
      }

      ::after {
        border-image-source: url(${Images.subBorderSecondaryHorizontal});
      }
    }
  }

  &.bottom {
    border-image: linear-gradient(to top, var(--frameColors) 100%) 1 stretch;
  }

  &.disabled {
    --frameColors: #39393e 0, #1e282d 5px, #1e282d 100%;

    &.top {
      ${StyledModalSubBorder} {
        ::before {
          border-image-source: url(${Images.subBorderPrimaryHorizontalDisabled});
        }

        ::after {
          border-image-source: url(${Images.subBorderSecondaryHorizontalDisabled});
        }
      }
    }

    &.bottom {
      ${StyledModalSubBorder} {
        ::before {
          border-image-source: url(${Images.subBorderSecondaryHorizontalDisabled});
        }

        ::after {
          border-image-source: url(${Images.subBorderPrimaryHorizontalDisabled});
        }
      }
    }

    &.right {
      ${StyledModalSubBorder} {
        ::before {
          border-image-source: url(${Images.subBorderSecondaryVerticalDisabled});
        }

        ::after {
          border-image-source: url(${Images.subBorderPrimaryVerticalDisabled});
        }
      }
    }

    &.left {
      ${StyledModalSubBorder} {
        ::before {
          border-image-source: url(${Images.subBorderPrimaryVerticalDisabled});
        }

        ::after {
          border-image-source: url(${Images.subBorderSecondaryVerticalDisabled});
        }
      }
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;

export const ModalButtonGroup = styled(ButtonGroup)`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);

  .top & {
    --border-color: #463714;
  }

  .bottom & {
    --border-color: #614a1f;
  }

  .disabled.top & {
    --border-color: #1e282d;
  }

  .disabled.bottom & {
    --border-color: #39393e;
  }
`;
