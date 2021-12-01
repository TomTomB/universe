import { Label } from '../../label';
import { ScrollableStyles } from '@/uikit/common/components';
import { animated } from 'react-spring';
import dropdownArrow from '../assets/images/up-down-arrow.png';
import dropdownArrowLocked from '../assets/images/up-down-arrow-locked.png';
import styled, { css } from 'styled-components';

export const SelectLabel = styled(Label)`
  margin-bottom: 2px;
`;

export const CurrentContainer = styled.dt`
  cursor: pointer;
  border: 1px solid;
  border-image: linear-gradient(
      to top,
      #695625 0%,
      #a9852d 23%,
      #b88d35 93%,
      ${(props) => props.theme.colors.gold[3]} 100%
    )
    1;
  display: flex;
  box-sizing: border-box;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 7px 5px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey.frame50};

  &::after {
    background: url(${dropdownArrow}) center no-repeat;
    pointer-events: none;
    width: 13px;
    height: 18px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0, -50%);
    content: '';
  }
`;

export const CurrentValue = styled.div`
  padding-left: 7px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 16px;
`;

export const OptionsContainer = styled.dd<{ openUpward: boolean }>`
  border: 1px solid;
  border-image: linear-gradient(
      to top,
      #695625,
      ${(props) => props.theme.colors.gold[6]}
    )
    1;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  top: 100%;
  transform-origin: 50% 0;
  max-height: 400px;
  z-index: 2;
  overflow: hidden;
  background: ${(props) => props.theme.colors.black};

  ${ScrollableStyles.StyledScrollable} {
    max-height: 150px;

    .os-content-glue {
      max-height: 150px;
    }
  }

  ${({ openUpward }) =>
    openUpward &&
    css`
      bottom: 100%;
      top: auto;
      margin-top: 1px;
    `}
`;

export const AnimatedOptionsContainer = animated(OptionsContainer);

export const Options = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Select = styled.div<{ active: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  outline: 0;
  font-kerning: normal;
  font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: subpixel-antialiased;
  color: ${(props) => props.theme.colors.grey[1]};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.025em;
  position: relative;
  margin: 0;

  ${({ active }) =>
    !active &&
    css`
      &:hover,
      &:focus-visible {
        ${CurrentContainer} {
          border: 1px solid;
          border-image: linear-gradient(to top, #c89b3c, #f0e6d2) 1;
          background: linear-gradient(
            to top,
            rgba(88, 83, 66, 0.5),
            rgba(30, 35, 40, 0.5)
          );
        }
      }
    `}

  ${({ active }) =>
    active &&
    css`
      ${CurrentContainer} {
        border: 1px solid ${(props) => props.theme.colors.gold[6]};
        color: ${(props) => props.theme.colors.gold[6]};
        &::after {
          background-image: url(${dropdownArrowLocked});
        }
      }
    `}

  &[data-disabled] {
    cursor: default;
    pointer-events: none;
    ${CurrentContainer} {
      border: 1px solid ${(props) => props.theme.colors.grey[3]};
      color: ${(props) => props.theme.colors.grey[3]};
      &::after {
        filter: grayscale(100%);
        opacity: 0.35;
      }
    }
  }
`;
