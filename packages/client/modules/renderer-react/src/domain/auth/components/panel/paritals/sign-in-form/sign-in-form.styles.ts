import { FramedSelect, PrimaryMagicButton } from '@/uikit/forms/components';
import styled from 'styled-components';

export const StyledSignInFom = styled.form`
  position: relative;
`;

export const SignInButton = styled(PrimaryMagicButton)`
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const RegionLanguageToggleContainer = styled.div`
  margin-top: 2rem;
  display: grid;
`;

export const RegionLanguageToggle = styled.button`
  display: inline-block;
  transition: color 100ms linear;
  text-decoration: none;
  color: #c8aa6e;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: subpixel-antialiased;
  display: inline-flex;
  margin-top: 5px;

  &:hover,
  &:focus-visible {
    color: #f0e6d2;
  }
`;

export const RegionLanguageDropdownArrow = styled.div`
  float: right;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #c8aa6e;
  margin-top: 5px;
  margin-left: 7px;
  transition: border-top-color 100ms linear;

  ${RegionLanguageToggle}:hover &, ${RegionLanguageToggle}:focus-visible & {
    border-top: 6px solid #f0e6d2;
  }
`;

export const LanguageSelect = styled(FramedSelect)`
  && {
    margin-top: 8px;
  }
`;
