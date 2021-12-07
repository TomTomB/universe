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

export interface ArrowFooterProps {
  hideCloseButton?: boolean;
  isConfirmDisabled?: boolean;
  isCloseDisabled?: boolean;
  isCompleted?: boolean;
  isBack?: boolean;
  isDecorated?: boolean;
  soundType?: 'game-select' | 'lobby';
  playSounds?: boolean;
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
  children,
}) => {
  const closeClickAudio = useAudio(
    closeClickFile,
    isCloseDisabled || !playSounds,
  );
  const closeHoverAudio = useAudio(
    closeHoverFile,
    isCloseDisabled || !playSounds,
  );

  const confirmClickAudio = useAudio(
    soundType === 'lobby' ? findMatchClickFile : gameSelectClickFile,
    isConfirmDisabled || !playSounds,
  );
  const confirmHoverAudio = useAudio(
    soundType === 'lobby' ? findMatchHoverFile : gameSelectHoverFile,
    isConfirmDisabled || !playSounds,
  );

  return (
    <C.StyledArrowFooter>
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
          {...confirmClickAudio.active}
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
            {...closeClickAudio.active}
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
