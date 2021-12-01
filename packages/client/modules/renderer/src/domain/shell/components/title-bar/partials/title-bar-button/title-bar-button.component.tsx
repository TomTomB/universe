import type { FC } from 'react';
import * as C from './title-bar-button.styles';

interface TitleBarButtonProps {
  label: string;
  type: 'close' | 'minimize' | 'help' | 'settings';
  onClick: () => void;
}

export const TitleBarButton: FC<TitleBarButtonProps> = ({
  label,
  type,
  onClick,
}) => {
  switch (type) {
    case 'close':
      return (
        <C.TitleBarButtonClose
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'minimize':
      return (
        <C.TitleBarButtonHide
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'settings':
      return (
        <C.TitleBarButtonSettings
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'help':
      return (
        <C.TitleBarButtonHelp
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    default:
      return <></>;
  }
};
