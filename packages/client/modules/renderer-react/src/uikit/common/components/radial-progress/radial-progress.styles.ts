import { Images } from './assets';
import styled, { css } from 'styled-components';
import type {
  RadialProgressType,
  StyledRadialProgressProps,
} from './radial-progress.types';

export const Layer = styled.div<{ path?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const TopLayer = styled(Layer)``;

export const MiddleLayer = styled(Layer)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;

  clip-path: ${({ path }) => path};
`;

export const BottomLayer = styled(Layer)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const getLayerConfig = (type?: RadialProgressType) => {
  switch (type) {
    case 'blue':
      return css`
        ${BottomLayer} {
          background-image: url(${Images.emptyMeterBlue});
        }
        ${MiddleLayer} {
          background-image: url(${Images.fullMeterBlue});
        }
      `;

    case 'champion':
      return css`
        ${BottomLayer} {
          background-image: url(${Images.emptyMeterChampion});
        }
        ${MiddleLayer} {
          background-image: url(${Images.fullMeterChampion});
        }
      `;

    case 'pink':
      return css`
        ${BottomLayer} {
          background-image: url(${Images.emptyMeterPink});
        }
        ${MiddleLayer} {
          background-image: url(${Images.fullMeterPink});
        }
      `;
    case 'summoner':
      return css`
        ${BottomLayer} {
          background-image: url(${Images.emptyMeterSummoner});
        }
        ${MiddleLayer} {
          background-image: url(${Images.fullMeterSummoner});
        }
      `;

    default:
      return css``;
  }
};

export const StyledRadialProgress = styled.div<StyledRadialProgressProps>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 10px;
  min-height: 10px;
  margin: 0;
  padding: 0;
  border: 0;

  ${({ progressType }) => getLayerConfig(progressType)}
`;
