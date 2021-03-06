import * as E from './AnimatedArrowOverlay.styles';
import { Assets } from './assets';
import React, { useRef } from 'react';
import type { AnimatedArrowOverlayProps } from './AnimatedArrowOverlay.types';
import type { FC } from 'react';

export const AnimatedArrowOverlay: FC<AnimatedArrowOverlayProps> = ({
  isCarrot = true,
  className,
}) => {
  const animatedArrowOverlayWrapper = useRef<HTMLDivElement | null>(null);

  const generatePath = () => {
    if (!animatedArrowOverlayWrapper.current) {
      return '';
    }
    const width = animatedArrowOverlayWrapper.current.offsetWidth - 31;
    const pathArrow = `M0, 0 h${width} l15 16 l-15 16 H0 a21.461 21.461,0,0,0,8.4 -16,21.461 21.461,0,0,0,-8.4 -16 Z`;
    const pathCarrot = `M0, 0 h${width} l15 16 l-15 16 H0 0,0 Z`;

    return isCarrot ? pathCarrot : pathArrow;
  };

  return (
    <E.Container className={className}>
      <E.AnimatedArrowOverlayWrapper ref={animatedArrowOverlayWrapper}>
        <svg
          id="path-defs"
          className="svg-container"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="noise-map"
              x="0"
              y="0"
              width="400"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlinkHref={Assets.noiseTileAlphaTintLarge}
                x="0"
                y="0"
                width="400"
                height="40"
              />
              <animate
                dur="20s"
                repeatCount="indefinite"
                attributeName="y"
                values="0;20;0"
              />
              <animate
                dur="40s"
                repeatCount="indefinite"
                attributeName="x"
                values="0;50;0;-50;0"
              />
            </pattern>
            <pattern
              id="noise-map-offset"
              x="25%"
              y="0"
              width="400"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlinkHref={Assets.noiseTileAlphaTintLarge}
                x="0"
                y="0"
                width="400"
                height="40"
              />
              <animate
                dur="20s"
                repeatCount="indefinite"
                attributeName="y"
                values="0;20;0"
              />
              <animate
                dur="40s"
                repeatCount="indefinite"
                attributeName="x"
                values="25;75;25;-25;25"
              />
            </pattern>
            <path
              id="scalable-path"
              d={generatePath()}
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <mask
              id="mask-dashed-border"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <use
                className="dashed-border"
                xlinkHref="#scalable-path"
                strokeWidth="4"
              />
            </mask>
            <mask
              id="mask-dashed-border-offset"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <use
                className="dashed-border offset"
                xlinkHref="#scalable-path"
                strokeWidth="4"
              />
            </mask>
          </defs>
        </svg>

        <div id="animated-magic-container">
          <svg
            id="animated-magic-low"
            className="svg-container"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#mask-dashed-border)"
              fill="url(#noise-map)"
            />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#mask-dashed-border-offset)"
              fill="url(#noise-map-offset)"
            />
          </svg>
          <svg
            id="animated-magic-high"
            className="svg-container"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#mask-dashed-border)"
              fill="url(#noise-map)"
            />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#mask-dashed-border-offset)"
              fill="url(#noise-map-offset)"
            />
          </svg>
        </div>
      </E.AnimatedArrowOverlayWrapper>
    </E.Container>
  );
};
