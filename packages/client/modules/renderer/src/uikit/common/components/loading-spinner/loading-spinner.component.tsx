import * as C from './loading-spinner.styles';
import type { FC } from 'react';

export interface LoadingSpinnerProps {
  isLarge?: boolean;
  className?: string;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  isLarge,
  className,
}) => {
  return <C.StyledLoadingSpinner className={className} isLarge={isLarge} />;
};
