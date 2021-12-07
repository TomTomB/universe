import { AnimatedArrowOverlay } from '@/uikit/common/components';
import type { FC } from 'react';
import * as C from './arrow-footer.styles';

export interface ArrowFooterProps {
  hideCloseButton?: boolean;
  isConfirmDisabled?: boolean;
  isCloseDisabled?: boolean;
  isCompleted?: boolean;
  isBack?: boolean;
  isDecorated?: boolean;
}

export const ArrowFooter: FC<ArrowFooterProps> = ({
  hideCloseButton,
  isConfirmDisabled,
  isCloseDisabled,
  isCompleted,
  isBack,
  isDecorated,
  children,
}) => {
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
        >
          <C.LeftConfirm
            completed={isCompleted}
            closeHidden={hideCloseButton}
          />
          <C.MiddleConfirm completed={isCompleted}>{children}</C.MiddleConfirm>
          <C.RightConfirm completed={isCompleted} />

          <AnimatedArrowOverlay isCarrot={hideCloseButton} />
        </C.ConfirmButton>

        {!hideCloseButton && (
          <C.CloseButton disabled={isCloseDisabled} completed={isCompleted}>
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
