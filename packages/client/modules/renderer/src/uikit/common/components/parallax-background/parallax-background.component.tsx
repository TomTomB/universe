import * as C from './parallax-background.styles';
import type { ParallaxLayerProps } from './partials';
import { ParallaxLayer } from './partials';
import type { FC } from 'react';

export interface ParallaxBackgroundProps {
  className?: string;
  layers: ParallaxLayerProps[];
}

export const ParallaxBackground: FC<ParallaxBackgroundProps> = ({
  className,
  layers,
}) => {
  return (
    <C.StyledParallaxBackground className={className}>
      <C.Container>
        {layers.map(
          ({ isBackgroundLayer, className, imageSrc, delay, duration }, i) => (
            <ParallaxLayer
              key={i}
              delay={delay}
              duration={duration}
              isBackgroundLayer={isBackgroundLayer}
              className={className}
              imageSrc={imageSrc}
            />
          ),
        )}
      </C.Container>
    </C.StyledParallaxBackground>
  );
};
