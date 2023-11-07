import styles from './index.module.css';
import { useIntl } from 'react-intl';
import Card from '../../../../components/core/card';
import InputField from '../../../../components/core/input-field';
import Button from "../../../../components/core/button";

const OrderForm = () => {
  const intl = useIntl();

  return (
    <Card className={styles.order_form}>
      <div className={styles.header}>
        {intl.formatMessage({
          id: 'user.order-new.order-title',
          defaultMessage: 'What is the title of the task?',
        })}
      </div>
      <div className={styles.description}>
        {intl.formatMessage({
          id: 'user.order-new.order-subtitle',
          defaultMessage:
            'The title will help specialists to easier understand what needs to be done',
        })}
      </div>
      <InputField inputColor={'!bg-neutral-200'} />
        <div className={styles.buttons}>
        <Button variant={"secondary"} className={'basis-28'}>Go back</Button>
        <Button variant={"primary"} className={'basis-28'}>Next</Button>
        </div>
    </Card>
  );
};

export default OrderForm;
