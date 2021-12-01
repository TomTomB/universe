import * as C from './flat-select-option.styles';
import type { FC } from 'react';

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
  return (
    <C.StyledFlatSelectOption
      tabIndex={disabled ? -1 : 0}
      selected={selected}
      data-disabled={disabled}
      data-index={index}
      role="option"
      onClick={onClick}
    >
      {children}
    </C.StyledFlatSelectOption>
  );
};
