import * as C from './flyout-frame.styles';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import classNames from 'classnames';
import { type FC, useRef } from 'react';
import { useClickOutside } from '@/uikit/core/hooks';

export interface FlyoutFrameProps {
  className?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  closeButtonClick?: (e: React.MouseEvent) => void;
  onClickOutside?: () => void;
  showCloseButton?: boolean;
  animated?: boolean;
  show?: boolean;
}

export const FlyoutFrame: FC<FlyoutFrameProps> = ({
  className,
  children,
  showCloseButton,
  closeButtonClick,
  onClickOutside,
  animated,
  show,
  position = 'bottom',
}) => {
  const flyoutFrameRef = useRef<HTMLDivElement | null>(null);
  const isTopOrBottom = position === 'top' || position === 'bottom';

  useClickOutside(flyoutFrameRef, () => {
    if (show) {
      onClickOutside?.();
    }
  });

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
    config: { tension: 300, friction: 20 },
    from: {
      opacity: animated ? 0 : 1,
      transform: animated
        ? `translate${isTopOrBottom ? 'Y' : 'X'}(-20px)`
        : 'none',
    },
    enter: {
      opacity: animated ? 1 : 1,
      transform: animated ? `translate${isTopOrBottom ? 'Y' : 'X'}(0)` : 'none',
    },
    leave: {
      opacity: animated ? 0 : 1,
      transform: animated
        ? `translate${isTopOrBottom ? 'Y' : 'X'}(-10px)`
        : 'none',
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
    <C.StyledFlyoutFrame className={className}>
      {transitionBase(
        (styleBase, showBase) =>
          showBase && (
            <C.StyledFlyoutFrameInner
              style={styleBase}
              className={classNames(position, { animated }, { show })}
              ref={flyoutFrameRef}
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
            </C.StyledFlyoutFrameInner>
          ),
      )}
    </C.StyledFlyoutFrame>
  );
};
