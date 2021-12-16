export type NotificationToggleButtonType = 'info' | 'warning' | 'error';

export interface NotificationToggleButtonProps {
  className?: string;
  variant: NotificationToggleButtonType;
  onClick?: () => void;
}
