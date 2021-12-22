import * as C from './pending-banner.styles';
import { Videos } from './assets';
import type { FC } from 'react';

export interface PendingBannerProps {
  className?: string;
}

export const PendingBanner: FC<PendingBannerProps> = ({ className }) => {
  return (
    <C.StyledPendingBanner
      className={className}
      src={Videos.invitedBanner}
      muted
      loop
      autoPlay
    />
  );
};
