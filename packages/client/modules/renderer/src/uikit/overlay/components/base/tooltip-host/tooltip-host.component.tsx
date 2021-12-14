import { type FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const overlayRoot = document.getElementById('universe-tooltip');

export const TooltipHost: FC = ({ children }) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!el) {
      const element = document.createElement('div');
      setEl(element);
      overlayRoot?.appendChild(element);
    }

    return () => {
      if (el) {
        overlayRoot?.removeChild(el);
      }
    };
  }, [el]);

  if (!el) {
    return <></>;
  }

  return createPortal(children, el);
};
