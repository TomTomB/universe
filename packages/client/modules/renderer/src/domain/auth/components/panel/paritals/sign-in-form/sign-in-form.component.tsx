import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Checkbox, Input, Label } from '@/uikit/forms/components';
import { useYupValidationResolver } from '@/uikit/core/hooks';
import { type FC, useMemo } from 'react';
import * as C from './sign-in-form.styles';

interface FormValues {
  password: string;
  email: string;
  staySignedIn: boolean;
}

export const SignInForm: FC = () => {
  const validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup.string().required('Password is required'),
      }),
    [],
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver,
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });

  return (
    <form noValidate onSubmit={onSubmit}>
      <Input
        name="email"
        spellcheck={false}
        label="E-Mail"
        id="kuchen"
        type="email"
        error={formState.errors.email}
        register={register}
      />
      <Input
        spellcheck={false}
        label="Password"
        name="password"
        id="password"
        type="password"
        error={formState.errors.password}
        register={register}
      />
      <Checkbox
        label="Remember Me"
        name="staySignedIn"
        id="staySignedIn"
        register={register}
        playSounds
      />

      <C.RegionLanguageToggleContainer>
        <Label htmlFor="showRegionLanguageSelectsBtn" isInvalid={false}>
          Region/Language
        </Label>
        <C.RegionLanguageToggle type="button" id="showRegionLanguageSelectsBtn">
          EU West (English)
          <C.RegionLanguageDropdownArrow></C.RegionLanguageDropdownArrow>
        </C.RegionLanguageToggle>
      </C.RegionLanguageToggleContainer>

      <C.SignInButton playSounds disabled={!formState.isValid}>
        Sign in
      </C.SignInButton>
    </form>
  );
};
