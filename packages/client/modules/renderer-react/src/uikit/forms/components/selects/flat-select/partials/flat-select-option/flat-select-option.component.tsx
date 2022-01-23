import * as C from './flat-select-option.styles';
import type { FC } from 'react';
import clickAudioFile from '../../../assets/sounds/sfx-uikit-dropdown-select.ogg';
import { useAudio } from '@/uikit/core/hooks';

export interface FlatSelectOptionProps {
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
  onClick,
}) => {
  const clickAudio = useAudio(clickAudioFile, 'sfx');

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
