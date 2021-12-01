import * as C from './native-select.styles';
import type { FC } from 'react';
import type { SelectOption } from '../select.types';
import type { UseFormRegister } from 'react-hook-form';

export interface NativeSelectProps {
  id: string;
  name: string;
  items: SelectOption[];
  disabled?: boolean;
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const NativeSelect: FC<NativeSelectProps> = ({
  id,
  items,
  name,
  register,
  onChange,
  hidden,
  disabled,
}) => {
  return (
    <C.StyledNativeSelect
      hidden={hidden}
      aria-hidden={hidden}
      id={id}
      disabled={disabled}
      onChange={onChange}
      {...register?.(name)}
    >
      {items.map(
        (option) =>
          option && (
            <option
              key={option.label + option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ),
      )}
    </C.StyledNativeSelect>
  );
};
