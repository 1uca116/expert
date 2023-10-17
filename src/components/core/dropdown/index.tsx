import styles from './index.module.css';
import { Menu, MenuItem } from '@szhsin/react-menu';
import classNames from 'classnames';

type DropdownAction = {
  text: string;
  icon?: JSX.Element;
  className?: string;
  onClick: () => void;
};

type DropdownProps = {
  menuButton: JSX.Element;
  className?: string;
  actions: DropdownAction[];
};

const Dropdown = (props: DropdownProps) => {
  return (
    <Menu
      menuButton={props.menuButton}
      menuClassName={classNames(styles.menu, props.className)}
      portal={true}
      align={'end'}
    >
      {props.actions.map((x) => (
        <MenuItem
          key={x.text}
          onClick={x.onClick}
          className={styles.menu_item}
        >
          {x.icon ?? null}
          <span className='text-lg'>{x.text}</span>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
