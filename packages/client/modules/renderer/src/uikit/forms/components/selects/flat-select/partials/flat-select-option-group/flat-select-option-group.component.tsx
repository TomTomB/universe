import * as C from './flat-select-option-group.styles';
import type { FC } from 'react';

export interface FlatSelectOptionGroupProps {
  name: string;
}

export const FlatSelectOptionGroup: FC<FlatSelectOptionGroupProps> = ({
  children,
  name,
}) => {
  return (
    <C.FlatSelectOptionGroupContainer>
      <C.StyledFlatSelectOptionGroup>
        <C.OptionGroupHeaderText> {name} </C.OptionGroupHeaderText>
      </C.StyledFlatSelectOptionGroup>
      {children}
    </C.FlatSelectOptionGroupContainer>
  );
};
