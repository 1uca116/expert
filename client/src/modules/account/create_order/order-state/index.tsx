import styles from './index.module.css';
import Card from 'components/core/card';

const OrderState = () => {
  return (
    <Card className={styles.order_state}>
      <div className={styles.experts}>
        We found 22 experts that can do that!
      </div>
    </Card>
  );
};
export default OrderState;
