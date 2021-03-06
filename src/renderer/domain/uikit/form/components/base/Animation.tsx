import styled, { css } from 'styled-components';

export const Animation = styled.video<{ show: boolean }>`
  position: absolute;
  filter: opacity(0);
  pointer-events: none;
  transition-duration: 0ms !important;

  ${({ show }) =>
    show &&
    css`
      filter: opacity(1);
    `}
`;

export const AnimationWithTransition = styled.video<{
  show: boolean;
  delay?: number;
}>`
  position: absolute;
  filter: opacity(0);
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  pointer-events: none;

  ${({ show }) =>
    show &&
    css`
      filter: opacity(1);
    `}

  ${({ delay }) =>
    delay &&
    css`
      transition-delay: ${delay}ms;
    `}
`;
