import * as C from './input.styles';
import { useRef, useState, type FC } from 'react';
import { SystemTooltip, TooltipText } from '@/uikit/overlay/components';
import { FormField } from '../base';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useTransition } from 'react-spring';
import classNames from 'classnames';
import { type FieldError, useController } from 'react-hook-form';
import type { ControlledInput } from '../../types';

export interface InputProps extends ControlledInput<string> {
  label: string;
  type?: string;
  placeholder?: string;
  showError?: boolean;
  error?: FieldError;
  spellcheck?: boolean;
}

export const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  error,
  spellcheck,
  type = 'text',
  showError = true,
  isDisabled,
  control,
  name,
  className,
  defaultValue,
  onChange,
}) => {
  const triggerShowPasswordCheckboxRef = useRef<HTMLInputElement>(null);

  const controller = useController({ name, control, defaultValue });

  const [showPassword, setShowPassword] = useState(false);

  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField className={className}>
      <C.InputLabel htmlFor={id} isInvalid={!!error} disabled={isDisabled}>
        {label}
      </C.InputLabel>
      <C.FlatInput
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        className={classNames({
          'is-invalid': error,
          'is-password-field': type === 'password',
        })}
        placeholder={placeholder}
        type={showPassword ? 'text' : type}
        disabled={isDisabled}
        name={controller.field.name}
        onChange={(e) => {
          controller.field.onChange(e.target.value);
          onChange?.(e.target.value);
        }}
        onBlur={controller.field.onBlur}
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

          <SystemTooltip triggerRef={triggerShowPasswordCheckboxRef}>
            <TooltipText>
              {showPassword ? 'Hide password' : 'Show password'}
            </TooltipText>
          </SystemTooltip>
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
