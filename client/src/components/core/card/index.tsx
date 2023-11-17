import styles from './index.module.css';
import classNames from 'classnames';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};
const Card = ({ className, children, id }: CardProps) => {
  return <div className={classNames(styles.main, className)} id={id}>{children}</div>;
};

export default Card;
