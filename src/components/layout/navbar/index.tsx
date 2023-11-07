import styles from './index.module.css';
import classNames from 'classnames';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useIntl } from 'react-intl';
import Container from 'components/core/container';
import Link from 'next/link';
import ROUTES from 'routes';
import Dropdown from 'components/core/dropdown';
import { FaChevronDown } from 'react-icons/fa';
import Button from 'components/core/button';
import { useMainMenu } from 'hooks/show-sidebar';
import { MdOutlineMenu } from 'react-icons/md';
import {
  availableLanguages,
  Language,
  LanguageStore,
} from '../../../stores/LanguageStore';
import { useCallback } from 'react';

const Navbar = observer(() => {
  const intl = useIntl();
  const { showMainMenu } = useMainMenu();
  const langStore = useLocalObservable(() => new LanguageStore());

  const getLanguages = useCallback(
    (callback: (options: Language[]) => void) => {
      if (callback) {
        callback(availableLanguages);
        return;
      }

      langStore.setLanguage(callback);
    },
    [langStore]
  );

  return (
    <div className={classNames(styles.navbar)}>
      <Container className={styles.container}>
        <div className={styles.brand_container}>
          <Link
            className={styles.logo_url}
            href={ROUTES.index.path}
            prefetch={false}
          >
            <div className={styles.logo_container}>
              <img className={styles.logo} src='/images/logo.svg' alt='' />
              <div className={styles.logo_text}>expert</div>
            </div>
          </Link>
        </div>
        <Button
          variant='tertiary'
          className={styles.mobile_menu_btn}
          onClick={showMainMenu}
        >
          <MdOutlineMenu />
        </Button>
        <div className={styles.navbar_actions}>
          <Dropdown
            menuButton={
              <Button variant={'tertiary'} className={styles.button_dropdown}>
                <span>
                  {intl.formatMessage({
                    id: 'expert.navbar.for-experts',
                    defaultMessage: 'For experts',
                  })}
                </span>
                <FaChevronDown className='text-sm' />
              </Button>
            }
            menuAlign={'end'}
            actions={[
              {
                text: intl.formatMessage({
                  id: 'expert.navbar.for-experts.signup',
                  defaultMessage: 'Create an account',
                }),
                onClick: () => console.log('test'),
              },
              {
                text: intl.formatMessage({
                  id: 'expert.navbar.for-experts.login',
                  defaultMessage: 'Login',
                }),
                onClick: () => console.log('test'),
              },
            ]}
          />
          <Link href={`/${ROUTES.account.path}/${ROUTES.account.login.path}`}>
            <Button variant={'tertiary'}>
              {intl.formatMessage({
                id: 'expert.navbar.for-users.login',
                defaultMessage: 'Login',
              })}
            </Button>
          </Link>
          <Dropdown
            menuButton={
              <Button variant={'tertiary'} className={'!text-xl'}>
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
      </Container>
    </div>
  );
});

export default Navbar;
