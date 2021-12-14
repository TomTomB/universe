import { useForm } from 'react-hook-form';
import { generateShortId } from '@/core/util';
import * as yup from 'yup';
import { Checkbox, FramedSelect, Input } from '@/uikit/forms/components';
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
      <br />
      <Checkbox
        label="Remember Me"
        name="staySignedIn"
        id="staySignedIn"
        register={register}
        playSounds
      />
      <br />
      <br />
      <FramedSelect
        register={register}
        name="someSelect"
        id="someSelect"
        label="Some Label"
        playSounds
        items={[
          { label: 'An Option 1', value: 'opt-1' },
          { label: 'An Option 2', value: 'opt-2' },
          { label: 'An Option 3', value: 'opt-3' },
          { label: 'An Option 4', value: 'opt-4' },
          { label: 'An Option 5', value: generateShortId() },
          {
            label: 'Cool Option 6',
            value: generateShortId(),
            disabled: true,
          },
          { label: 'Cold Option 7', value: generateShortId() },
          { label: 'Best Option 8', value: generateShortId() },
        ]}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <C.SignInButton playSounds disabled={!formState.isValid}>
        Sign in
      </C.SignInButton>
    </form>
  );
};
