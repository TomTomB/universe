import { usePrevious } from './use-previous';

export const useCompare = (val: string | boolean | number) => {
  const prevVal = usePrevious(val);
  return prevVal !== val;
};
