import styles from './index.module.css';
import Container from 'components/core/container';
import { useIntl } from 'react-intl';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Button from 'components/core/button';
import SearchField from 'components/common/search-field';
import { useState } from 'react';
import classNames from 'classnames';
import { Test } from '../../../utils/mock';

const AccountOrdersHistory = () => {
  const intl = useIntl();

  const [searchField, showSearchField] = useState(false);

  return (
    <Container className={styles.main}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: 'user.orders.title',
          defaultMessage: 'Orders',
        })}
      </div>
      <div className={styles.orders}>
        <div
          className={styles.order_item_add}
          onClick={() => showSearchField(true)}
        >
          <div className={styles.order_item_add_title}>
            <BsFillPlusCircleFill className={styles.plus} />
            {intl.formatMessage({
              id: 'user.orders.order_add',
              defaultMessage: 'Create new order',
            })}
          </div>
          <div className={classNames({ ['hidden']: searchField === false })}>
            <div className={classNames(styles.search_section)}>
              <div className={styles.search_field}>
                <SearchField />
              </div>
              <Button variant={'primary'} className={styles.search_btn}>
                Search
              </Button>
            </div>
            <div className={styles.suggestion_section}>
              {Test?.map(
                (x) =>
                  x.profession && (
                    <div className={styles.suggestion}>{x.profession}</div>
                  )
              )}
            </div>
          </div>
        </div>
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
