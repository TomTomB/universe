import { useEffect, useRef } from 'react';

export const usePrevious = (val: string | boolean | number) => {
  const ref = useRef<string | boolean | number>();
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
};
