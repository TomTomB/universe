import { FlyoutFrame } from '@/uikit/overlay/components';
import styled, { css } from 'styled-components';

export const StyledPrimaryNavigation = styled.div<{
  showTickerOnly: boolean;
}>`
  position: fixed;
  top: 2px;
  left: 1px;
  right: 1px;
  z-index: 100001;
  height: 79px;
  display: flex;
  align-items: center;

  ${({ showTickerOnly }) =>
    showTickerOnly
      ? css`
          margin-left: 215px;
          margin-right: 223px;
          pointer-events: none;
        `
      : css``}
`;

export const NotificationFrame = styled(FlyoutFrame)`
  transform: translateX(calc(-50% + 16px));
  top: 70px;
`;

export const NotificationList = styled.ul`
  width: 300px;
  max-height: 400px;
  overflow: overlay;
  pointer-events: auto;
  padding: 18px;
`;

export const NotificationListItem = styled.li`
  padding: 15px 0;
  border-top: thin solid #3c3c41;

  &:first-of-type {
    border-top: none;
    padding-top: 0;
    margin-top: -4px;
  }

  &:last-of-type {
    margin-bottom: -4px;
    padding-bottom: 0;
  }
`;

export const NotificationItemHeader = styled.h5`
  width: calc(100% - 15px);
  padding: 0 15px 0 0;
  color: #f0e6d2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0 10px;
`;
