import * as C from './radial-progress.styles';
import { PolygonGenerator } from '@/uikit/core/utils';
import { RADIAL_PROGRESS_FULL } from './radial-progress.types';
import type { FC } from 'react';
import type { RadialProgressProps } from './radial-progress.types';

export const RadialProgress: FC<RadialProgressProps> = ({
  topLayerChildren,
  middleLayerChildren,
  bottomLayerChildren,
  className,
  progressType,
  progress,
  polygonConfig = RADIAL_PROGRESS_FULL,
}) => {
  const generator = new PolygonGenerator(
    polygonConfig.startAngle,
    polygonConfig.endAngle,
  );

  return (
    <C.StyledRadialProgress className={className} progressType={progressType}>
      <C.BottomLayer>{bottomLayerChildren} </C.BottomLayer>
      <C.MiddleLayer path={generator.generatePolygon(progress)}>
        {middleLayerChildren}
      </C.MiddleLayer>
      <C.TopLayer> {topLayerChildren} </C.TopLayer>
    </C.StyledRadialProgress>
  );
};
