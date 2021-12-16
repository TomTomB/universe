import styled from 'styled-components';

export const StyledPanel = styled.aside`
  padding-top: 32px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-left: 1px solid ${(props) => props.theme.colors.grey.frame};
  background-color: ${(props) => props.theme.colors.black};
`;

export const LeagueLogoImg = styled.img`
  margin-left: 9px;
  object-fit: contain;
  margin-top: 5px;
  object-position: left;
  height: 58px;
`;

export const SignInContainer = styled.div`
  padding: 16px;
`;

export const SignInHead = styled.h5`
  height: 36px;
  margin-bottom: 10px;
`;
