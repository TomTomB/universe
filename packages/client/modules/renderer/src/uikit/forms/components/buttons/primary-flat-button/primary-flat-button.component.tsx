import * as C from './primary-flat-button.styles';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import type { PrimaryFlatButtonProps } from './primary-flat-button.types';

export const PrimaryFlatButton: FC<PrimaryFlatButtonProps> = ({
  type,
  children,
  className,
  disabled,
  onClick,
  variant,
  external,
}) => {
  const [showClickAnim, setShowClickAnim] = useState(false);

  useEffect(() => {
    if (!showClickAnim) {
      return;
    }

    const t = window.setTimeout(() => {
      setShowClickAnim(false);
    }, 400);

    return () => {
      window.clearTimeout(t);
    };
  }, [showClickAnim]);

  return (
    <C.StyledPrimaryFlatButton
      disabled={disabled}
      type={type}
      className={classNames(className, { click: showClickAnim })}
      variant={variant}
      external={external}
      onClick={(e) => {
        setShowClickAnim(true);
        onClick?.(e);
      }}
    >
      <C.Flare />
      <C.Glow />
      <C.Bg />
      <C.BorderIdle />
      <C.BorderTransition />
      <C.SheenWrapper>
        <C.Sheen />
      </C.SheenWrapper>
      <C.ContentWrapper> {children} </C.ContentWrapper>
    </C.StyledPrimaryFlatButton>
  );
};
