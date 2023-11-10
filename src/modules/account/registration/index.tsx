import styles from './index.module.css';
import { useIntl } from 'react-intl';
import Button from 'components/core/button';
import InputField from 'components/core/input-field';
import { Controller, useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo } from 'react';
import { PWD_REGEX } from 'utils/regex';

export type OnRegistrationSubmit = {
  email: string;
  password: string;
  matchingPassword: string;
};

type RegistrationForm = {
  email: string;
  password: string;
  matchingPassword: string;
};

type Props = {
  onSubmit?: (form: OnRegistrationSubmit) => void;
};

const AccountRegistration = observer(({ onSubmit }: Props) => {
  const intl = useIntl();

  const formScheme = useMemo(
    () =>
      joi.object({
        email: joi
          .string()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net', 'ru'] },
          })
          .required(),
        password: joi
          .string()
          .regex(PWD_REGEX, 'password')
          .min(8)
          .max(24)
          .required(),
        matchingPassword: joi.string().required().valid(joi.ref('password')),
      }),
    []
  );

  const { handleSubmit, control, formState } = useForm<RegistrationForm>({
    resolver: joiResolver(formScheme),
    mode: 'onChange',
    defaultValues: {},
  });
  const onSubmitForm = useCallback(
    (form: RegistrationForm) => {
      onSubmit?.({
        email: form.email,
        password: form.password,
        matchingPassword: form.matchingPassword,
      });
      console.log(form);
    },
    [onSubmit]
  );

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          {intl.formatMessage({
            id: 'account.registration.title',
            defaultMessage: 'Create an account',
          })}
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <div className={styles.form_field}>
            <Controller
              control={control}
              name='email'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'account.registration.form.placeholder.email',
                    defaultMessage: 'Enter email',
                  })}
                  label={intl.formatMessage({
                    id: 'account.registration.form.label.email',
                    defaultMessage: 'Email',
                  })}
                  value={value ?? ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
          <div className={styles.form_field}>
            <Controller
              control={control}
              name='password'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'account.registration.form.placeholder.password',
                    defaultMessage: 'Password',
                  })}
                  label={intl.formatMessage({
                    id: 'account.registration.form.label.password',
                    defaultMessage: 'Password',
                  })}
                  type={'password'}
                  value={value ?? ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
          <div className={styles.form_field}>
            <Controller
              control={control}
              name='matchingPassword'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'account.registration.form.placeholder.repeat-password',
                    defaultMessage: 'Repeat password',
                  })}
                  label={intl.formatMessage({
                    id: 'account.registration.form.label.repeat-password',
                    defaultMessage: 'Repeat password',
                  })}
                  type={'password'}
                  value={value ?? ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
          <Button
            variant={'primary'}
            className={'w-full mt-5'}
            type={'submit'}
            disabled={!formState.isValid}
          >
            {intl.formatMessage({
              id: 'account.login.form.submit',
              defaultMessage: 'Submit',
            })}
          </Button>
        </form>
      </div>
    </div>
  );
});

export default AccountRegistration;
