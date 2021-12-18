import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectActiveSettingsModalPage,
  selectIsSettingsModalVisible,
  toggleIsSettingsModalVisible,
} from '@/store/slices';
import { Modal } from '@/uikit/overlay/components';
import { type FC, useEffect, useState } from 'react';
import { SettingsNavigation } from './partials';
import * as C from './settings-modal.styles';

export const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();
  const isSettingsModalVisible = useAppSelector(selectIsSettingsModalVisible);
  const activePage = useAppSelector(selectActiveSettingsModalPage);

  const [headerText, setHeaderText] = useState<{
    section: string;
    label: string;
  }>({ section: 'Client', label: 'General' });

  useEffect(() => {
    switch (activePage) {
      case 'client:general':
        setHeaderText({ section: 'Client', label: 'General' });
        break;
      case 'client:notifications':
        setHeaderText({ section: 'Client', label: 'Notifications' });
        break;
      case 'client:chat-and-friends':
        setHeaderText({ section: 'Client', label: 'Chat & Friends' });
        break;
      case 'client:sound':
        setHeaderText({ section: 'Client', label: 'Sound' });
        break;
      case 'client:voice':
        setHeaderText({ section: 'Client', label: 'Voice' });
        break;
      case 'client:block-list':
        setHeaderText({ section: 'Client', label: 'Block list' });
        break;
      case 'in-game:hotkeys':
        setHeaderText({ section: 'In-Game', label: 'Hotkeys' });
        break;
      case 'in-game:sound':
        setHeaderText({ section: 'In-Game', label: 'Sound' });
        break;
      case 'in-game:interface':
        setHeaderText({ section: 'In-Game', label: 'Interface' });
        break;
      case 'in-game:game':
        setHeaderText({ section: 'In-Game', label: 'Game' });
        break;
      case 'in-game:replays':
        setHeaderText({ section: 'In-Game', label: 'Replays' });
        break;
      case 'about:verfification':
        setHeaderText({ section: 'About', label: 'Verification' });
        break;
      case 'about:privacy-notice':
        setHeaderText({ section: 'About', label: 'Privacy Notice' });
        break;
      case 'about:terms-of-use':
        setHeaderText({ section: 'About', label: 'Terms of Use' });
        break;
      case 'about:third-party-licenses':
        setHeaderText({ section: 'About', label: 'Third-Party Licenses' });
        break;
      case 'about:version':
        setHeaderText({ section: 'About', label: 'Version' });
        break;
    }
  }, [activePage]);

  return (
    <Modal
      playSounds
      closeFn={() => {
        dispatch(toggleIsSettingsModalVisible({ visible: false }));
      }}
      labeledById="settings-modal-label"
      describedById="settings-modal-description"
      bottomButtons={[
        {
          buttonText: 'Done',
          initialFocus: true,
          click: () => {
            dispatch(toggleIsSettingsModalVisible({ visible: false }));
          },
        },
      ]}
      show={isSettingsModalVisible}
    >
      <C.StyledSettingsModal>
        <C.SettingsTitleBar>
          <C.TitleBarTitle>
            {headerText.section}
            <C.TitleBarBreak>/</C.TitleBarBreak>
            <C.TitleBarCurrent>{headerText.label}</C.TitleBarCurrent>
          </C.TitleBarTitle>
          <C.ResetSettingsForPageButton type="button">
            Restore Defaults
          </C.ResetSettingsForPageButton>
        </C.SettingsTitleBar>
        <SettingsNavigation></SettingsNavigation>
        <C.SettingsContent></C.SettingsContent>
      </C.StyledSettingsModal>
    </Modal>
  );
};
