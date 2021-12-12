import { LoadingSpinner } from '@/uikit/common/components';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  padding: 16px;

  p {
    margin: 0;
  }

  a {
    display: inline-block;
  }
`;

export const VersionFooter = styled.div`
  border-top: 1px solid #1e282d;
  position: relative;

  span {
    cursor: default;
    text-align: center;
    display: block;
    color: #3c3c41;
    font-family: LoL Display;
    font-size: 12px;
    font-weight: 600;
    line-height: 2.74;
  }
`;

export const FooterLoadingSpinner = styled(LoadingSpinner)`
  position: absolute;
  right: 16px;
  top: calc(50% - 11px);
  width: 20px;
  height: 20px;
`;
