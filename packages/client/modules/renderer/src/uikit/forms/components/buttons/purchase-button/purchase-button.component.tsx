import * as C from './purchase-button.styles';
import type { FC } from 'react';
import type { ButtonProps } from '../button.types';
import type { Currency } from '@/types';

export interface PurchaseButtonProps extends ButtonProps {
  currencyType: Currency;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({
  children,
  type,
  className,
  disabled,
  onClick,
  currencyType,
}) => {
  return (
    <C.StyledPurchaseButton
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <C.OuterContainer>
        <C.InnerContainer>
          <C.ButtonContainer>
            <C.OuterBorder />
            <C.BorderIdle />
            <C.BorderTransition />
            {currencyType === 'rp' && <C.ContentIconRp />}
            {currencyType === 'be' && <C.ContentIconBe />}
            <C.ContentValue>{children}</C.ContentValue>
          </C.ButtonContainer>
        </C.InnerContainer>
      </C.OuterContainer>
    </C.StyledPurchaseButton>
  );
};
