import { useEffect, useRef } from 'react';

export const usePrevious = <T extends string | boolean | number>(val: T) => {
  const ref = useRef<T>(val);
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
};
