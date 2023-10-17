import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: Props) => {
  return <div className={styles.body}>{children}</div>;
};

export default PageContainer;
