import { useEffect, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';

export const useBoundingRect = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);

  const set = () =>
    setBoundingRect(
      ref && ref.current ? ref.current.getBoundingClientRect() : null,
    );

  useEffect(() => {
    set();

    // TODO(TRB): Use a ResizeObserver instead
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [boundingRect, ref] as [DOMRect | null, MutableRefObject<T | null>];
};
