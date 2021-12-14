import * as C from './primary-flat-button.styles';
import { useEffect, useState, type FC } from 'react';
import classNames from 'classnames';
import type { PrimaryFlatButtonProps } from './primary-flat-button.types';
import clickFile from './assets/sounds/sfx-uikit-button-gold-click.ogg';
import hoverFile from './assets/sounds/sfx-uikit-button-gold-hover.ogg';
import { useAudio } from '@/uikit/core/hooks';

export const PrimaryFlatButton: FC<PrimaryFlatButtonProps> = ({
  type,
  children,
  className,
  disabled,
  onClick,
  variant,
  playSounds,
  external,
}) => {
  const [showClickAnim, setShowClickAnim] = useState(false);

  const clickAudio = useAudio(clickFile, disabled || !playSounds);
  const hoverAudio = useAudio(hoverFile, disabled || !playSounds);

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
      {...hoverAudio.hover}
      onClick={(e) => {
        setShowClickAnim(true);
        onClick?.(e);
        clickAudio.active.onClick();
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
