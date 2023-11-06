import styles from './index.module.css';
import { useIntl } from 'react-intl';
import Button from '../../../components/core/button';
import InputField from '../../../components/core/input-field';
import { Controller, useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';

export type OnRegistrationSubmit = {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: number;
};

type RegistrationForm = {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: number;
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
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        phone: joi.number().required(),
      }),
    []
  );

  const { handleSubmit, control, formState, watch } = useForm<RegistrationForm>(
    {
      resolver: joiResolver(formScheme),
      mode: 'onChange',
      defaultValues: {},
    }
  );
  const onSubmitForm = useCallback(
    (form: RegistrationForm) => {
      onSubmit?.({
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        dateOfBirth: form.dateOfBirth,
      });
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
              name='firstName'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'account.registration.form.placeholder.first-name',
                    defaultMessage: 'First name',
                  })}
                  label={intl.formatMessage({
                    id: 'account.registration.form.label.first-name',
                    defaultMessage: 'First name',
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
              name='lastName'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'account.registration.form.placeholder.last-name',
                    defaultMessage: 'Last name',
                  })}
                  label={intl.formatMessage({
                    id: 'account.registration.form.label.Last-name',
                    defaultMessage: 'Last name',
                  })}
                  value={value ?? ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>

          {/*<span className={styles.note}>*/}
          {/*  {intl.formatMessage({*/}
          {/*    id: 'account.login.note',*/}
          {/*    defaultMessage:*/}
          {/*      'Don`t worry, your phone number is hidden. You decide who will have access to it',*/}
          {/*  })}*/}
          {/*</span>*/}
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
      </div>
    </div>
  );
});

export default AccountRegistration;
