import styles from './index.module.css';
import Container from 'components/core/container';
import classNames from 'classnames';

const MainPage = () => {
  return <Container className={classNames(styles.main)}></Container>;
};

export default MainPage;
