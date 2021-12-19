import * as C from './radio.styles';
import type { FC } from 'react';
import { useController } from 'react-hook-form';
import type { ControlledInput } from '../../types';

export interface RadioProps extends ControlledInput<string | number> {
  label: string;
}

export const Radio: FC<RadioProps> = ({
  id,
  label,
  name,
  className,
  isDisabled,
  defaultValue,
  control,
  onChange,
}) => {
  const controller = useController({ name, control, defaultValue });

  return (
    <C.StyledRadioOption className={className}>
      <C.RadioInput
        type="radio"
        id={id}
        name={name}
        disabled={isDisabled}
        value={defaultValue}
        onChange={(e) => {
          controller.field.onChange(e.target.value);
          onChange?.(e.target.value);
        }}
      />

      <C.RadioSpan />
      <C.RadioLabel htmlFor={id} isInvalid={false}>
        {label}
      </C.RadioLabel>
    </C.StyledRadioOption>
  );
};
