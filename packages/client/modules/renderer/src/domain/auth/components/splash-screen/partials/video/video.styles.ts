import styled, { css } from 'styled-components';

export const StaticSplash = styled.img<{ show: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 300ms cubic-bezier(0, 0, 0, 1);

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export const DynamicSplash = styled.video<{ show: boolean; enabled: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 300ms cubic-bezier(0, 0, 0, 1);

  ${({ show }) =>
    show &&
    css`
      z-index: 2;
    `}

  ${({ enabled }) =>
    enabled &&
    css`
      opacity: 1;
    `}
`;

export const BackgroundAudio = styled.audio`
  display: none;
`;
