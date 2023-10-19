import styles from './index.module.css';
import {useIntl} from "react-intl";
import Button from "../../../components/core/button";
import InputField from "../../../components/core/input-field";

const AccountLogin = () => {
    const intl= useIntl();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.title}>{
              intl.formatMessage({
                  id: 'account.login.title',
                  defaultMessage: 'Login or create an account',
              })
          }</div>
          <div>
              <InputField placeholder={'placeholder'}/>
          </div>
          <Button variant={"primary"}>Button</Button>
          <Button variant={"secondary"}>Button</Button>
      </div>
    </div>
  );
};

export default AccountLogin;
