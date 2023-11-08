import styles from './index.module.css';
import { useIntl } from 'react-intl';
import Button from 'components/core/button';
import InputField from 'components/core/input-field';
import { Controller, useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import ROUTES from 'routes';
import Link from 'next/link';

export type OnLoginSubmit = {
  email: string;
  password: string;
};

type LoginForm = {
  email: string;
  password: string;
};

type Props = {
  onSubmit?: (form: OnLoginSubmit) => void;
};
const AccountLogin = observer(({ onSubmit }: Props) => {
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
        password: joi.string().min(5).alphanum().required(),
      }),
    []
  );

  const { handleSubmit, control, formState, watch } = useForm<LoginForm>({
    resolver: joiResolver(formScheme),
    mode: 'onChange',
    defaultValues: {},
  });
  const onSubmitForm = useCallback(
    (form: LoginForm) => {
      onSubmit?.({
        email: form.email,
        password: form.password,
      });
    },
    [onSubmit]
  );

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          {intl.formatMessage({
            id: 'account.login.title',
            defaultMessage: 'Login to account',
          })}
        </div>
        <div className={styles.form}>
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
                    id: 'account.login.form.placeholder.email',
                    defaultMessage: 'Enter email',
                  })}
                  label={intl.formatMessage({
                    id: 'account.login.form.label.email',
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
                    id: 'account.login.form.placeholder.password',
                    defaultMessage: 'Enter password',
                  })}
                  label={intl.formatMessage({
                    id: 'account.login.form.label.password',
                    defaultMessage: 'Password',
                  })}
                  value={value ?? ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
        </div>
        <Button
          variant={'primary'}
          className={'w-full mt-5'}
          onClick={handleSubmit(onSubmitForm)}
          disabled={!formState.isValid}
        >
          {intl.formatMessage({
            id: 'account.login.form.submit',
            defaultMessage: 'Submit',
          })}
        </Button>
        <div className={styles.link_section}>
          <span>
            {intl.formatMessage({
              id: 'account.login.create_account_part1',
              defaultMessage: 'First time here?',
            })}
          </span>
          <Link
            className={styles.link}
            href={`/${ROUTES.account.path}/${ROUTES.account.registration.path}`}
          >
            {intl.formatMessage({
              id: 'account.login.create_account_part2',
              defaultMessage: 'Create an account',
            })}
          </Link>
        </div>
      </div>
    </div>
  );
});

export default AccountLogin;
