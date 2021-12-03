import type { FC } from 'react';
import * as C from './title-bar-button.styles';
import { useAudio } from '@/uikit/core/hooks';
import clickAudioFile from './assets/sounds/sfx-uikit-click-generic.ogg';

interface TitleBarButtonProps {
  label: string;
  type: 'close' | 'minimize' | 'help' | 'settings';
  playSounds?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const TitleBarButton: FC<TitleBarButtonProps> = ({
  label,
  type,
  disabled,
  playSounds,
  onClick,
}) => {
  const clickAudio = useAudio(clickAudioFile, disabled || !playSounds);

  switch (type) {
    case 'close':
      return (
        <C.TitleBarButtonClose
          type="button"
          aria-label={label}
          onClick={() => {
            onClick();
            clickAudio.active.onClick();
          }}
        />
      );
    case 'minimize':
      return (
        <C.TitleBarButtonHide
          type="button"
          aria-label={label}
          onClick={() => {
            onClick();
            clickAudio.active.onClick();
          }}
        />
      );
    case 'settings':
      return (
        <C.TitleBarButtonSettings
          type="button"
          aria-label={label}
          onClick={() => {
            onClick();
            clickAudio.active.onClick();
          }}
        />
      );
    case 'help':
      return (
        <C.TitleBarButtonHelp
          type="button"
          aria-label={label}
          onClick={() => {
            onClick();
            clickAudio.active.onClick();
          }}
        />
      );
    default:
      return <></>;
  }
};
