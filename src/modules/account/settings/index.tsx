import styles from './index.module.css';
import classNames from 'classnames';
import Container from 'components/core/container';
import { useApi } from 'providers/BaseStoresProvider';
import UserInfoSection from './info';
import UserActionsSection from './actions';

const AccountSettings = () => {
  const api = useApi();

  return (
    <Container className={classNames(styles.main)}>
      <div className={styles.settings}>
        <div className={styles.info}>
          <UserInfoSection />
        </div>
        <div className={styles.actions}>
          <UserActionsSection />
        </div>
      </div>
    </Container>
  );
};

export default AccountSettings;
