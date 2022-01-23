import * as C from './framed-select-option.styles';
import type { FC } from 'react';
import clickAudioFile from '../../../assets/sounds/sfx-uikit-dropdown-select.ogg';
import { useAudio } from '@/uikit/core/hooks';
import type { WithSound } from '../../../../../types';

export interface FramedSelectOptionProps extends WithSound {
  index: number;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const FramedSelectOption: FC<FramedSelectOptionProps> = ({
  index,
  children,
  selected,
  disabled,
  playSounds,
  soundVolume,
  onClick,
}) => {
  const clickAudio = useAudio(
    clickAudioFile,
    disabled || !playSounds,
    soundVolume,
  );

  return (
    <C.StyledFramedSelectOption
      tabIndex={disabled ? -1 : 0}
      selected={selected}
      data-disabled={disabled}
      data-index={index}
      role="option"
      onClick={() => {
        onClick();
        clickAudio.active.onClick();
      }}
    >
      {children}
    </C.StyledFramedSelectOption>
  );
};

export default FramedSelectOption;
