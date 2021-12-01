import * as C from './primary-replay-button.styles';
import React from 'react';
import type { FC } from 'react';

export interface PrimaryReplayButtonProps {
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PrimaryReplayButton: FC<PrimaryReplayButtonProps> = ({
  disabled,
  className,
  onClick,
}) => {
  return (
    <C.StyledPrimaryReplayButton
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <C.ButtonStateDefault />
      <C.ButtonStateHover />
      <C.ButtonStateActive />
    </C.StyledPrimaryReplayButton>
  );
};
