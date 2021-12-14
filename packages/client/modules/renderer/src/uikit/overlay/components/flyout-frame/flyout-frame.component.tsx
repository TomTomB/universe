import * as C from './flyout-frame.styles';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import classNames from 'classnames';
import type { FC } from 'react';
import { OverlayHost } from '../base';

export interface FlyoutFrameProps {
  className?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  closeButtonClick?: (e: React.MouseEvent) => void;
  showCloseButton?: boolean;
  animated?: boolean;
  show?: boolean;
}

export const FlyoutFrame: FC<FlyoutFrameProps> = ({
  className,
  children,
  showCloseButton,
  closeButtonClick,
  animated,
  show,
  position = 'bottom',
}) => {
  const isTopOrBottom = position === 'top' || position === 'bottom';

  const transitionsBorder = useTransition(show, {
    config: springConfigHarsh,
    from: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(0.5)` : 'none',
    },
    enter: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(1)` : 'none',
    },
    leave: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(0.5)` : 'none',
    },
  });

  const transitionBase = useTransition(show, {
    config: springConfigHarsh,
    from: {
      opacity: animated ? 0 : 1,
    },
    enter: {
      opacity: animated ? 1 : 1,
    },
    leave: {
      opacity: animated ? 0 : 1,
    },
  });

  const transitionFrameInner = useTransition(show, {
    config: springConfigHarsh,
    from: {
      WebkitMaskSize: animated
        ? isTopOrBottom
          ? '50% 100%'
          : '100% 50%'
        : '100% 100%',
    },
    enter: {
      WebkitMaskSize: '100% 100%',
    },
    leave: {
      WebkitMaskSize: animated
        ? isTopOrBottom
          ? '50% 100%'
          : '100% 50%'
        : '100% 100%',
    },
  });

  return (
    <OverlayHost>
      {transitionBase(
        (styleBase, showBase) =>
          showBase && (
            <C.StyledFlyoutFrame
              style={{
                opacity: styleBase.opacity?.to({
                  range: [0, 0.25, 1],
                  output: [0, 0.75, 1],
                }),
              }}
              className={classNames(
                className,
                position,
                { animated },
                { show },
              )}
            >
              {transitionsBorder(
                (style, show) => show && <C.Border style={style} />,
              )}
              {transitionsBorder(
                (style, show) => show && <C.SubBorder style={style} />,
              )}
              <C.Caret />
              {transitionFrameInner(
                (style, show) =>
                  show && (
                    <C.FlyoutFrameInner style={style}>
                      {children}
                    </C.FlyoutFrameInner>
                  ),
              )}
              {showCloseButton && !animated && (
                <C.CloseButtonContainer>
                  <C.StyledCloseButton
                    label="Close"
                    type="button"
                    onClick={closeButtonClick}
                  />
                </C.CloseButtonContainer>
              )}
            </C.StyledFlyoutFrame>
          ),
      )}
    </OverlayHost>
  );
};
