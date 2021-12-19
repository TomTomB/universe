import type { Control } from 'react-hook-form';

export interface ControlledInput<T> {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, object>;
  defaultValue?: T;
  className?: string;
  isDisabled?: boolean;
  onChange?: (newValue: T) => void;
}

export interface WithSound {
  playSounds: boolean;
  soundVolume: number;
}
