import { css } from 'styled-components';
import { EASING } from '../constants';

export const transition = ({
  properties,
  duration,
  timingFunc,
  willChange,
}: {
  properties: string[];
  duration?: number;
  timingFunc?: string;
  willChange?: string;
}) => css`
  transition-property: ${properties.join(', ')};
  transition-timing-function: ${timingFunc ?? EASING.default};
  transition-duration: ${duration ?? 150}ms;

  ${willChange &&
  css`
    will-change: ${willChange};
  `}
`;
