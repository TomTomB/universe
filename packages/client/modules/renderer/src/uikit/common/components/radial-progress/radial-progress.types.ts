export interface StyledRadialProgressProps {
  progressType?: RadialProgressType;
}

export type RadialProgressType = 'summoner' | 'champion' | 'blue' | 'pink';

export interface PolygonConfig {
  startAngle: number;
  endAngle: number;
}

export interface RadialProgressProps {
  className?: string;
  progressType?: RadialProgressType;
  progress: number;
  polygonConfig?: PolygonConfig;
  topLayerChildren?: JSX.Element;
  middleLayerChildren?: JSX.Element;
  bottomLayerChildren?: JSX.Element;
}

export const RADIAL_PROGRESS_FULL: PolygonConfig = {
  startAngle: 90,
  endAngle: -270,
};
export const RADIAL_PROGRESS_TOP_GAP: PolygonConfig = {
  startAngle: 80,
  endAngle: -260,
};
