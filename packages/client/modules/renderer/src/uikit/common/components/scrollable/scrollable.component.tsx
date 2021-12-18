import type { Direction } from '@/types';
import { type FC, useEffect, useState, useRef } from 'react';
import * as C from './scrollable.styles';

export interface ScrollableProps {
  className?: string;
  maskOverflow?: boolean;
  scrollDirection?: Direction;
  overlay?: boolean;
}

export const Scrollable: FC<ScrollableProps> = ({
  children,
  className,
  maskOverflow,
  scrollDirection,
  overlay,
}) => {
  const [scrolledStart, setScrolledStart] = useState(false);
  const [scrolledEnd, setScrolledEnd] = useState(false);

  const startPointRef = useRef<HTMLDivElement>(null);
  const endPointRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const startPoint = startPointRef.current;
    const endPoint = endPointRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!startPoint || !endPoint || !scrollContainer) {
      return;
    }

    if (maskOverflow) {
      const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;

          if (target === startPoint) {
            setScrolledStart(isIntersecting);
          }
          if (target === endPoint) {
            setScrolledEnd(isIntersecting);
          }
        });
      };

      observer = new IntersectionObserver(handleIntersect, {
        threshold: [1],
        root: scrollContainer,
      });

      observer.observe(startPoint);
      observer.observe(endPoint);
    }
    return () => {
      if (startPoint && endPoint) {
        observer?.unobserve(startPoint);
        observer?.unobserve(endPoint);
      }
    };
  }, [
    maskOverflow,
    scrollDirection,
    startPointRef,
    endPointRef,
    scrollContainerRef,
  ]);

  return (
    <C.StyledScrollable
      className={className}
      ref={scrollContainerRef}
      overlay={overlay}
      scrollDirection={scrollDirection}
      scrolledStart={scrolledStart}
      scrolledEnd={scrolledEnd}
    >
      <div ref={startPointRef} />
      {children}
      <div ref={endPointRef} />
    </C.StyledScrollable>
  );
};
