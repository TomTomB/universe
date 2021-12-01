import * as C from './loading-spinner.styles';
import type { FC } from 'react';

export interface LoadingSpinnerProps {
  isLarge?: boolean;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ isLarge }) => {
  return <C.StyledLoadingSpinner isLarge={isLarge} />;
};
