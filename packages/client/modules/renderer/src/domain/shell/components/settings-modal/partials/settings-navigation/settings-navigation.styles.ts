import { Scrollable } from '@/uikit/common/components';
import {
  TabNavigationItem,
  TabNavigationItemStyles,
} from '@/uikit/common/components/navigations';
import styled from 'styled-components';

export const StyledSettingsNavigation = styled(Scrollable)`
  height: 482px;
  margin-top: 5px;
  width: 186px;
`;

export const StyledTabNavigationItem = styled(TabNavigationItem)`
  ${TabNavigationItemStyles.ItemLink} {
    padding: 0 0 0 3px;
    min-height: 30px;
    line-height: 16px;
    align-items: center;
    font-size: 12px;
    transition: background 300ms ease, color 300ms ease;
    width: 100%;
    color: #cdbe91;
    text-align: left;
    text-transform: uppercase;

    &:hover:not(.active),
    &:focus-visible:not(.active) {
      background: #1e2328;
      color: #f0e6d2;
    }

    &.active {
      color: #f0e6d2;
    }
  }
`;

export const NavSectionHeader = styled.p`
  margin: 10px 0 10px 18px;

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
