import * as C from './framed-icon.styles';
import type { FC } from 'react';

export interface FramedIconProps {
  className?: string;
  zoom?: number;
  innerShadow?: boolean;
  altFrame?: boolean;
  interactive?: boolean;
  disabled?: boolean;
}

export const FramedIcon: FC<FramedIconProps> = ({
  className,
  children,
  innerShadow,
  zoom,
  altFrame,
  interactive,
  disabled,
}) => {
  return (
    <C.StyledFramedIcon
      className={className}
      zoom={zoom}
      interactive={interactive}
      data-disabled={disabled}
      altFrame={altFrame}
    >
      <C.FrameColor>
        {children}
        <C.InnerMask innerShadow={innerShadow} />
      </C.FrameColor>
    </C.StyledFramedIcon>
  );
};
