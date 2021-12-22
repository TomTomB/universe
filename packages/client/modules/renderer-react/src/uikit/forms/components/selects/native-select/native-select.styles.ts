import styled, { css } from 'styled-components';

export const StyledNativeSelect = styled.select<{ hidden?: boolean }>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
