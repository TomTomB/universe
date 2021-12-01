import styled, { css, keyframes } from 'styled-components';
import type { ButtonTextProps } from './play-button.types';

export const textShowAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateX(-5px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  left: 0;
  padding: 6px;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  pointer-events: all;
  position: absolute;
  top: 0;
  width: calc(100% - 36px);
  height: 100%;
  left: 36px;
  -webkit-app-region: no-drag;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const ButtonText = styled.span<ButtonTextProps>`
  font-family: LoL Display;
  font-kerning: normal;
  font-feature-settings: 'kern' 1;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  color: #f0e6d2;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.075em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  pointer-events: none;
  transition: color 300ms ${({ theme }) => theme.easing.soft};

  ${ButtonContainer}:disabled & {
    color: ${({ theme }) => theme.colors.grey[3]};
  }

  ${({ intro }) =>
    intro &&
    css`
      opacity: 0;
      animation: ${textShowAnimation} 300ms forwards 800ms
        ${({ theme }) => theme.easing.soft};
    `};

  ${({ reserveSpace }) =>
    reserveSpace &&
    css`
      width: 85%;
    `};

  ${({ patching }) =>
    patching &&
    css`
      color: #f0e6d2 !important;
    `};
`;

export const LeagueLogoContainer = styled.div`
  position: absolute;
  top: -6px;
  left: -13px;
  cursor: default;
  z-index: 1;
  width: 65px;
  height: 54px;
`;

export const StyledPlayButton = styled.div<{ show: boolean }>`
  width: 162px;
  height: 58px;
  padding: 7px 0;
  box-sizing: border-box;
  transition: opacity 300ms ${({ theme }) => theme.easing.soft};
  cursor: default;
  opacity: 0;
  pointer-events: none;
  position: relative;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export const PlayButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: 20px center;
  transition: 400ms 200ms background ease;
`;
