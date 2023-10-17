import styles from './index.module.css';
import Container from "@/components/core/container";

const MainPage = () => {
  return (
    <Container className={styles.main}>
      <div className={'flex'}>HELLOOO
          <div className={'h-20 w-20 bg-pink'}>1</div>
          <div className={'h-20 w-20 bg-red'}>1</div>
          <div className={'h-20 w-20 bg-stone'}>1</div>
          <div className={'h-20 w-20 bg-lavender'}>1</div>
          <div className={'h-20 w-20 bg-orange'}>1</div>
          <div>1</div>
          <div>1</div>

      </div>
    </Container>
  );
};

export default MainPage;
