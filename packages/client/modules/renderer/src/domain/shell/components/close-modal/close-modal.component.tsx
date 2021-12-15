import { useStore } from '@/store';
import { Modal } from '@/uikit/overlay/components';
import type { FC } from 'react';
import * as C from './close-modal.styles';

export const CloseModal: FC = () => {
  const store = useStore();

  return (
    <>
      <Modal
        playSounds
        closeFn={() => store.window.setIsCloseModalVisible(false)}
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
              store.window.setIsCloseModalVisible(false);
            },
          },
        ]}
        show={store.window.isCloseModalVisible}
      >
        <C.StyledCloseModal>
          <h4 id="close-modal-label">Exit now?</h4>
          <p id="close-modal-description">
            Do you really want to exit Universe now? <br /> (sad poro noises)
          </p>
        </C.StyledCloseModal>
      </Modal>
    </>
  );
};
