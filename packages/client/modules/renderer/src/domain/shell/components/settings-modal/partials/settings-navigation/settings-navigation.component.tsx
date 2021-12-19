import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectActiveSettingsModalPage,
  setActiveSettingsModalPage,
  type SettingsModalPage,
} from '@/store/slices';
import { TabNavigation } from '@/uikit/common/components/navigations';
import type { FC } from 'react';
import * as C from './settings-navigation.styles';

export interface SettingsNavigationProps {
  className?: string;
}

export const SettingsNavigation: FC<SettingsNavigationProps> = ({
  className,
}) => {
  const activePage = useAppSelector(selectActiveSettingsModalPage);
  const dispatch = useAppDispatch();

  const setActivePage = (page: SettingsModalPage) => {
    dispatch(setActiveSettingsModalPage(page));
  };

  return (
    <C.StyledSettingsNavigation
      className={className}
      maskOverflow
      disableStartMask
      scrollDirection="vertical"
    >
      <div id="settings-nav-top" />
      <C.NavSectionHeader>Client</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:general'}
          onClick={() => setActivePage('client:general')}
        >
          General
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:notifications'}
          onClick={() => setActivePage('client:notifications')}
        >
          Notifications
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:chat-and-friends'}
          onClick={() => setActivePage('client:chat-and-friends')}
        >
          Chat & Friends
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:sound'}
          onClick={() => setActivePage('client:sound')}
        >
          Sound
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:voice'}
          onClick={() => setActivePage('client:voice')}
        >
          Voice
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'client:block-list'}
          onClick={() => setActivePage('client:block-list')}
        >
          Block List
        </C.StyledTabNavigationItem>
      </TabNavigation>
      <C.NavSectionHeader>In-Game</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem
          isActive={activePage === 'in-game:hotkeys'}
          onClick={() => setActivePage('in-game:hotkeys')}
        >
          Hotkeys
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'in-game:sound'}
          onClick={() => setActivePage('in-game:sound')}
        >
          Sound
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'in-game:interface'}
          onClick={() => setActivePage('in-game:interface')}
        >
          Interface
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'in-game:game'}
          onClick={() => setActivePage('in-game:game')}
        >
          Game
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'in-game:replays'}
          onClick={() => setActivePage('in-game:replays')}
        >
          Replays
        </C.StyledTabNavigationItem>
      </TabNavigation>
      <C.NavSectionHeader>About</C.NavSectionHeader>
      <TabNavigation>
        <C.StyledTabNavigationItem
          isActive={activePage === 'about:verification'}
          onClick={() => setActivePage('about:verification')}
        >
          Verfification
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'about:privacy-notice'}
          onClick={() => setActivePage('about:privacy-notice')}
        >
          Privacy Notice
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'about:terms-of-use'}
          onClick={() => setActivePage('about:terms-of-use')}
        >
          Terms of Use
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'about:third-party-licenses'}
          onClick={() => setActivePage('about:third-party-licenses')}
        >
          Third-Party Licenses
        </C.StyledTabNavigationItem>
        <C.StyledTabNavigationItem
          isActive={activePage === 'about:version'}
          onClick={() => setActivePage('about:version')}
        >
          Version
        </C.StyledTabNavigationItem>
      </TabNavigation>
      <div id="settings-nav-bottom" />
    </C.StyledSettingsNavigation>
  );
};
