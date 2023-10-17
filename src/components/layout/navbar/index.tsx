import styles from './index.module.css';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useMemo } from 'react';
import Container from '@/components/core/container';
import Link from 'next/link';

const Navbar = observer(() => {
  const intl = useIntl();
  const router = useRouter();

  return (
    <div className={classNames(styles.navbar)}>
      <Container className={styles.container}>
        <div className={styles.brand_container}>
          <Link className={styles.logo_url} href={'./'} prefetch={false}>
            <div className={styles.logo_container}>
              <img className={styles.logo} src='/images/logo.svg' alt='' />
              <img
                className={styles.logo_text}
                src='/images/logo_text.svg'
                alt=''
              />
            </div>
            <span>
              {intl.formatMessage({
                id: 'test',
                defaultMessage: 'Your mint was successful.',
              })}
            </span>
            drfvrfvc
          </Link>
        </div>
      </Container>
    </div>
  );
});

export default Navbar;
