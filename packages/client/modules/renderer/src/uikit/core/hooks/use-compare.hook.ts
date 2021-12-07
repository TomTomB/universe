import { usePrevious } from './use-previous.hook';

export const useCompare = (val: string | boolean | number) => {
  const prevVal = usePrevious(val);
  return prevVal !== val;
};
