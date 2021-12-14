import * as C from './modal.styles';
import { PrimaryFlatButton } from '@/uikit/forms/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import { useRef, type FC } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '@/uikit/core/hooks';
import { OverlayHost } from '../base';

export interface ModalProps {
  topRightCloseButton?: {
    variant: 'circle' | 'toast';
    toastWithBackground?: boolean;
    click: (e: React.MouseEvent) => void;
  };
  bottomButtons: {
    buttonText: string;
    click: (e: React.MouseEvent) => void;
  }[];
  show: boolean;
  className?: string;
  backdropClick?: () => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  caret?: boolean;
  disabled?: boolean;
  borderless?: boolean;
  playSounds?: boolean;
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
  topRightCloseButton,
  caret,
  playSounds,
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

  useClickOutside(
    modalRef,
    () => {
      if (show) {
        backdropClick?.();
      }
    },
    true,
  );

  return (
    <OverlayHost>
      {transitionBackdrop(
        (tbStyle, tbVisible) =>
          tbVisible && (
            <C.ModalContainer style={tbStyle}>
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
                          {bottomButtons.map((b) => (
                            <PrimaryFlatButton
                              type="button"
                              key={b.buttonText}
                              onClick={b.click}
                              playSounds={playSounds}
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
          ),
      )}
    </OverlayHost>
  );
};
