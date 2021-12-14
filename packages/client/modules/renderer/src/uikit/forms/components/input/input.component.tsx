import * as C from './input.styles';
import { useRef, useState, type FC } from 'react';
// import { Tooltip, TooltipText } from '@uikit/components/tooltip';
import { FormField } from '../base';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import classNames from 'classnames';
import type { FieldError, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  id: string;
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type?: string;
  placeholder?: string;
  showError?: boolean;
  disabled?: boolean;
  error?: FieldError;
  spellcheck?: boolean;
}

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  placeholder,
  error,
  spellcheck,
  type = 'text',
  showError = true,
  disabled = false,
  register,
}) => {
  const triggerShowPasswordCheckboxRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField>
      <C.InputLabel htmlFor={id} isInvalid={!!error} disabled={disabled}>
        {label}
      </C.InputLabel>
      <C.FlatInput
        {...register?.(name)}
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        className={classNames({
          'is-invalid': error,
          'is-password-field': type === 'password',
        })}
        placeholder={placeholder}
        type={showPassword ? 'text' : type}
        disabled={disabled}
      />
      {type === 'password' && (
        <>
          <C.TogglePasswordCheckbox
            type="checkbox"
            className={classNames({
              'is-shown': showPassword,
            })}
            onChange={(event) => setShowPassword(event.target.checked)}
            checked={showPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            ref={triggerShowPasswordCheckboxRef}
          />

          {/* <Tooltip triggerRef={triggerShowPasswordCheckboxRef.current}>
            <TooltipText>
              {showPassword ? 'Hide password' : 'Show password'}
            </TooltipText>
          </Tooltip> */}
        </>
      )}
      {showError && (
        <C.ErrorContainer>
          {transition(
            (style, error) =>
              error && (
                <C.ErrorParagraph style={style} role="alert">
                  {error?.message}
                </C.ErrorParagraph>
              ),
          )}
        </C.ErrorContainer>
      )}
    </FormField>
  );
};
