import { ScrollableStyles } from '@/uikit/common/components';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import upDownArrow from '../assets/images/up-down-arrow.png';
import upDownArrowLocked from '../assets/images/up-down-arrow-locked.png';

export const OptionsContainer = styled.div<{
  openUpward: boolean;
  active: boolean;
}>`
  background-color: #010a13;
  position: absolute;
  max-height: 400px;
  overflow: hidden;
  transform-origin: top left;
  border: thin solid transparent;
  border-image: linear-gradient(to top, #695625, #463714) 1;
  border-width: 2px;
  padding-top: 40px;
  width: 400px;
  max-width: 400px;

  ${ScrollableStyles.StyledScrollable} {
    max-height: 150px;
  }

  ${({ openUpward }) =>
    openUpward &&
    css`
      bottom: 100%;
      top: auto;
      margin: 0;
      transform-origin: bottom left;

      margin-bottom: -42px;
      padding: 0 0 40px 0;
    `}
`;

export const AnimatedOptionsContainer = animated(OptionsContainer);

export const Current = styled.div`
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  color: #cdbe91;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background: none;
  position: absolute;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0 25px 0 10px;
  cursor: pointer;
  max-width: 400px;

  [data-disabled='true'] & {
    color: #3c3c41;

    ::after {
      -webkit-filter: grayscale(100%);
      opacity: 0.35;
    }
  }

  &::after {
    position: absolute;
    content: '';
    background: url(${upDownArrow}) center no-repeat;
    width: 13px;
    height: 19px;
    margin: 0 0 0 7px;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

export const StyledFlatSelect = styled.div<{ active: boolean }>`
  display: inline-flex;
  flex-direction: column;
  height: 40px;
  outline: 0;
  position: relative;
  max-width: 400px;

  &[data-disabled='true'] {
    cursor: default;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    ${Current} {
      color: #f0e6d2;

      ::after {
        -webkit-filter: brightness(2.2);
      }
    }
  }

  ${({ active }) =>
    active &&
    css`
      z-index: auto;

      :hover ${Current} {
        color: #785a28;

        ::after {
          -webkit-filter: none;
        }
      }

      ${Current} {
        color: #785a28;

        ::after {
          background-image: url(${upDownArrowLocked});
        }
      }
    `}
`;
