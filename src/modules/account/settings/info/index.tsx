import { useIntl } from 'react-intl';
import { useState } from 'react';
import SingleSelect, { SingleSelectValue } from 'components/core/single-select';
import styles from './index.module.css';
import Card from 'components/core/card';
import classNames from 'classnames';
import { BiSolidLike } from 'react-icons/bi';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import InputField from 'components/core/input-field';
import Button from '../../../../components/core/button';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';

const UserInfoSection = () => {
  const intl = useIntl();
  const options = [
    { value: 'Female', label: 'F' },
    { value: 'Male', label: 'M' },
    { value: 'Rather not say', label: 'N' },
  ];
  const [selectedOption, setSelectedOption] = useState<
    SingleSelectValue | null | undefined
  >();
  // @ts-ignore
  let handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  return (
    <div className={styles.user_info}>
      <Card className={styles.common} id={'1'}>
        <div className={styles.common_main}>
          <div className={styles.common_img}>
            <img src={'/images/user-empty.png'} width={60} height={60} alt={''} />
            <i className={classNames(styles.common_online_dot)}></i>
          </div>
          <div>
            <h2 className={styles.common_name}>NAME</h2>
            <p className={styles.common_status}>
              {intl.formatMessage({
                id: 'user.settings.user-info.registration-date',
                defaultMessage: 'uses Expert from',
              })}{' '}
              <span>2023</span>
            </p>
          </div>
        </div>
        <div className={styles.common_additional}>
          <div className={styles.common_info_with_icon}>
            <BiSolidLike className={styles.common_info_icon} />
            <span>1</span>
          </div>
          <div className={styles.common_info_with_icon}>
            <RiVerifiedBadgeFill className={styles.common_info_icon} />
            <span>
              {intl.formatMessage({
                id: 'user.settings.user-info.verified',
                defaultMessage: 'Number is verified',
              })}
            </span>
          </div>
        </div>
      </Card>
      <Card className={styles.common} id={'2'}>
        <div className={styles.section_title}>
          {intl.formatMessage({
            id: 'user.settings.personal-info.title',
            defaultMessage: 'Personal info',
          })}
        </div>
        <div className={classNames(styles.common_form_field, '!pt-0')}>
          <label className={styles.common_form_label}>
            {intl.formatMessage({
              id: 'user.settings.personal-info.form.name.',
              defaultMessage: 'User name',
            })}
          </label>
          <InputField
            inputColor={styles.common_form_input}
            placeholder={intl.formatMessage({
              id: 'user.settings.personal-info.form.name.placeholder',
              defaultMessage: 'Enter your name',
            })}
          />
        </div>
        <div className={styles.common_form_field_double}>
          <div className={classNames(styles.common_form_field, 'col-span-1')}>
            <label className={styles.common_form_label}>
              {intl.formatMessage({
                id: 'user.settings.personal-info.form.gender',
                defaultMessage: 'Gender',
              })}
            </label>
            <SingleSelect
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholderText={intl.formatMessage({
                id: 'user.settings.personal-info.form.gender.placeholder',
                defaultMessage: 'Select',
              })}
            />
          </div>
          <div className={classNames(styles.common_form_field, 'col-span-3')}>
            <label className={styles.common_form_label}>
              {intl.formatMessage({
                id: 'user.settings.personal-info.form.phone',
                defaultMessage: 'Phone number',
              })}
            </label>
            <div className={styles.common_form_field_phone}>
              <SingleSelect
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholderText={intl.formatMessage({
                  id: 'user.settings.personal-info.form.gender.placeholder',
                  defaultMessage: 'Select',
                })}
              />
              <InputField
                className={'col-span-7'}
                inputColor={styles.common_form_input}
                placeholder={intl.formatMessage({
                  id: 'user.settings.personal-info.form.phone.placeholder',
                  defaultMessage: 'Enter your phone number',
                })}
              />
            </div>
          </div>
        </div>
        <div className={styles.common_form_field}>
          <label className={styles.common_form_label}>
            {intl.formatMessage({
              id: 'user.settings.personal-info.form.email.',
              defaultMessage: 'Email',
            })}
          </label>
          <InputField
            inputColor={styles.common_form_input}
            placeholder={intl.formatMessage({
              id: 'user.settings.personal-info.form.email.placeholder',
              defaultMessage: 'Enter your email',
            })}
          />
        </div>
      </Card>
      <Card className={styles.common} id={'3'}>
        <div className={styles.section_title}>
          {intl.formatMessage({
            id: 'user.settings.feedback.title',
            defaultMessage: 'Feedback from Experts',
          })}
        </div>
        <div>
          <div className={styles.feedback_item}>
            <div className={styles.feedback_like}>
              <BiSolidLike className={'text-green'} />
            </div>
            <div>
              <div className={styles.feedback_name}>Name Name</div>
              <div className={styles.text_grey}>Everything is good</div>
              <div className={styles.feedback_date}>4 Aug 2023</div>
            </div>
          </div>
          <div className={styles.feedback_item}>
            <div className={styles.feedback_like}>
              <BiSolidLike className={'text-red scale-y-[-1]'} />
            </div>
            <div>
              <div className={styles.feedback_name}>Name Name</div>
              <div className={styles.text_grey}>Everything is good</div>
              <div className={styles.feedback_date}>4 Aug 2023</div>
            </div>
          </div>
        </div>
      </Card>
      <Card className={styles.common} id={'4'}>
        <div className={styles.section_title}>
          {intl.formatMessage({
            id: 'user.settings.social.title',
            defaultMessage: 'Linked social networks',
          })}
        </div>
        <div className={styles.links_section}>
          <div className={styles.link}>
            <BsTelegram />
          </div>
          <div className={styles.link}>
            <BsInstagram />
          </div>
          <div className={styles.link}>
            <BsFacebook />
          </div>
        </div>
      </Card>
      <Card className={styles.common} id={'5'}>
        <div className={styles.section_title}>
          {intl.formatMessage({
            id: 'user.settings.actions.title',
            defaultMessage: 'Actions with profile',
          })}
        </div>
        <div className={styles.common_actions}>
          <Button variant={'primary'}>
            {intl.formatMessage({
              id: 'user.settings.actions.btn_delete',
              defaultMessage: 'Delete profile',
            })}
          </Button>
          <Button variant={'tertiary'}>
            {' '}
            {intl.formatMessage({
              id: 'user.settings.actions.btn_log_out',
              defaultMessage: 'Log out',
            })}
          </Button>
          <div></div>
          <span className={classNames(styles.text_grey, 'col-span-1')}>
            {intl.formatMessage({
              id: 'user.settings.actions.btn_delete.note',
              defaultMessage:
                'By clicking to this button, you`ll lose order history and experts contacts',
            })}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UserInfoSection;
