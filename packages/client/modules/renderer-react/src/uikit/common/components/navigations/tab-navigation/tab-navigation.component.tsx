import type { FC } from 'react';
import * as C from './tab-navigation.styles';

export interface TabNavigationProps {
  className?: string;
}

export const TabNavigation: FC<TabNavigationProps> = ({
  className,
  children,
}) => {
  return (
    <C.StyledTabNavigation className={className}>
      <C.NavigationBarList> {children} </C.NavigationBarList>
    </C.StyledTabNavigation>
  );
};
