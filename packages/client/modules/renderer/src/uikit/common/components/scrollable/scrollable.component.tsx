import { generateShortId } from '@/core/util';
import type { Direction } from '@/types';
import { type FC, useEffect, useMemo, useState } from 'react';
import * as C from './scrollable.styles';

export interface ScrollableProps {
  className?: string;
  maskOverflow?: boolean;
  scrollDirection?: Direction;
  observeTopSelector?: string;
  observeBottomSelector?: string;
  observeLeftSelector?: string;
  observeRightSelector?: string;
}

export const Scrollable: FC<ScrollableProps> = ({
  children,
  className,
  maskOverflow,
  observeBottomSelector,
  observeLeftSelector,
  observeRightSelector,
  observeTopSelector,
  scrollDirection,
}) => {
  const scrollContainerId = useMemo(() => {
    return generateShortId();
  }, []);
  const [scrolledTop, setScrolledTop] = useState(false);
  const [scrolledBottom, setScrolledBottom] = useState(false);
  const [scrolledLeft, setScrolledLeft] = useState(false);
  const [scrolledRight, setScrolledRight] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const targetTop = document.querySelector(
      `#${scrollContainerId} ${observeTopSelector}`,
    );
    const targetBottom = document.querySelector(
      `#${scrollContainerId} ${observeBottomSelector}`,
    );

    const targetLeft = document.querySelector(
      `#${scrollContainerId} ${observeLeftSelector}`,
    );
    const targetRight = document.querySelector(
      `#${scrollContainerId} ${observeRightSelector}`,
    );

    const root = document.querySelector(`#${scrollContainerId}`);

    if (maskOverflow) {
      const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;

          if (target === targetTop) {
            setScrolledTop(isIntersecting);
          }
          if (target === targetBottom) {
            setScrolledBottom(isIntersecting);
          }
          if (target === targetLeft) {
            setScrolledLeft(isIntersecting);
          }
          if (target === targetRight) {
            setScrolledRight(isIntersecting);
          }
        });
      };

      observer = new IntersectionObserver(handleIntersect, {
        threshold: [1],
        root,
      });

      if (targetTop && targetBottom) {
        observer.observe(targetTop);
        observer.observe(targetBottom);
      }
      if (targetLeft && targetRight) {
        observer.observe(targetLeft);
        observer.observe(targetRight);
      }
    }
    return () => {
      if (targetTop && targetBottom) {
        observer?.unobserve(targetTop);
        observer?.unobserve(targetBottom);
      }
      if (targetLeft && targetRight) {
        observer?.unobserve(targetLeft);
        observer?.unobserve(targetRight);
      }
    };
  }, [
    maskOverflow,
    scrollContainerId,
    observeTopSelector,
    observeBottomSelector,
    observeLeftSelector,
    observeRightSelector,
    scrollDirection,
  ]);

  return (
    <C.StyledScrollable
      className={className}
      id={scrollContainerId}
      data-scrolled-top={scrolledTop}
      data-scrolled-bottom={scrolledBottom}
      data-scrolled-left={scrolledLeft}
      data-scrolled-right={scrolledRight}
    >
      {children}
    </C.StyledScrollable>
  );
};
