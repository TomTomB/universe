import { Images } from './assets';
import { RadialProgress } from '@/uikit/common/components';
import styled, { css } from 'styled-components';
import type { RingProps, ThemedLevelRingType } from './themed-level-ring.types';

export const LevelText = styled.span`
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  bottom: 2px;
  color: #f0e6d2;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`;

export const UnfilledXpRing = styled.img`
  content: url(${Images.unfilledRing});
  && {
    display: block;
  }
`;

export const MaskContainer = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
`;

export const MaskContainerLeftHalf = styled(MaskContainer)`
  left: 0;

  && img {
    content: url(${Images.unfilledRingLeft});
    transform-origin: center right;
    transform: rotate(180deg);
    left: initial;
    right: 0;
    display: block;
  }
`;

export const MaskContainerRightHalf = styled(MaskContainer)`
  right: 0;

  && img {
    content: url(${Images.unfilledRingRight});
    transform-origin: center left;
    transform: rotate(180deg);
    left: 0;
    display: block;
  }
`;

export const FilledXpRing = styled.img``;
export const LevelRingBorder = styled.img``;

export const getRing = (type: ThemedLevelRingType, theme?: number) => {
  const index = theme
    ? theme - 1 < 0
      ? 0
      : theme - 1 > 20
      ? 20
      : theme - 1
    : 0;

  return css`
    ${type === 'progress' &&
    css`
      ${FilledXpRing} {
        content: url(${Images.progressRings[index]});
        display: block;
      }
      ${LevelRingBorder} {
        content: url(${Images.progressBorders[index]});
        display: block;
      }
    `}

    ${type === 'solid' &&
    css`
      ${LevelRingBorder} {
        content: url(${Images.solidBorders[index]});
        display: block;
      }
    `}

    ${type === 'social' &&
    css`
      ${LevelRingBorder} {
        content: url(${Images.socialBorders[index]});
        display: block;
      }
    `}

    ${type === 'simplified' &&
    css`
      ${FilledXpRing} {
        content: url(${Images.progressRings[index]});
        display: block;
      }
      ${LevelRingBorder} {
        content: url(${Images.simplifiedBorders[index]});
        display: block;
      }
    `}
  `;
};

export const StyledThemedLevelRing = styled<RingProps>(RadialProgress)`
  display: block;

  img {
    height: 140%;
    min-width: 140%;
    position: absolute;
    top: -20%;
    left: -20%;
    display: none;
  }

  ${({ ringType }) =>
    ringType === 'social' &&
    css`
      img {
        height: 160%;
        min-width: 160%;
        top: -30%;
        left: -30%;
      }

      ${LevelText} {
        bottom: -3px;
      }
    `}

  ${({ ringTheme, ringType }) => getRing(ringType, ringTheme)}
`;
