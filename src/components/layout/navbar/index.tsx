import styles from './index.module.css';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Container from '@/components/core/container';
import Link from 'next/link';
import ROUTES from '@/routes';
import Dropdown from '@/components/core/dropdown';
import { FaChevronDown } from 'react-icons/fa';
import Button from '@/components/core/button';

const Navbar = observer(() => {
  const intl = useIntl();
  const router = useRouter();

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
        <div className={styles.navbar_actions}>
          <Dropdown
            menuButton={
              <Button variant={'primary'} className={styles.button_dropdown}>
                <span>
                  {intl.formatMessage({
                    id: 'expert.navbar.for-experts',
                    defaultMessage: 'For experts',
                  })}
                </span>
                <FaChevronDown className='text-sm' />
              </Button>
            }
            className={'bg-white shadow'}
            actions={[
              {
                text: 'Edit',
                onClick: () => console.log('test'),
              },
              {
                text: 'Remove',
                onClick: () => console.log('test'),
              },
            ]}
          />

          <span>
            {intl.formatMessage({
              id: 'expert.navbar.sign-in',
              defaultMessage: 'Sign in',
            })}
          </span>
        </div>
      </Container>
    </div>
  );
});

export default Navbar;
