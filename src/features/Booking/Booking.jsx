import { useSelector } from 'react-redux';

import Container from '@/layouts/components/Container';
import Category from './components/Category';
import Rooms from './components/Rooms';
import GlobalMap from '@/components/GlobalMap';

const Booking = () => {
  const isShowMap = useSelector((state) => state.booking.showMap);

  return isShowMap ? (
    <GlobalMap />
  ) : (
    <Container>
      <Category /> <Rooms />
    </Container>
  );
};

export default Booking;
