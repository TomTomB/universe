import type { FC } from 'react';
import * as C from './arrow-footer.styles';

export interface ArrowFooterProps {
  hideCloseButton?: boolean;
  isConfirmDisabled?: boolean;
  isCloseDisabled?: boolean;
  isCompleted?: boolean;
  isBack?: boolean;
}

export const ArrowFooter: FC<ArrowFooterProps> = ({
  hideCloseButton,
  isConfirmDisabled,
  isCloseDisabled,
  isCompleted,
  isBack,
  children,
}) => {
  return (
    <C.StyledArrowFooter>
      <C.Decoration closeHidden={hideCloseButton}>
        <C.DecorationChildLeft closeHidden={hideCloseButton} />
      </C.Decoration>

      <C.ConfirmButtonContainer>
        <C.BorderBg>
          <C.BorderLeftBg closeHidden={hideCloseButton} />
          <C.BorderMiddleBg closeHidden={hideCloseButton} />
          <C.BorderRightBg />
        </C.BorderBg>

        <C.ConfirmButton disabled={isConfirmDisabled} completed={isCompleted}>
          <C.LeftConfirm
            completed={isCompleted}
            closeHidden={hideCloseButton}
          />
          <C.MiddleConfirm completed={isCompleted}>{children}</C.MiddleConfirm>
          <C.RightConfirm completed={isCompleted} />
        </C.ConfirmButton>

        {!hideCloseButton && (
          <C.CloseButton disabled={isCloseDisabled} completed={isCompleted}>
            <C.CloseIcon completed={isCompleted} isBack={isBack} />
          </C.CloseButton>
        )}
      </C.ConfirmButtonContainer>

      <C.Decoration closeHidden={hideCloseButton}>
        <C.DecorationChildRight closeHidden={hideCloseButton} />
      </C.Decoration>
    </C.StyledArrowFooter>
  );
};
