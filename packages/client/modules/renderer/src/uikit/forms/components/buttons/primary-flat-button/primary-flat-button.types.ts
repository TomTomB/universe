import type { WithSound } from '../../../types';
import type { ButtonProps } from '../button.types';

export interface StyledPrimaryFlatButtonProps {
  external?: boolean;
  variant?: PrimaryFlatButtonVariant;
}

export type PrimaryFlatButtonVariant = 'primary' | 'purchase';

export interface PrimaryFlatButtonProps extends ButtonProps, WithSound {
  variant?: PrimaryFlatButtonVariant;
  external?: boolean;
}
