import type { ButtonProps } from '../button.types';

export interface StyledPrimaryFlatButtonProps {
  external?: boolean;
  variant?: PrimaryFlatButtonVariant;
}

export type PrimaryFlatButtonVariant = 'primary' | 'purchase';

export interface PrimaryFlatButtonProps extends ButtonProps {
  variant?: PrimaryFlatButtonVariant;
  external?: boolean;
}
