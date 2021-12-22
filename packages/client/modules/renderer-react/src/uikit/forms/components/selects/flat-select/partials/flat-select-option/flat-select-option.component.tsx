import * as C from './flat-select-option.styles';
import type { FC } from 'react';
import clickAudioFile from '../../../assets/sounds/sfx-uikit-dropdown-select.ogg';
import { useAudio } from '@/uikit/core/hooks';
import type { WithSound } from '../../../../../types';

export interface FlatSelectOptionProps extends WithSound {
  index: number;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const FlatSelectOption: FC<FlatSelectOptionProps> = ({
  children,
  selected,
  disabled,
  index,
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
    <C.StyledFlatSelectOption
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
    </C.StyledFlatSelectOption>
  );
};
