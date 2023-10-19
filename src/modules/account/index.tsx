import AccountLogin from './login';
import Container from '../../components/core/container';

const Account = () => {
  return (
    <Container className={'flex flex-1'}>
      <AccountLogin />
    </Container>
  );
};

export default Account;
