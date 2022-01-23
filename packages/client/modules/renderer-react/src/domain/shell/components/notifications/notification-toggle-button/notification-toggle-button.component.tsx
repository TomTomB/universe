import type { FC } from 'react';
import * as C from './notification-toggle-button.styles';
import type { NotificationToggleButtonProps } from './notification-toggle-button.types';

export const NotificationToggleButton: FC<NotificationToggleButtonProps> = ({
  className,
  variant,
  onClick,
}) => {
  return (
    <C.StyledNotificationToggleButton
      className={className}
      type="button"
      variant={variant}
      onClick={onClick}
    />
  );
};
