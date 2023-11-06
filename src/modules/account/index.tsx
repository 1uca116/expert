import styles from './index.module.css';
import Container from 'components/core/container';
import classNames from 'classnames';
import AccountLogin from './login';
import AccountRegistration from "./registration";
import AccountSettings from "./settings";

const Account = () => {
  return (
    <Container className={classNames(styles.main)}>
      <AccountLogin />
      <AccountRegistration/>
      <AccountSettings/>
    </Container>
  );
};

export default Account;
