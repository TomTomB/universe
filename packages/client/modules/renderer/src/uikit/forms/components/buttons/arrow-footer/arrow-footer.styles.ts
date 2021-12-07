import { AnimatedArrowOverlayStyles } from '@/uikit/common/components';
import styled, { css } from 'styled-components';
import { Images } from './assets';

export const StyledArrowFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 43px;
  box-sizing: border-box;
`;

export const Decoration = styled.div`
  display: flex;
  position: relative;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`;

export const DecorationChild = styled.div`
  background-size: 100% 100%;
  width: 256px;
  height: 8px;
`;

export const DecorationChildLeft = styled(DecorationChild)`
  margin-right: 50px;
  align-self: flex-end;
  background-image: url(${Images.footerMetalDecorationLeft});
`;

export const DecorationChildRight = styled(DecorationChild)`
  margin-left: 50px;
  align-self: flex-start;
  background-image: url(${Images.footerMetalDecorationRight});
`;

export const ConfirmButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BorderBg = styled.div`
  position: absolute;
  width: 100%;
  height: 44px;
  display: flex;
`;

export const BorderLeftBg = styled.div<{ closeHidden?: boolean }>`
  height: 44px;
  width: 29px;
  position: absolute;
  top: 0px;
  left: -6px;
  background-size: 100% 100%;

  ${({ closeHidden }) =>
    closeHidden
      ? css`
          background-image: url(${Images.bgLeftStraight});
        `
      : css`
          background-image: url(${Images.bgLeft});
        `}
`;

export const BorderMiddleBg = styled.div<{ closeHidden?: boolean }>`
  flex-grow: 1;
  height: 44px;
  margin: 0px 12px;
  background-size: contain;
  background-image: url(${Images.bgMid});

  ${({ closeHidden }) =>
    closeHidden &&
    css`
      margin: 0 7px;
    `}
`;
export const BorderRightBg = styled.div`
  height: 44px;
  width: 26px;
  position: absolute;
  top: 0;
  right: -6px;
  background-size: 100% 100%;
  background-image: url(${Images.bgRight});
`;

type LeftConfirmProps = {
  closeHidden?: boolean;
  completed?: boolean;
};

export const ConfirmButton = styled.button<LeftConfirmProps>`
  font-kerning: normal;
  font-family: LoL Display;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0325em;

  border: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  height: 34px;
  min-width: 170px;

  padding-right: 1px;
  color: #a3c7c7;
  position: relative;
  display: flex;

  top: 5px;

  ${({ completed }) =>
    completed
      ? css`
          color: #c89b3c;
          cursor: default;
        `
      : css`
          &:hover {
            color: #f0e6d2;

            ${AnimatedArrowOverlayStyles.AnimatedArrowOverlayStateHoverFocus}
          }
          &:active {
            color: #005a82;

            ${AnimatedArrowOverlayStyles.AnimatedArrowOverlayStateActive}
          }
        `}

  ${({ closeHidden }) =>
    !closeHidden &&
    css`
      margin-left: 29px;
    `}

    &:disabled {
    color: #5c5b57;
    cursor: default;
  }
`;

export const LeftConfirm = styled.div<LeftConfirmProps>`
  background-size: 100% 100%;
  height: 34px;
  width: 12px;

  ${({ closeHidden, completed }) =>
    closeHidden
      ? css`
          ${completed
            ? css`
                background-image: url(${Images.leftStraightCompleted});
              `
            : css`
                background-image: url(${Images.leftStraightDefault});

                ${ConfirmButton}:hover & {
                  background-image: url(${Images.leftStraightHover});
                }

                ${ConfirmButton}:active & {
                  background-image: url(${Images.leftStraightClick});
                }
              `}

          ${ConfirmButton}:disabled & {
            background-image: url(${Images.leftStraightDisabled});
          }
        `
      : css`
          ${completed
            ? css`
                background-image: url(${Images.leftCompleted});
              `
            : css`
                background-image: url(${Images.leftDefault});

                ${ConfirmButton}:hover & {
                  background-image: url(${Images.leftHover});
                }

                ${ConfirmButton}:active & {
                  background-image: url(${Images.leftClick});
                }
              `}

          ${ConfirmButton}:disabled & {
            background-image: url(${Images.leftDisabled});
          }
        `}
`;

export const MiddleConfirm = styled.div<{ completed?: boolean }>`
  background-size: 100% 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 0px 10px;
  background-repeat: repeat-x;

  ${({ completed }) =>
    completed
      ? css`
          background-image: url(${Images.midCompleted});
        `
      : css`
          background-image: url(${Images.midDefault});

          ${ConfirmButton}:hover & {
            background-image: url(${Images.midHover});
          }

          ${ConfirmButton}:active & {
            background-image: url(${Images.midClick});
          }
        `}

  ${ConfirmButton}:disabled & {
    background-image: url(${Images.midDisabled});
  }
`;

export const RightConfirm = styled.div<{ completed?: boolean }>`
  background-size: 100% 100%;
  height: 34px;
  width: 17px;

  ${({ completed }) =>
    completed
      ? css`
          background-image: url(${Images.rightCompleted});
        `
      : css`
          background-image: url(${Images.rightDefault});

          ${ConfirmButton}:hover & {
            background-image: url(${Images.rightHover});
          }

          ${ConfirmButton}:active & {
            background-image: url(${Images.rightClick});
          }
        `}

  ${ConfirmButton}:disabled & {
    background-image: url(${Images.rightDisabled});
  }
`;

export const CloseButton = styled.button<{ completed?: boolean }>`
  border: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  width: 34px;
  height: 34px;
  background-size: contain;
  position: absolute;
  left: 0px;
  top: 5px;

  ${({ completed }) =>
    completed
      ? css`
          background-image: url(${Images.completed});
          cursor: default;
        `
      : css`
          background-image: url(${Images.normal});

          &:hover {
            background-image: url(${Images.hover});
          }

          &:active {
            background-image: url(${Images.clicked});
          }
        `}

  &:disabled {
    cursor: default;
    background-image: url(${Images.disabled});
  }
`;

export const CloseIcon = styled.div<{ isBack?: boolean; completed?: boolean }>`
  height: 34px;
  width: 34px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;

  ${({ isBack, completed }) =>
    isBack && !completed
      ? css`
          background-image: url(${Images.backDefault});

          ${CloseButton}:hover & {
            background-image: url(${Images.backHover});
          }

          ${CloseButton}:active & {
            background-image: url(${Images.backClick});
          }

          ${CloseButton}:disabled & {
            background-image: url(${Images.backDisabled});
          }
        `
      : !completed
      ? css`
          background-image: url(${Images.exitDefault});

          ${CloseButton}:hover & {
            background-image: url(${Images.exitHover});
          }

          ${CloseButton}:active & {
            background-image: url(${Images.exitClick});
          }

          ${CloseButton}:disabled & {
            background-image: url(${Images.exitDisabled});
          }
        `
      : css`
          background-image: url(${Images.checkmark});
        `}
`;
