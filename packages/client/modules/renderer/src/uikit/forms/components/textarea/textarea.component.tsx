import * as C from './textarea.styles';
import { FormField } from '../base';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import type { FC } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';

export interface TextareaProps {
  id: string;
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  placeholder?: string;
  showError?: boolean;
  disabled?: boolean;
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
  disabled = false,
  register,
}) => {
  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField>
      <C.TextareaLabel htmlFor={id} isInvalid={!!error} disabled={disabled}>
        {label}
      </C.TextareaLabel>
      <C.StyledTextarea
        disabled={disabled}
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        {...register?.(name)}
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
