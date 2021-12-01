import * as C from './primary-magic-button.styles';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import hoverAudioFile from './assets/sounds/sfx-login-button-signin-hover.ogg';
import clickAudioFile from './assets/sounds/sfx-login-button-signin-click.ogg';
import { useAudio } from '@/uikit/core/hooks';

export interface PrimaryMagicButtonProps {
  disabled?: boolean;
  className?: string;
  playSounds?: boolean;
}

export const PrimaryMagicButton: FC<PrimaryMagicButtonProps> = ({
  children,
  disabled,
  className,
  playSounds,
}) => {
  const [intro, setIntro] = useState(false);

  const introTimeout = useRef(0);

  const hoverAudio = useAudio(hoverAudioFile, disabled || !playSounds);
  const clickAudio = useAudio(clickAudioFile, disabled || !playSounds);

  useEffect(() => {
    if (!disabled) {
      clearTimeout(introTimeout.current);
      setIntro(true);
    } else {
      setIntro(false);
      return;
    }

    introTimeout.current = window.setTimeout(() => {
      setIntro(false);
    }, 400);
  }, [disabled]);

  return (
    <C.MagicButton
      className={classNames(className, { intro })}
      disabled={disabled}
      {...hoverAudio.hover}
      {...clickAudio.active}
    >
      <C.Container>
        <C.FrameIdle />
        <C.FrameInteractive />
        <C.LeftRuneMagic />
        <C.RightRuneMagic />
        <C.RadialContainer>
          <C.RadialEffect />
        </C.RadialContainer>
        <C.Content>{children}</C.Content>
        <C.StyledAnimatedBorderOverlay speed={7500} />
      </C.Container>
    </C.MagicButton>
  );
};
