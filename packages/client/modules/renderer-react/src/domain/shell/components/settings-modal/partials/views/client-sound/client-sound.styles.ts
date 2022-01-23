import { Range } from '@/uikit/forms/components';
import styled from 'styled-components';

export const StyledClientSound = styled.div`
  width: calc(100% - 40px);
  overflow-x: hidden;
  padding: 15px 20px;
`;

export const SliderSection = styled.section`
  margin: 5px 0 9px;
`;

export const IndentedSection = styled.section`
  margin: 0 0 20px 25px;
`;

export const IndentedSectionInner = styled.div`
  margin-left: 19px;
`;

export const CheckboxWrapper = styled.div`
  & + & {
    margin-top: 2px;
  }
`;

export const AlignedRange = styled(Range)`
  margin-left: -15px;
`;
