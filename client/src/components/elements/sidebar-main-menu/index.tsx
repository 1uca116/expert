import styles from './index.module.css';
import { observer } from 'mobx-react-lite';
import { useLayout } from 'providers/BaseStoresProvider';
import { useIntl } from 'react-intl';
import React from 'react';
import Button from '../../core/button';
import Dropdown from '../../core/dropdown';

const SidebarMainMenu = observer(() => {
  const intl = useIntl();
  const layout = useLayout();

  return (
    <div className={styles.container}>
      <div className={styles.customer_section}>
        <span className={styles.section_title}>
          {intl.formatMessage({
            id: 'expert.navbar.for-customers',
            defaultMessage: 'For customers',
          })}
        </span>
        <Button variant={'primary'}>
          {intl.formatMessage({
            id: 'expert.navbar.for-users.login',
            defaultMessage: 'Login',
          })}
        </Button>
      </div>
      <div className={styles.expert_section}>
        <span className={styles.section_title}>
          {intl.formatMessage({
            id: 'expert.navbar.for-experts',
            defaultMessage: 'For experts',
          })}
        </span>
        <Button variant={'tertiary'}>
          {intl.formatMessage({
            id: 'expert.navbar.for-experts.signup',
            defaultMessage: 'Create an account',
          })}
        </Button>
        <Button variant={'tertiary'}>
          {intl.formatMessage({
            id: 'expert.navbar.for-experts.login',
            defaultMessage: 'Login',
          })}
        </Button>
      </div>
      <div className={styles.language_section}>
        <span className={styles.section_title}>
          {intl.formatMessage({
            id: 'expert.navbar.select_language',
            defaultMessage: 'Select language',
          })}
        </span>
        <Dropdown
          menuButton={
            <Button variant={'secondary'} className={'!text-xl'}>
              🇷🇸
            </Button>
          }
          menuAlign={'center'}
          actions={[
            {
              text: '🇷🇺',
              onClick: () => console.log('test'),
              className: 'text-xl',
            },
            {
              text: '🇬🇧',
              onClick: () => console.log('test'),
              className: 'text-xl',
            },
          ]}
        />
      </div>
    </div>
  );
});

export default SidebarMainMenu;
