import styles from './index.module.css';
import classNames from 'classnames';
import Container from 'components/core/container';
import UserInfoSection from './info';
import UserActionsSection from './actions';

const AccountSettings = () => {

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
