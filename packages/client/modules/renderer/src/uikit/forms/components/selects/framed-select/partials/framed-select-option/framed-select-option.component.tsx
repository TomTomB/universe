import * as C from './framed-select-option.styles';
import type { FC } from 'react';
import clickAudioFile from '../../../assets/sounds/sfx-uikit-dropdown-select.ogg';
import { useAudio } from '@/uikit/core/hooks';

export interface FramedSelectOptionProps {
  index: number;
  selected?: boolean;
  disabled?: boolean;
  playSounds?: boolean;
  onClick: () => void;
}

export const FramedSelectOption: FC<FramedSelectOptionProps> = ({
  index,
  children,
  selected,
  disabled,
  playSounds,
  onClick,
}) => {
  const clickAudio = useAudio(clickAudioFile, disabled || !playSounds);

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
