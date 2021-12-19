import * as C from './checkbox.styles';
import classNames from 'classnames';
import type { FC } from 'react';
import { useController } from 'react-hook-form';
import { useAudio } from '@/uikit/core/hooks';
import clickAudioFile from './assets/sounds/sfx-uikit-checkbox-click.ogg';
import type { ControlledInput, WithSound } from '../../types';

export interface CheckboxProps extends ControlledInput<boolean>, WithSound {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  name,
  control,
  className,
  isDisabled,
  defaultValue = false,
  playSounds,
  soundVolume,
  onChange,
}) => {
  const controller = useController({ name, control, defaultValue });
  const clickAudio = useAudio(
    clickAudioFile,
    isDisabled || !playSounds,
    soundVolume,
  );

  return (
    <C.CheckboxContainer
      className={classNames(
        {
          isDisabled,
        },
        className,
      )}
      {...clickAudio.active}
    >
      <C.CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        disabled={isDisabled}
        checked={defaultValue}
        onChange={() => {
          controller.field.onChange(!defaultValue);
          onChange?.(!defaultValue);
        }}
        onBlur={controller.field.onBlur}
      />

      <C.CheckboxSpan />
      <C.CheckboxLabel htmlFor={id}>{label}</C.CheckboxLabel>
    </C.CheckboxContainer>
  );
};
