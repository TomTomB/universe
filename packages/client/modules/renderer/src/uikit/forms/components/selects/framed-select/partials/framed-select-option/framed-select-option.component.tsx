import * as C from './framed-select-option.styles';
import type { FC } from 'react';

export interface FramedSelectOptionProps {
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
  onClick,
}) => {
  return (
    <C.StyledFramedSelectOption
      tabIndex={disabled ? -1 : 0}
      selected={selected}
      data-disabled={disabled}
      data-index={index}
      role="option"
      onClick={onClick}
    >
      {children}
    </C.StyledFramedSelectOption>
  );
};

export default FramedSelectOption;
