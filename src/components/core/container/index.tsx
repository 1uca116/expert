import styles from './index.module.css';
import classNames from 'classnames';

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={classNames(styles.main, className)}>{children}</div>;
};

export default Container;
