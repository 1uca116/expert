import styles from './index.module.css';
import Container from 'components/core/container';
import OrderForm from './order-form';
import OrderState from './order-state';

const AccountCreateOrder = () => {
  return (
    <Container className={styles.main}>
      <div className={styles.order}>
        <div className={styles.order_form}>
          <OrderForm />
        </div>
        <div className={styles.order_state}>
          <OrderState />
        </div>
      </div>
    </Container>
  );
};

export default AccountCreateOrder;
