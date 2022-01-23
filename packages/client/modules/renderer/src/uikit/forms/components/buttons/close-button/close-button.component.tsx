import * as C from './close-button.styles';
import type { FC } from 'react';
import type { ButtonProps } from '../button.types';

export interface CloseButtonProps extends ButtonProps {
  btnStyle?: C.CloseButtonStyle;
  label?: string;
}

export const CloseButton: FC<CloseButtonProps> = ({
  btnStyle,
  type,
  className,
  disabled,
  label,
  onClick,
}) => {
  return (
    <C.StyledCloseButton
      aria-label={label}
      btnStyle={btnStyle}
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <C.Contents>
        <C.CloseIcon btnStyle={btnStyle} />
      </C.Contents>
    </C.StyledCloseButton>
  );
};
