import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectIsCloseModalVisible,
  toggleIsCloseModalVisible,
} from '@/store/slices';
import { Modal } from '@/uikit/overlay/components';
import type { FC } from 'react';
import * as C from './close-modal.styles';

export const CloseModal: FC = () => {
  const dispatch = useAppDispatch();
  const isCloseModalVisible = useAppSelector(selectIsCloseModalVisible);

  return (
    <Modal
      playSounds
      closeFn={() => dispatch(toggleIsCloseModalVisible(false))}
      labeledById="close-modal-label"
      describedById="close-modal-description"
      bottomButtons={[
        {
          buttonText: 'Yes',
          initialFocus: true,
          click: () => {
            window.electron.window.close();
          },
        },
        {
          buttonText: 'No',
          click: () => {
            dispatch(toggleIsCloseModalVisible(false));
          },
        },
      ]}
      topRightCloseButton={{
        click: () => {
          dispatch(toggleIsCloseModalVisible(false));
        },
        variant: 'circle',
      }}
      show={isCloseModalVisible}
    >
      <C.StyledCloseModal>
        <h4 id="close-modal-label">Exit now?</h4>
        <p id="close-modal-description">
          Do you really want to exit Universe now? <br /> (sad poro noises)
        </p>
      </C.StyledCloseModal>
    </Modal>
  );
};
