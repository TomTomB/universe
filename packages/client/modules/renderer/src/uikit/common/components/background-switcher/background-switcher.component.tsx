import * as C from './background-switcher.styles';
import type { FC } from 'react';

export interface BackgroundSwitcherItem {
  src: string;
  alt: string;
}

export interface BackgroundSwitcherProps {
  items: BackgroundSwitcherItem[];
  currentIndex: number;
  className?: string;
  switchAnimation?: 'pop-in' | 'fade' | 'small-pop' | 'pop-in-fade';
}

export const BackgroundSwitcher: FC<BackgroundSwitcherProps> = ({
  items,
  currentIndex,
  className,
  switchAnimation = 'fade',
}) => {
  return (
    <C.StyledBackgroundSwitcher className={className}>
      {items.map(({ alt, src }, index) => (
        <img
          src={src}
          alt={alt}
          key={index}
          className={currentIndex === index ? switchAnimation : 'hidden'}
        />
      ))}
    </C.StyledBackgroundSwitcher>
  );
};
