import classNames from 'classnames';
import type { FC } from 'react';
import * as C from './tab-navigation-item.styles';

export interface TabNavigationItemProps {
  className?: string;
  disabled?: boolean;
  alert?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export const TabNavigationItem: FC<TabNavigationItemProps> = ({
  className,
  children,
  disabled,
  alert,
  onClick,
  isActive,
}) => {
  return (
    <C.StyledTabNavigationItem className={className}>
      <C.ItemLink
        disabled={disabled}
        tabIndex={isActive || disabled ? -1 : 0}
        onClick={onClick}
        className={classNames({ active: isActive })}
      >
        <C.TextContainer>
          <C.TextSpan> {children} </C.TextSpan>
          {alert && <C.AlertImage />}
        </C.TextContainer>
      </C.ItemLink>
    </C.StyledTabNavigationItem>
  );
};
