import React from 'react';
import styles from './index.module.css';
import { observer } from 'mobx-react-lite';
import { useLayout } from 'providers/BaseStoresProvider';
import { useCallback } from 'react';
import { BsX } from 'react-icons/bs';
import classNames from 'classnames';

const Sidebar = observer(() => {
  const layout = useLayout();

  const close = useCallback(() => {
    layout.toggleSidebar(false);
  }, [layout]);

  return (
    <div>
      {layout.sidebarData?.show && (
        <React.Fragment>
          <div className={styles.overlay} onClick={close} />

          <button className={styles.close_btn} onClick={close}>
            <BsX className='text-2xl' />
          </button>
        </React.Fragment>
      )}

      <div
        className={classNames(styles.container, {
          [`${styles.open}`]: !!layout.sidebarData?.show,
        })}
      >
        <button className={styles.close_btn_mobile} onClick={close}>
          <BsX className='text-2xl' />
        </button>

        <div className={styles.content}>{layout.sidebarData?.content}</div>
      </div>
    </div>
  );
});

export default Sidebar;
