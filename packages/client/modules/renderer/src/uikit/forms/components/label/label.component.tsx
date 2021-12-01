import * as C from './label.styles';
import type { MouseEvent as ReactMouseEvent } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';

export interface LabelProps {
  htmlFor: string;
  isInvalid: boolean;
  disabled?: boolean;
  id?: string;
  onClick?: (e: ReactMouseEvent<HTMLLabelElement, MouseEvent>) => void;
  className?: string;
}

export const Label: FC<LabelProps> = ({
  htmlFor,
  children,
  isInvalid,
  disabled,
  id,
  onClick,
  className,
}) => {
  return (
    <C.StyledLabel
      id={id}
      onClick={onClick}
      htmlFor={htmlFor}
      className={classNames(className, {
        'is-invalid': isInvalid,
      })}
      data-disabled={disabled}
    >
      {children}
    </C.StyledLabel>
  );
};
