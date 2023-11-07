import styles from './index.module.css';
import Container from 'components/core/container';
import { useIntl } from 'react-intl';
import OrderForm from "./order-form";

const AccountCreateOrder = () => {
  const intl = useIntl();

  return (
    <Container className={styles.main}>

        <div className={styles.order}>
            <div className={styles.order_form}>
                <OrderForm/>
            </div>
            <div className={styles.order_actions}>vdcv</div>
        </div>

    </Container>
  );
};

export default AccountCreateOrder;
