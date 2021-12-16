import styled, { css } from 'styled-components';
import type { NotificationToggleButtonType } from './notification-toggle-button.types';

import infoActive from './assets/images/button-ticker-blue-active.png';
import infoHover from './assets/images/button-ticker-blue-hover.png';
import info from './assets/images/button-ticker-blue.png';
import errorActive from './assets/images/button-ticker-red-active.png';
import errorHover from './assets/images/button-ticker-red-hover.png';
import error from './assets/images/button-ticker-red.png';
import warningActive from './assets/images/button-ticker-yellow-active.png';
import warningHover from './assets/images/button-ticker-yellow-hover.png';
import warning from './assets/images/button-ticker-yellow.png';

export const getBackground = (type: NotificationToggleButtonType) => {
  switch (type) {
    case 'info':
      return css`
        background-image: url(${info});

        &:hover,
        &:focus-visible {
          background-image: url(${infoHover});
        }

        &:active {
          background-image: url(${infoActive});
        }
      `;

    case 'warning':
      return css`
        background-image: url(${warning});

        &:hover,
        &:focus-visible {
          background-image: url(${warningHover});
        }

        &:active {
          background-image: url(${warningActive});
        }
      `;

    case 'error':
      return css`
        background-image: url(${error});

        &:hover,
        &:focus-visible {
          background-image: url(${errorHover});
        }

        &:active {
          background-image: url(${errorActive});
        }
      `;

    default:
      return css``;
  }
};

export const StyledNotificationToggleButton = styled.button<{
  variant: NotificationToggleButtonType;
}>`
  height: 32px;
  width: 32px;
  ${({ variant }) => getBackground(variant)}

  background-size: contain;
  pointer-events: auto;
  position: relative;
`;
