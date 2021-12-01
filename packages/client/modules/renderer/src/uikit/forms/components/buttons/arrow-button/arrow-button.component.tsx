import * as C from './arrow-button.styles';
import type { FC } from 'react';
import type { ButtonProps } from '../button.types';

export interface ArrowButtonProps extends ButtonProps {
  rotated?: boolean;
  label: string;
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  disabled,
  rotated,
  label,
  className,
  type,
  onClick,
}) => {
  return (
    <C.StyledArrowButton
      className={className}
      type={type}
      aria-label={label}
      disabled={disabled}
      rotated={rotated}
      onClick={onClick}
    >
      <C.Default />
      <C.Hover />
      <C.Click />
      <C.Disabled />
    </C.StyledArrowButton>
  );
};
