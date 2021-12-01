import * as C from './button-group.styles';
import type { FC } from 'react';

export interface ButtonGroupProps {
  className?: string;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, className }) => {
  return (
    <C.StyledButtonGroup className={className}>{children}</C.StyledButtonGroup>
  );
};
