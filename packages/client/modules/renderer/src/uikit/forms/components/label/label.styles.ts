import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: inline-block;
  backface-visibility: hidden;

  &[data-disabled='true'] {
    filter: brightness(0.5);
    pointer-events: none;
  }
`;
