import styles from './index.module.css';
import Container from 'components/core/container';
import classNames from 'classnames';
import SearchSection from './search-section';

const Main = () => {
  return (
    <Container className={classNames(styles.main)}>
      <SearchSection />
    </Container>
  );
};

export default Main;
