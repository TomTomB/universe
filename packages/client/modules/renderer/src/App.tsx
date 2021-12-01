import { useEffect, useState } from 'react';

export const App = () => {
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

  const mouseDown = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
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

  return (
    <div
      role="grid"
      tabIndex={0}
      style={{
        height: '30px',
        background: 'red',
        userSelect: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}
      onMouseDown={(e) => mouseDown(e)}
    >
      App
    </div>
  );
};
