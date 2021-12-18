import styled from 'styled-components';

export const StyledTabNavigation = styled.nav`
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #cdbe91;
`;

export const NavigationBarList = styled.ul`
  all: unset;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;
