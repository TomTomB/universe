import type { Direction } from '@/types';
import styled, { css } from 'styled-components';
import { Images } from './assets';

const getScrollMask = (
  scrollDirection: Direction | undefined,
  scrolledStart: boolean,
  scrolledEnd: boolean,
) => {
  switch (scrollDirection) {
    case 'horizontal':
      switch (true) {
        case !scrolledStart && !scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBothHorizontal});
            -webkit-mask-box-image-slice: 0 18 8 18 fill;
          `;
        case !scrolledStart && scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskLeft});
            -webkit-mask-box-image-slice: 0 18 8 0 fill;
          `;
        case scrolledStart && !scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskRight});
            -webkit-mask-box-image-slice: 0 0 8 18 fill;
          `;
      }

      break;

    case 'vertical':
      switch (true) {
        case !scrolledStart && !scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBothVertical});
            -webkit-mask-box-image-slice: 18 8 18 0 fill;
          `;
        case !scrolledStart && scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskTop});
            -webkit-mask-box-image-slice: 18 8 0 0 fill;
          `;
        case scrolledStart && !scrolledEnd:
          return css`
            -webkit-mask-box-image-source: url(${Images.contentGradientMaskBottom});
            -webkit-mask-box-image-slice: 0 8 18 0 fill;
          `;
      }

      break;
  }
};

export const StyledScrollable = styled.div<{
  scrollDirection?: Direction;
  overlay?: boolean;
  scrolledStart: boolean;
  scrolledEnd: boolean;
}>`
  position: relative;
  overflow: ${({ overlay }) => (overlay ? 'overlay' : 'auto')};

  ${({ scrollDirection, scrolledStart, scrolledEnd }) =>
    getScrollMask(scrollDirection, scrolledStart, scrolledEnd)}
`;
