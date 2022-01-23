import * as C from './textarea.styles';
import { FormField } from '../base';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import type { FC } from 'react';
import { type FieldError, useController } from 'react-hook-form';
import type { ControlledInput } from '../../types';

export interface TextareaProps extends ControlledInput<string> {
  label: string;
  placeholder?: string;
  showError?: boolean;
  error?: FieldError;
  spellcheck?: boolean;
}

export const Textarea: FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,
  error,
  spellcheck,
  showError = true,
  isDisabled,
  control,
  className,
  defaultValue,
  onChange,
}) => {
  const controller = useController({ name, control, defaultValue });

  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField className={className}>
      <C.TextareaLabel htmlFor={id} isInvalid={!!error} disabled={isDisabled}>
        {label}
      </C.TextareaLabel>
      <C.StyledTextarea
        disabled={isDisabled}
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          controller.field.onChange(e.target.value);
          onChange?.(e.target.value);
        }}
      />
      {showError && (
        <C.ErrorContainer>
          {transition(
            (style, error) =>
              error && (
                <C.ErrorParagraph style={style} role="alert">
                  {error.message}
                </C.ErrorParagraph>
              ),
          )}
        </C.ErrorContainer>
      )}
    </FormField>
  );
};
