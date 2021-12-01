import type { Direction } from '@/types';
import styled, { css } from 'styled-components';
import { Images } from './assets';

export const StyledScrollable = styled.div<{ mask?: Direction }>`
  position: relative;
  overflow: auto;

  @supports (overflow: overlay) {
    overflow: overlay;
  }

  ${({ mask }) =>
    mask && mask === 'horizontal'
      ? css`
          &[data-scrolled-left='false'][data-scrolled-right='true'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskLeft});
            -webkit-mask-box-image-slice: 0 18 8 0 fill;
          }
          &[data-scrolled-left='true'][data-scrolled-right='false'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskRight});
            -webkit-mask-box-image-slice: 0 0 8 18 fill;
          }
          &[data-scrolled-left='false'][data-scrolled-right='false'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBothHorizontal});
            -webkit-mask-box-image-slice: 0 18 8 18 fill;
          }
        `
      : mask === 'vertical'
      ? css`
          &[data-scrolled-top='false'][data-scrolled-bottom='true'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskTop});
            -webkit-mask-box-image-slice: 18 8 0 0 fill;
          }
          &[data-scrolled-top='true'][data-scrolled-bottom='false'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBottom});
            -webkit-mask-box-image-slice: 0 8 18 0 fill;
          }
          &[data-scrolled-top='false'][data-scrolled-bottom='false'] {
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBothVertical});
            -webkit-mask-box-image-slice: 18 8 18 0 fill;
          }
        `
      : ''}
`;

export const ScrollPoint = styled.div`
  position: absolute;
`;

export const ScrollPointTop = styled(ScrollPoint)`
  top: 0;
  left: 0;
`;

export const ScrollPointBottom = styled(ScrollPoint)`
  bottom: 0;
  left: 0;
`;

export const ScrollPointLeft = styled(ScrollPoint)`
  left: 0;
  top: 0;
`;

export const ScrollPointRight = styled(ScrollPoint)`
  right: 0;
  top: 0;
`;
