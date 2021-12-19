import * as C from './modal.styles';
import { PrimaryFlatButton } from '@/uikit/forms/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import { useEffect, useMemo, useRef, type FC } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '@/uikit/core/hooks';
import { OverlayHost } from '../base';
import { generateShortId } from '@/core/util';
import FocusTrap from 'focus-trap-react';

export interface ModalProps {
  topRightCloseButton?: {
    variant: 'circle' | 'toast';
    toastWithBackground?: boolean;
    click: (e: React.MouseEvent) => void;
  };
  bottomButtons: {
    initialFocus?: boolean;
    buttonText: string;
    click: (e: React.MouseEvent) => void;
  }[];
  show: boolean;
  labeledById: string;
  describedById: string;
  className?: string;
  backdropClick?: () => void;
  closeFn: () => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  caret?: boolean;
  disabled?: boolean;
  borderless?: boolean;
  playSounds: boolean;
  soundVolume: number;
}

export const Modal: FC<ModalProps> = ({
  children,
  bottomButtons,
  show,
  className,
  backdropClick,
  position = 'bottom',
  disabled,
  borderless,
  labeledById,
  describedById,
  closeFn,
  topRightCloseButton,
  caret,
  playSounds,
  soundVolume,
}) => {
  const transitionModal = useTransition(show, {
    config: { tension: 300, friction: 20 },
    from: { transform: 'scale(0.6)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(0.8)' },
  });

  const transitionBackdrop = useTransition(show, {
    config: springConfigHarsh,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const modalRef = useRef<HTMLDivElement>(null);

  const topRightCloseButtonId = useMemo(() => generateShortId(), []);

  useClickOutside(
    modalRef,
    () => {
      if (show) {
        backdropClick?.();
      }
    },
    true,
  );

  useEffect(() => {
    const buttonToFocus = bottomButtons.findIndex(
      ({ initialFocus }) => !!initialFocus,
    );

    if (buttonToFocus !== -1) {
      const btn = bottomButtons[buttonToFocus];

      document
        .getElementById(
          `${btn.buttonText.toLowerCase()}-button-${buttonToFocus}`,
        )
        ?.focus();
    } else if (topRightCloseButton) {
      document.getElementById(topRightCloseButtonId)?.focus();
    }
  }, [bottomButtons, topRightCloseButton, topRightCloseButtonId]);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFn();
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [closeFn]);

  return (
    <OverlayHost>
      {transitionBackdrop(
        (tbStyle, tbVisible) =>
          tbVisible && (
            <FocusTrap>
              <C.ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby={labeledById}
                aria-describedby={describedById}
                style={tbStyle}
                onKeyUp={console.log}
              >
                {transitionModal(
                  (mStyles, mVisible) =>
                    mVisible && (
                      <C.StyledModal
                        style={mStyles}
                        className={classNames(
                          className,
                          position,
                          { caret },
                          { disabled },
                          { borderless },
                          { withButtons: bottomButtons.length },
                        )}
                        ref={modalRef}
                      >
                        <C.StyledModalSubBorder />

                        {children}

                        {bottomButtons.length && (
                          <C.ModalButtonGroup>
                            {bottomButtons.map((b, i) => (
                              <PrimaryFlatButton
                                id={`${b.buttonText.toLowerCase()}-button-${i}`}
                                type="button"
                                key={b.buttonText}
                                onClick={b.click}
                                playSounds={playSounds}
                                soundVolume={soundVolume}
                              >
                                {b.buttonText}
                              </PrimaryFlatButton>
                            ))}
                          </C.ModalButtonGroup>
                        )}

                        {topRightCloseButton && (
                          <>
                            {topRightCloseButton.variant === 'circle' && (
                              <C.ModalTopCloseContainer>
                                <C.ModalTopCloseButton
                                  type="button"
                                  label="Close"
                                  id={topRightCloseButtonId}
                                  onClick={topRightCloseButton.click}
                                />
                              </C.ModalTopCloseContainer>
                            )}
                            {topRightCloseButton.variant === 'toast' && (
                              <C.ToastCloseButton
                                type="button"
                                aria-label="Close"
                                withBackground={
                                  topRightCloseButton.toastWithBackground
                                }
                                onClick={topRightCloseButton.click}
                              />
                            )}
                          </>
                        )}
                      </C.StyledModal>
                    ),
                )}
              </C.ModalContainer>
            </FocusTrap>
          ),
      )}
    </OverlayHost>
  );
};
