import { TabNavigation } from '@/uikit/common/components/navigations';
import type { FC } from 'react';
import * as C from './settings-navigation.styles';

export interface SettingsNavigationProps {
  className?: string;
}

export const SettingsNavigation: FC<SettingsNavigationProps> = ({
  className,
}) => {
  return (
    <C.StyledSettingsNavigation
      className={className}
      maskOverflow
      scrollDirection="vertical"
    >
      <div id="settings-nav-top" />
      <C.NavSectionHeader>Client</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem isActive>General</C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Notifications </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Chat & Fiends </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Sound </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Voice </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Block List </C.StyledTabNavigationItem>
      </TabNavigation>
      <C.NavSectionHeader>In-Game</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem> Hotkeys </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Sound </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Interface </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Game </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Replays </C.StyledTabNavigationItem>
      </TabNavigation>
      <C.NavSectionHeader>About</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem> Verfification </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem>Privacy Notice</C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Terms of Use </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem>
          Third-Party Licenses
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem> Version </C.StyledTabNavigationItem>
      </TabNavigation>
      <div id="settings-nav-bottom" />
    </C.StyledSettingsNavigation>
  );
};
