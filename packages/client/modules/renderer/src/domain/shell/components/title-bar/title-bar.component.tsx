import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectIsModalOpen,
  toggleIsCloseModalVisible,
  toggleIsSettingsModalVisible,
} from '@/store/slices';
import { useEffect, useState } from 'react';
import { TitleBarButton } from './partials';
import * as C from './title-bar.styles';

export const TitleBar = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(selectIsModalOpen);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  let startPosition: { x: number; y: number } | null = null;

  useEffect(() => {
    window.electron.window.didLoad();

    window.electron.window.getPosition().then((r) => setPosition(r));
  }, []);

  const drag = (e: MouseEvent) => {
    e.preventDefault();

    if (!startPosition) {
      return;
    }

    const dx = e.screenX - startPosition.x;
    const dy = e.screenY - startPosition.y;

    const newPosition = {
      x: position.x + dx,
      y: position.y + dy,
    };

    window.electron.window.setPosition(newPosition);
  };

  const mouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.button !== 0) {
      return;
    }

    e.preventDefault();
    startPosition = { x: e.screenX, y: e.screenY };

    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', mouseUp);
  };

  const mouseUp = () => {
    window.removeEventListener('mousemove', drag);
    window.removeEventListener('mouseup', mouseUp);

    window.electron.window.getPosition().then((r) => setPosition(r));
  };

  const minimizeWindow = () => {
    window.electron.window.minimize();
  };

  const showCloseModal = () => {
    dispatch(toggleIsCloseModalVisible(true));
  };

  const showSettingsModal = () => {
    dispatch(
      toggleIsSettingsModalVisible({ visible: true, page: 'client:general' }),
    );
  };

  return (
    <C.StyledHeader onMouseDown={(e) => mouseDown(e)}>
      <C.TitleBarControls>
        <TitleBarButton
          label="Minimize"
          type="minimize"
          disabled={isModalOpen}
          onClick={minimizeWindow}
        />
        <TitleBarButton
          label="Settings"
          type="settings"
          disabled={isModalOpen}
          onClick={showSettingsModal}
        />
        <TitleBarButton
          label="Close"
          type="close"
          disabled={isModalOpen}
          onClick={showCloseModal}
        />
      </C.TitleBarControls>
    </C.StyledHeader>
  );
};
