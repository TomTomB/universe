import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectIsSettingsModalVisible,
  toggleIsSettingsModalVisible,
} from '@/store/slices';
import { Modal } from '@/uikit/overlay/components';
import type { FC } from 'react';
import { SettingsNavigation } from './partials';
import * as C from './settings-modal.styles';

export const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();
  const isSettingsModalVisible = useAppSelector(selectIsSettingsModalVisible);

  return (
    <Modal
      playSounds
      closeFn={() => {
        dispatch(toggleIsSettingsModalVisible(false));
      }}
      labeledById="settings-modal-label"
      describedById="settings-modal-description"
      bottomButtons={[
        {
          buttonText: 'Done',
          initialFocus: true,
          click: () => {
            dispatch(toggleIsSettingsModalVisible(false));
          },
        },
      ]}
      show={isSettingsModalVisible}
    >
      <C.StyledSettingsModal>
        <C.SettingsTitleBar>
          <C.TitleBarTitle>
            Settings<C.TitleBarBreak>/</C.TitleBarBreak>
            <C.TitleBarCurrent>Nothing</C.TitleBarCurrent>
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
