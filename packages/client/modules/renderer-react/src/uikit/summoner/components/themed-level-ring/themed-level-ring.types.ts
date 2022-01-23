import type { RadialProgressProps } from '@/uikit/common/components';

export type RingProps = React.FC<
  RadialProgressProps & {
    ringTheme?: number;
    ringType: ThemedLevelRingType;
  }
>;

export type ThemedLevelRingType =
  | 'progress'
  | 'solid'
  | 'social'
  | 'simplified';

export interface ThemedLevelRingProps {
  ringType: ThemedLevelRingType;
  progress?: number;
  className?: string;
  summonerLevel: number;
}
