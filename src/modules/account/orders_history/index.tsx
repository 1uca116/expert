import styles from './index.module.css';
import Container from 'components/core/container';
import { useIntl } from 'react-intl';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Button from 'components/core/button';
import ROUTES from 'routes';

const AccountOrdersHistory = () => {
  const intl = useIntl();

  return (
    <Container className={styles.main}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: 'user.orders.title',
          defaultMessage: 'Orders',
        })}
      </div>
      <div className={styles.orders}>
        <a
          className={styles.order_item_add}
          href={`/${ROUTES.account.path}/${ROUTES.account.create_order.path}`}
        >
          <div className={styles.order_item_add_title}>
            <BsFillPlusCircleFill className={styles.plus} />
            {intl.formatMessage({
              id: 'user.orders.order_add',
              defaultMessage: 'Create new order',
            })}
          </div>
        </a>
        <div className={styles.order_item}>
          <div className={styles.order_item_task}>Pet sitting</div>
          <div className={styles.order_item_date}>04 Jun 2023</div>
          <div className={styles.order_item_name}>
            <img
              src={'/images/user-no-img.svg'}
              width={40}
              height={40}
              className={'rounded-full'}
            />
            <span>Ivan Petrov</span>
          </div>
          <Button variant={'secondary'} className={'col-span-2'}>
            Edit feedback
          </Button>
        </div>
        <div className={styles.order_item}>
          <div className={styles.order_item_task}>Courses of Serbian</div>
          <div className={styles.order_item_date}>04 Jun 2023</div>
          <div className={styles.order_item_name}>
            <img
              src={'/images/user-no-img.svg'}
              width={40}
              height={40}
              className={'rounded-full'}
            />
            <span>Petar Markovic</span>
          </div>
          <Button variant={'secondary'} className={'col-span-2'}>
            Edit feedback
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AccountOrdersHistory;
