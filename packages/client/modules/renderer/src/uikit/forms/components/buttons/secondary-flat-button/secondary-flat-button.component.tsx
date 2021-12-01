import * as C from './secondary-flat-button.styles';
import type { FC } from 'react';
import type { ButtonProps } from '../button.types';

export type SecondaryFlatButtonProps = ButtonProps;

export const SecondaryFlatButton: FC<SecondaryFlatButtonProps> = ({
  children,
  className,
  type,
  disabled,
  onClick,
}) => {
  return (
    <C.StyledSecondaryFlatButton
      disabled={disabled}
      className={className}
      type={type}
      onClick={onClick}
    >
      <C.FrameContainer>
        <C.FrameDefault />
        <C.FrameHover />
        <C.FrameActive />
        <C.FrameDisabled />
      </C.FrameContainer>

      <C.Content> {children} </C.Content>
    </C.StyledSecondaryFlatButton>
  );
};
