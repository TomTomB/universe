import { AnimatedArrowOverlay } from '@/uikit/common/components';
import type { FC } from 'react';
import * as C from './arrow-footer.styles';
import { useAudio } from '@/uikit/core/hooks';

import gameSelectClickFile from './assets/sounds/sfx-gameselect-button-confirm-click.ogg';
import gameSelectHoverFile from './assets/sounds/sfx-gameselect-button-confirm-hover.ogg';
import findMatchClickFile from './assets/sounds/sfx-lobby-button-find-match-click.ogg';
import findMatchHoverFile from './assets/sounds/sfx-lobby-button-find-match-hover.ogg';
import closeClickFile from './assets/sounds/sfx-lobby-button-quit-click.ogg';
import closeHoverFile from './assets/sounds/sfx-lobby-button-quit-hover.ogg';
import type { WithSound } from '../../../types';

export interface ArrowFooterProps extends WithSound {
  hideCloseButton?: boolean;
  isConfirmDisabled?: boolean;
  isCloseDisabled?: boolean;
  isCompleted?: boolean;
  isBack?: boolean;
  isDecorated?: boolean;
  soundType?: 'game-select' | 'lobby';
  className?: string;
  confirmType?: 'button' | 'submit' | 'reset' | undefined;
  closeType?: 'button' | 'submit' | 'reset' | undefined;
  onConfirmClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onCloseClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export const ArrowFooter: FC<ArrowFooterProps> = ({
  hideCloseButton,
  isConfirmDisabled,
  isCloseDisabled,
  isCompleted,
  isBack,
  isDecorated,
  soundType,
  playSounds,
  soundVolume,
  className,
  onCloseClick,
  onConfirmClick,
  closeType,
  confirmType,
  children,
}) => {
  const closeClickAudio = useAudio(
    closeClickFile,
    isCloseDisabled || !playSounds,
    soundVolume,
  );
  const closeHoverAudio = useAudio(
    closeHoverFile,
    isCloseDisabled || !playSounds,
    soundVolume,
  );

  const confirmClickAudio = useAudio(
    soundType === 'lobby' ? findMatchClickFile : gameSelectClickFile,
    isConfirmDisabled || !playSounds,
    soundVolume,
  );
  const confirmHoverAudio = useAudio(
    soundType === 'lobby' ? findMatchHoverFile : gameSelectHoverFile,
    isConfirmDisabled || !playSounds,
    soundVolume,
  );

  return (
    <C.StyledArrowFooter className={className}>
      {isDecorated && (
        <C.Decoration>
          <C.DecorationChildLeft />
        </C.Decoration>
      )}

      <C.ConfirmButtonContainer>
        <C.BorderBg>
          <C.BorderLeftBg closeHidden={hideCloseButton} />
          <C.BorderMiddleBg closeHidden={hideCloseButton} />
          <C.BorderRightBg />
        </C.BorderBg>

        <C.ConfirmButton
          disabled={isConfirmDisabled}
          completed={isCompleted}
          closeHidden={hideCloseButton}
          type={confirmType ?? 'button'}
          onClick={(e) => {
            onConfirmClick?.(e);
            confirmClickAudio.active.onClick();
          }}
          {...confirmHoverAudio.hover}
        >
          <C.LeftConfirm
            completed={isCompleted}
            closeHidden={hideCloseButton}
          />
          <C.MiddleConfirm completed={isCompleted}>{children}</C.MiddleConfirm>
          <C.RightConfirm completed={isCompleted} />

          <AnimatedArrowOverlay isCarrot={!!hideCloseButton} />
        </C.ConfirmButton>

        {!hideCloseButton && (
          <C.CloseButton
            disabled={isCloseDisabled}
            completed={isCompleted}
            type={closeType ?? 'button'}
            onClick={(e) => {
              onCloseClick?.(e);
              closeClickAudio.active.onClick();
            }}
            {...closeHoverAudio.hover}
          >
            <C.CloseIcon completed={isCompleted} isBack={isBack} />
          </C.CloseButton>
        )}
      </C.ConfirmButtonContainer>

      {isDecorated && (
        <C.Decoration>
          <C.DecorationChildRight />
        </C.Decoration>
      )}
    </C.StyledArrowFooter>
  );
};
