import * as C from './checkbox.styles';
import classNames from 'classnames';
import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { useAudio } from '@/uikit/core/hooks';
import clickAudioFile from './assets/sounds/sfx-uikit-checkbox-click.ogg';

export interface CheckboxProps {
  id: string;
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  value?: boolean;
  playSounds?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  name,
  className,
  disabled = false,
  value = false,
  playSounds,
  register,
  onChange,
}) => {
  const clickAudio = useAudio(clickAudioFile, disabled || !playSounds);

  return (
    <C.CheckboxContainer
      className={classNames(
        {
          disabled,
        },
        className,
      )}
      {...clickAudio.active}
    >
      {register && (
        <C.CheckboxInput
          type="checkbox"
          id={id}
          disabled={disabled}
          {...register(name)}
        />
      )}
      {!register && (
        <C.CheckboxInput
          type="checkbox"
          id={id}
          name={name}
          disabled={disabled}
          checked={value}
          onChange={onChange}
        />
      )}
      <C.CheckboxSpan />
      <C.CheckboxLabel htmlFor={id}>{label}</C.CheckboxLabel>
    </C.CheckboxContainer>
  );
};
