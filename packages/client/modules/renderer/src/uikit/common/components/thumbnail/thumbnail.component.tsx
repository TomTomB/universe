import * as C from './thumbnail.styles';
import type { FC } from 'react';

export interface ThumbnailProps {
  disabled?: boolean;
}

export const Thumbnail: FC<ThumbnailProps> = ({ children, disabled }) => {
  return (
    <C.StyledThumbnail data-disabled={disabled}> {children} </C.StyledThumbnail>
  );
};
