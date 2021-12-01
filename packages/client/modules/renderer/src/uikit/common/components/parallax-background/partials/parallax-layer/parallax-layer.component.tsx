import * as C from './parallax-layer.styles';
import type { FC } from 'react';
import type { ParallaxLayerProps } from './parallax-layer.types';

export const ParallaxLayer: FC<ParallaxLayerProps> = ({
  className,
  isBackgroundLayer,
  imageSrc,
  delay,
  duration,
}) => {
  return (
    <C.StyledParallaxLayer
      className={className}
      imageSrc={imageSrc}
      delay={delay}
      duration={duration}
      isBackgroundLayer={isBackgroundLayer}
    />
  );
};
