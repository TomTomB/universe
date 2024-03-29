import { LabelStyles } from '../label';
import styled from 'styled-components';

export const FormField = styled.div`
  position: relative;
  display: grid;

  ${LabelStyles.StyledLabel} {
    margin-bottom: 2px;
  }

  & + & {
    margin-top: 2px;
  }
`;
