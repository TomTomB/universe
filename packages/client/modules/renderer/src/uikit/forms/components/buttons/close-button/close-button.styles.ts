import { Images } from './assets';
import styled, { css } from 'styled-components';

export interface StyledCloseButtonProps {
  btnStyle?: CloseButtonStyle;
}

export type CloseButtonStyle =
  | 'arrow'
  | 'arrowLeft'
  | 'refresh'
  | 'cog'
  | 'edit'
  | 'plus'
  | 'delete'
  | 'next'
  | 'compare'
  | 'back'
  | 'add'
  | 'duplicate'
  | 'clear'
  | 'export'
  | 'import';

export const CloseIcon = styled.div<StyledCloseButtonProps>`
  width: 10px;
  height: 10px;
  -webkit-mask: url(${Images.iconX}) no-repeat center;
  -webkit-mask-size: 10px;
  background-color: #cdbe91;

  ${({ btnStyle }) =>
    (btnStyle === 'arrow' || btnStyle === 'arrowLeft') &&
    css`
      width: 7px;
      height: 10px;
      -webkit-mask: url(${Images.iconArrowRight}) no-repeat center;
      -webkit-mask-size: 7px 10px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'refresh' &&
    css`
      width: 20px;
      height: 20px;
      -webkit-mask: url(${Images.iconRefresh}) no-repeat center;
      -webkit-mask-size: 20px 20px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'cog' &&
    css`
      width: 24px;
      height: 24px;
      -webkit-mask: url(${Images.iconSettings}) no-repeat center;
      -webkit-mask-size: 18px 18px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'edit' &&
    css`
      width: 13px;
      height: 12px;
      -webkit-mask: url(${Images.iconEdit}) no-repeat center;
      -webkit-mask-size: 13px 12px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'plus' &&
    css`
      width: 10px;
      height: 10px;
      -webkit-mask: url(${Images.iconAdd}) no-repeat center;
      -webkit-mask-size: 10px 10px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'delete' &&
    css`
      width: 13px;
      height: 15px;
      -webkit-mask: url(${Images.iconDelete}) no-repeat center;
      -webkit-mask-size: 13px 15px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'next' &&
    css`
      width: 17px;
      height: 16px;
      -webkit-mask: url(${Images.iconNext});
      -webkit-mask-size: 17px 16px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'compare' &&
    css`
      width: 24px;
      height: 24px;
      -webkit-mask: url(${Images.iconCompare}) no-repeat center;
      -webkit-mask-size: 18px 18px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'back' &&
    css`
      width: 16px;
      height: 16px;
      -webkit-mask: url(${Images.iconBack}) no-repeat center;
      -webkit-mask-size: 16px 16px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'add' &&
    css`
      width: 11px;
      height: 11px;
      -webkit-mask: url(${Images.iconPlus}) no-repeat center;
      -webkit-mask-size: 11px 11px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'duplicate' &&
    css`
      width: 20px;
      height: 20px;
      -webkit-mask: url(${Images.iconCopy}) no-repeat center;
      -webkit-mask-size: 18px 18px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'clear' &&
    css`
      width: 17px;
      height: 16px;
      -webkit-mask: url(${Images.iconClearAll}) no-repeat center;
      -webkit-mask-size: 17px 16px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'export' &&
    css`
      width: 17px;
      height: 16px;
      -webkit-mask: url(${Images.iconExport}) no-repeat center;
      -webkit-mask-size: 14px 14px;
    `}

  ${({ btnStyle }) =>
    btnStyle === 'import' &&
    css`
      width: 17px;
      height: 16px;
      -webkit-mask: url(${Images.iconImport}) no-repeat center;
      -webkit-mask-size: 14px 14px;
    `}
`;

export const Contents = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #1e282d;
  transition: box-shadow 150ms ease-out, color 150ms ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCloseButton = styled.button<StyledCloseButtonProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(
    to top,
    #463714 4%,
    #785a28 23%,
    #c89b3c 90%,
    #c8aa6e 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 0;
  appearance: none;
  border: 0;
  outline: none;

  ${({ btnStyle }) =>
    btnStyle === 'arrowLeft' &&
    css`
      transform: scaleX(-1);
    `}

  &:hover, &:focus-visible {
    background: linear-gradient(to top, #c89b3c 0%, #f0e6d2 100%);

    ${Contents} {
      background: linear-gradient(to top, #3c3c41 0%, #1e2328 100%);
    }

    ${CloseIcon} {
      background-color: #f0e6d2;
    }
  }

  &:active {
    background: linear-gradient(to top, #785a28 0%, #463714 100%);

    ${Contents} {
      background: none;
      background-color: #1e282d;
    }

    ${CloseIcon} {
      background-color: #785a28;
    }
  }

  &:disabled {
    cursor: default;
    background: none;
    background-color: #5b5a56;
    pointer-events: none;

    ${Contents} {
      background: none;
      background-color: #1e282d;
    }

    ${CloseIcon} {
      background-color: #5b5a56;
    }
  }

  &:disabled ${Contents}, &:active ${Contents} {
    box-shadow: none;
    transition: none;
  }
`;
