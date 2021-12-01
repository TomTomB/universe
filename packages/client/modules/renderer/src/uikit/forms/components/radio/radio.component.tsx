import * as C from './radio.styles';
import React from 'react';
import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';

export interface RadioProps {
  id: string;
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  id,
  label,
  name,
  className,
  disabled = false,
  value,
  register,
  onChange,
}) => {
  return (
    <C.StyledRadioOption className={className}>
      {register && (
        <C.RadioInput
          type="radio"
          id={id}
          disabled={disabled}
          {...register(name)}
        />
      )}
      {!register && (
        <C.RadioInput
          type="radio"
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
      <C.RadioSpan />
      <C.RadioLabel htmlFor={id} isInvalid={false}>
        {label}
      </C.RadioLabel>
    </C.StyledRadioOption>
  );
};
