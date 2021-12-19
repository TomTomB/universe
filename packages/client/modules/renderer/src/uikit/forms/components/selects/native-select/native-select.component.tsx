import * as C from './native-select.styles';
import type { FC } from 'react';
import type { SelectOption } from '../select.types';
import type { ControlledInput } from '../../../types';
import { useController } from 'react-hook-form';

export interface NativeSelectProps extends ControlledInput<string> {
  items: SelectOption[];
  hidden?: boolean;
}

export const NativeSelect: FC<NativeSelectProps> = ({
  id,
  items,
  name,
  onChange,
  hidden,
  isDisabled,
  control,
  className,
  defaultValue,
}) => {
  const controller = useController({ name, control, defaultValue });

  return (
    <C.StyledNativeSelect
      className={className}
      hidden={hidden}
      aria-hidden={hidden}
      id={id}
      name={name}
      disabled={isDisabled}
      onChange={(e) => {
        controller.field.onChange(e.target.value);
        onChange?.(e.target.value);
      }}
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
