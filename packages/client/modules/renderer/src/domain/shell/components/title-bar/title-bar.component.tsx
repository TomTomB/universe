import {
  getIsCloseModalVisible,
  setIsCloseModalVisible,
  useStore,
} from '@/store';
import { useEffect, useState } from 'react';
import { TitleBarButton } from './partials';
import * as C from './title-bar.styles';

export const TitleBar = () => {
  const setIsCloseModalVisibleFn = useStore(setIsCloseModalVisible);
  const isCloseModalVisible = useStore(getIsCloseModalVisible);

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
    setIsCloseModalVisibleFn(true);
  };

  return (
    <C.StyledHeader onMouseDown={(e) => mouseDown(e)}>
      <C.TitleBarControls>
        <TitleBarButton
          label="Minimize"
          type="minimize"
          playSounds
          disabled={isCloseModalVisible}
          onClick={minimizeWindow}
        />
        <TitleBarButton
          label="Settings"
          type="settings"
          playSounds
          disabled={isCloseModalVisible}
          onClick={() => {
            console.log('Settings');
          }}
        />
        <TitleBarButton
          label="Close"
          type="close"
          playSounds
          disabled={isCloseModalVisible}
          onClick={showCloseModal}
        />
      </C.TitleBarControls>
    </C.StyledHeader>
  );
};
