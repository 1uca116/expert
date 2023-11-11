import styles from './index.module.css';
import { useIntl } from 'react-intl';
import Card from 'components/core/card';
import InputField from 'components/core/input-field';
import Button from 'components/core/button';
import { Controller, useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import joi from 'joi';
import dayjs from 'dayjs';
import { joiResolver } from '@hookform/resolvers/joi';
import TextArea from 'components/core/text-area';
import SingleSelect, { SingleSelectValue } from 'components/core/single-select';
import { ServiceType } from 'utils/mock';
import FileInput from 'components/common/file-input';
import DateTimePicker from 'components/core/datetime-picker';

export type OnCreateOrderSubmit = {
  serviceType: SingleSelectValue;
  title: string;
  details: string;
  deadline: number;
  userPrice: number;
  photo: string;
};

type CreateOrderForm = {
  serviceType: SingleSelectValue;
  title: string;
  details: string;
  deadline: Date;
  userPrice: number;
  photo: string;
};

type Props = {
  order?: CreateOrderForm;
  onSubmit?: (form: OnCreateOrderSubmit) => void;
};

const OrderTitle = observer(({ order, onSubmit }: Props) => {
  const intl = useIntl();
  const minDate = useMemo(() => new Date(), []);

  const formScheme = useMemo(
    () =>
      joi.object({
        serviceType: joi.object().required(),
        title: joi.string().required(),
        details: joi.string().required(),
        deadline: joi.date(),
        userPrice: joi.number(),
        photo: joi.string(),
      }),
    []
  );

  const {
    handleSubmit,
    control,
    formState,
    watch,
    resetField,
    formState: { errors },
  } = useForm<CreateOrderForm>({
    resolver: joiResolver(formScheme),
    defaultValues: {
      deadline: dayjs().toDate(),
    },
  });

  const onSubmitForm = useCallback(
    (form: CreateOrderForm) => {
      const deadline = dayjs(form.deadline).unix();

      onSubmit?.({
        serviceType: form.serviceType,
        title: form.title,
        details: form.details,
        deadline: deadline,
        userPrice: form.userPrice,
        photo: form.photo,
      });
      console.log(JSON.stringify(form));
    },
    [onSubmit]
  );

  return (
    <>
      <div className={styles.header}>
        {intl.formatMessage({
          id: 'user.order-new.form.order-title',
          defaultMessage: 'Describe your order',
        })}
      </div>
      <div className={styles.description}>
        {intl.formatMessage({
          id: 'user.order-new.form.order-subtitle',
          defaultMessage:
            'Detailed information will help specialists to easier understand what needs to be done',
        })}
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.form_field}>
          <label className={styles.form_label}>
            {intl.formatMessage({
              id: 'user.order-new.form.task-type',
              defaultMessage: 'Expert',
            })}
          </label>
          <Controller
            control={control}
            name={'serviceType'}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <SingleSelect
                placeholderText={intl.formatMessage({
                  id: 'user.order-new.form.task-type.placeholder',
                  defaultMessage: 'Who are you looking for?',
                })}
                options={ServiceType}
                value={value ?? ''}
                onChange={onChange}
              />
            )}
          ></Controller>
        </div>
        <div className={styles.form_field}>
          <label className={styles.form_label}>
            {intl.formatMessage({
              id: 'user.order-new.form.task-title',
              defaultMessage: 'Task title',
            })}
          </label>
          <Controller
            control={control}
            name='title'
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <InputField
                placeholder={intl.formatMessage({
                  id: 'user.order-new.form.task-title.placeholder',
                  defaultMessage: 'Title',
                })}
                inputColor={'!bg-neutral-200'}
                value={value ?? ''}
                onChange={onChange}
                onBlur={onBlur}
                error={error?.message}
              />
            )}
          ></Controller>
        </div>
        <div className={styles.form_field}>
          <label className={styles.form_label}>
            {intl.formatMessage({
              id: 'user.order-new.form.task-details',
              defaultMessage: 'Describe your task',
            })}
          </label>
          <Controller
            control={control}
            name='details'
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextArea
                placeholder={intl.formatMessage({
                  id: 'user.order-new.form.task-details.placeholder',
                  defaultMessage: 'Details',
                })}
                value={value ?? ''}
                inputColor={'!bg-neutral-200'}
                onChange={onChange}
                onBlur={onBlur}
                error={error?.message}
              />
            )}
          ></Controller>
        </div>
        <div className={'grid grid-cols-2 gap-5'}>
          <div className={styles.form_field}>
            <label className={styles.form_label}>
              {intl.formatMessage({
                id: 'user.order-new.form.task-deadline',
                defaultMessage: 'When the task should be done?',
              })}
            </label>
            <Controller
              control={control}
              name='deadline'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <DateTimePicker
                  placeholder={intl.formatMessage({
                    id: 'user.order-new.form.task-deadline.placeholder',
                    defaultMessage: 'Select date',
                  })}
                  value={value}
                  minDate={minDate}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
          <div className={styles.form_field}>
            <label className={styles.form_label}>
              {intl.formatMessage({
                id: 'user.order-new.form.task-price',
                defaultMessage: 'Price (in Serbian dinars)',
              })}
            </label>
            <Controller
              control={control}
              name='userPrice'
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder={intl.formatMessage({
                    id: 'user.order-new.form.task-price.placeholder',
                    defaultMessage: 'How much are you ready to pay for work?',
                  })}
                  value={value ?? ''}
                  inputColor={'!bg-neutral-200'}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                />
              )}
            ></Controller>
          </div>
        </div>
        {/*<div className={styles.form_field}>*/}
        {/*  <label className={styles.form_label}>*/}
        {/*    {intl.formatMessage({*/}
        {/*      id: 'user.order-new.form.task-files',*/}
        {/*      defaultMessage: 'Upload files',*/}
        {/*    })}*/}
        {/*  </label>*/}
        {/*  <Controller*/}
        {/*    control={control}*/}
        {/*    name='photo'*/}
        {/*    render={({*/}
        {/*      field: { onChange, onBlur, value },*/}
        {/*      fieldState: { error },*/}
        {/*    }) => (*/}
        {/*      <InputField*/}
        {/*        placeholder={intl.formatMessage({*/}
        {/*          id: 'user.order-new.form.task-files.placeholder',*/}
        {/*          defaultMessage: 'Files',*/}
        {/*        })}*/}
        {/*        type={'text'}*/}
        {/*        value={value ?? ''}*/}
        {/*        inputColor={'!bg-neutral-200'}*/}
        {/*        onChange={onChange}*/}
        {/*        onBlur={onBlur}*/}
        {/*        error={error?.message}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  ></Controller>*/}
        {/*</div>*/}

        <FileInput multiple name='Upload files' mode='append' />
        <div className={styles.buttons}>
          <Button variant={'secondary'} className={styles.button}>
            {intl.formatMessage({
              id: 'user.order-new.form.btn_go-back',
              defaultMessage: 'Go back',
            })}
          </Button>
          <Button
            variant={'primary'}
            className={styles.button}
            onClick={handleSubmit(onSubmitForm)}
            disabled={!formState.isValid}
          >
            {intl.formatMessage({
              id: 'user.order-new.form.btn_next',
              defaultMessage: 'Next',
            })}
          </Button>
        </div>
      </form>
    </>
  );
});
const OrderForm = () => {

  return (
    <Card className={styles.order_form}>
      <OrderTitle />
    </Card>
  );
};

export default OrderForm;
