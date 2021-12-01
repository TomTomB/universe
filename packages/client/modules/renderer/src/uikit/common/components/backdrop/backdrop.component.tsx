import * as C from './backdrop.styles';
import type { FC } from 'react';

export interface BackdropProps {
  className?: string;
}

export const Backdrop: FC<BackdropProps> = ({ className }) => {
  return <C.StyledBackdrop className={className} />;
};
