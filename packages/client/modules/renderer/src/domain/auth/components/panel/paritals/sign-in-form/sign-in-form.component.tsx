import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Checkbox, FramedSelect, Input, Label } from '@/uikit/forms/components';
import { useYupValidationResolver } from '@/uikit/core/hooks';
import { type FC, useMemo, useState } from 'react';
import * as C from './sign-in-form.styles';
import { useSfxChannel, useSfxVolume } from '@/domain/core/hooks';

interface FormValues {
  password: string;
  email: string;
  staySignedIn: boolean;
}

export const SignInForm: FC = () => {
  const [showRegionLanguageSelects, toggleShowRegionLanguageSelects] =
    useState(false);

  const sfxVolume = useSfxVolume();
  const playSounds = useSfxChannel();

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
  const { register, handleSubmit, formState, control } = useForm<FormValues>({
    resolver,
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });

  return (
    <C.StyledSignInFom noValidate onSubmit={onSubmit}>
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
        control={control}
        playSounds={playSounds}
        soundVolume={sfxVolume}
      />

      <C.RegionLanguageToggleContainer>
        {!showRegionLanguageSelects ? (
          <>
            <Label htmlFor="showRegionLanguageSelectsBtn" isInvalid={false}>
              Region/Language
            </Label>
            <C.RegionLanguageToggle
              type="button"
              id="showRegionLanguageSelectsBtn"
              onClick={() => toggleShowRegionLanguageSelects(true)}
            >
              EU West (English)
              <C.RegionLanguageDropdownArrow></C.RegionLanguageDropdownArrow>
            </C.RegionLanguageToggle>
          </>
        ) : (
          <>
            <FramedSelect
              label="Region"
              id="region-select"
              items={[{ label: 'EU West', value: 'euw' }]}
              name="region"
              value="euw"
              playSounds={playSounds}
            />
            <C.LanguageSelect
              label="Language"
              id="language-select"
              items={[{ label: 'English', value: 'en' }]}
              name="language"
              value="en"
              playSounds={playSounds}
            />
          </>
        )}
      </C.RegionLanguageToggleContainer>

      <C.SignInButton playSounds={playSounds} disabled={!formState.isValid}>
        Sign in
      </C.SignInButton>
    </C.StyledSignInFom>
  );
};
