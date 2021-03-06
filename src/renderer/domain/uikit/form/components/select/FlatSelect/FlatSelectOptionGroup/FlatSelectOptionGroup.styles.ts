import styled from 'styled-components';

export const StyledFlatSelectOptionGroup = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #010a13;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const FlatSelectOptionGroupContainer = styled.div`
  position: relative;
`;

export const OptionGroupHeaderText = styled.div`
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.0375em;
  font-size: 12px;
  padding: 0 10px;
  color: #a09b8c;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
