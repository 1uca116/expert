import styles from './index.module.css';
import { Menu, MenuAlign, MenuItem } from '@szhsin/react-menu';

type DropdownAction = {
  text: string;
  icon?: JSX.Element;
  className?: string;
  onClick: () => void;
};

type DropdownProps = {
  menuButton: JSX.Element;
  menuAlign: MenuAlign;
  actions: DropdownAction[];
};

const Dropdown = (props: DropdownProps) => {
  return (
    <Menu
      menuButton={props.menuButton}
      menuClassName={styles.menu}
      portal={true}
      align={props.menuAlign}
    >
      {props.actions.map((x) => (
        <MenuItem key={x.text} onClick={x.onClick} className={styles.menu_item}>
          {x.icon ?? null}
          <span className={x.className}>{x.text}</span>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
