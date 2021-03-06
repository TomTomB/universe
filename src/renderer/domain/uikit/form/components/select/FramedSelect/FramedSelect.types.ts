import type { SelectOption } from '../select.types';
import type { UseFormRegister } from 'react-hook-form';

export interface FramedSelectProps {
  items: SelectOption[];
  id: string;
  label: string;
  name: string;
  value?: string;
  disabled?: boolean;
  openUpward?: boolean;
  register: UseFormRegister<any>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
