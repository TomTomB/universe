import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: inline-block;
  backface-visibility: hidden;
  transition: filter 300ms;

  &[data-disabled='true'] {
    filter: brightness(0.5);
    pointer-events: none;
  }
`;
