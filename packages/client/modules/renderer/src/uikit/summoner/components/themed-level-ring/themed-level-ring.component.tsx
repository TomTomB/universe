import * as C from './themed-level-ring.styles';
import type { FC } from 'react';
import type { ThemedLevelRingProps } from './themed-level-ring.types';

export const ThemedLevelRing: FC<ThemedLevelRingProps> = ({
  className,
  ringType,
  progress,
  summonerLevel,
}) => {
  const themeLevel = Math.floor(summonerLevel / 25) + 1;

  return (
    <C.StyledThemedLevelRing
      ringTheme={themeLevel}
      ringType={ringType}
      progress={progress ?? 0}
      polygonConfig={{ startAngle: 247, endAngle: -67 }}
      className={className}
      bottomLayerChildren={
        ringType === 'progress' || ringType === 'simplified' ? (
          <C.UnfilledXpRing />
        ) : (
          <></>
        )
      }
      middleLayerChildren={
        <>
          <C.MaskContainerLeftHalf>
            <C.UnfilledXpRing />
          </C.MaskContainerLeftHalf>

          <C.MaskContainerRightHalf>
            <C.UnfilledXpRing />
          </C.MaskContainerRightHalf>
          <C.FilledXpRing />
        </>
      }
      topLayerChildren={
        <>
          <C.LevelRingBorder />
          {ringType !== 'simplified' && (
            <C.LevelText> {summonerLevel} </C.LevelText>
          )}
        </>
      }
    ></C.StyledThemedLevelRing>
  );
};
