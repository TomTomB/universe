import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectActiveSettingsModalPage,
  selectIsSettingsModalVisible,
  toggleIsSettingsModalVisible,
} from '@/store/slices';
import { Modal } from '@/uikit/overlay/components';
import { type FC, useEffect, useState, type ReactElement } from 'react';
import { ClientSound, SettingsNavigation } from './partials';
import * as C from './settings-modal.styles';
import propSmile from './assets/images/poro_smile.png';

export const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();
  const isSettingsModalVisible = useAppSelector(selectIsSettingsModalVisible);
  const activePage = useAppSelector(selectActiveSettingsModalPage);

  const [settingsPage, setSettingsPage] = useState<{
    section: string;
    label: string;
    component: ReactElement | null;
  }>({ section: 'Client', label: 'General', component: null });

  useEffect(() => {
    switch (activePage) {
      case 'client:general':
        setSettingsPage({
          section: 'Client',
          label: 'General',
          component: null,
        });
        break;
      case 'client:notifications':
        setSettingsPage({
          section: 'Client',
          label: 'Notifications',
          component: null,
        });
        break;
      case 'client:chat-and-friends':
        setSettingsPage({
          section: 'Client',
          label: 'Chat & Friends',
          component: null,
        });
        break;
      case 'client:sound':
        setSettingsPage({
          section: 'Client',
          label: 'Sound',
          component: <ClientSound />,
        });
        break;
      case 'client:voice':
        setSettingsPage({ section: 'Client', label: 'Voice', component: null });
        break;
      case 'client:block-list':
        setSettingsPage({
          section: 'Client',
          label: 'Block list',
          component: null,
        });
        break;
      case 'in-game:hotkeys':
        setSettingsPage({
          section: 'In-Game',
          label: 'Hotkeys',
          component: null,
        });
        break;
      case 'in-game:sound':
        setSettingsPage({
          section: 'In-Game',
          label: 'Sound',
          component: null,
        });
        break;
      case 'in-game:interface':
        setSettingsPage({
          section: 'In-Game',
          label: 'Interface',
          component: null,
        });
        break;
      case 'in-game:game':
        setSettingsPage({ section: 'In-Game', label: 'Game', component: null });
        break;
      case 'in-game:replays':
        setSettingsPage({
          section: 'In-Game',
          label: 'Replays',
          component: null,
        });
        break;
      case 'about:verification':
        setSettingsPage({
          section: 'About',
          label: 'Verification',
          component: null,
        });
        break;
      case 'about:privacy-notice':
        setSettingsPage({
          section: 'About',
          label: 'Privacy Notice',
          component: null,
        });
        break;
      case 'about:terms-of-use':
        setSettingsPage({
          section: 'About',
          label: 'Terms of Use',
          component: null,
        });
        break;
      case 'about:third-party-licenses':
        setSettingsPage({
          section: 'About',
          label: 'Third-Party Licenses',
          component: null,
        });
        break;
      case 'about:version':
        setSettingsPage({
          section: 'About',
          label: 'Version',
          component: null,
        });
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
            {settingsPage.section}
            <C.TitleBarBreak>/</C.TitleBarBreak>
            <C.TitleBarCurrent>{settingsPage.label}</C.TitleBarCurrent>
          </C.TitleBarTitle>
          <C.ResetSettingsForPageButton type="button">
            Restore Defaults
          </C.ResetSettingsForPageButton>
        </C.SettingsTitleBar>
        <SettingsNavigation></SettingsNavigation>
        <C.SettingsContent>
          {settingsPage.component ?? (
            <C.PagePlaceholder>
              <C.PagePlaceholderImg src={propSmile} alt="Smiling poro" />
              <h5>Nothing here yet</h5>
            </C.PagePlaceholder>
          )}
        </C.SettingsContent>
      </C.StyledSettingsModal>
    </Modal>
  );
};
