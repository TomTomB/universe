import * as C from './filter-fader.styles';
import type { FC } from 'react';

export interface FilterFaderProps {
  className?: string;
}

export const FilterFader: FC<FilterFaderProps> = ({ children, className }) => {
  return (
    <C.StyledFilterFader className={className}>
      {children}
      <C.Duplicate>{children}</C.Duplicate>
    </C.StyledFilterFader>
  );
};
