import styles from './index.module.css';
import Container from 'components/core/container';
import classNames from 'classnames';
import AccountLogin from './login';
import AccountRegistration from './registration';
import AccountSettings from './settings';
import AccountOrdersHistory from './orders_history';

const Account = () => {
  return (
    <Container className={classNames(styles.main)}>
      <AccountLogin />
      <AccountRegistration />
      <AccountSettings />
      <AccountOrdersHistory />
    </Container>
  );
};

export default Account;
