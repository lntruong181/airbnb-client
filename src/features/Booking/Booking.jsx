import Container from '@/layouts/components/Container';
import Category from './components/Category';
import Rooms from './components/Rooms';

const Booking = () => {
  return (
    <Container>
      <Category />
      <Rooms />
    </Container>
  );
};

export default Booking;
