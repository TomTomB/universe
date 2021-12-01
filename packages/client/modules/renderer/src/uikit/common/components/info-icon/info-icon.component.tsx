import * as C from './info-icon.styles';
import type { FC } from 'react';

export interface InfoIconProps {
  className?: string;
  width?: number;
}

export const InfoIcon: FC<InfoIconProps> = ({ className, width = 18 }) => {
  return <C.StyledInfoIcon className={className} width={width} />;
};
