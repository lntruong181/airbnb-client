import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import GlobalMap from '@/components/GlobalMap';
import Card from '../Card';

import styles from './Rooms.module.scss';
import { useEffect } from 'react';
import { getTours, tourSelector } from '@/app/sagas/tours/tourSlice';

const cx = classNames.bind(styles);

const Rooms = () => {
  const dispatch = useDispatch();
  const tours = useSelector(tourSelector);
  const isShowMap = useSelector((state) => state.booking.showMap);

  useEffect(() => {
    dispatch(getTours());
  }, []);

  return (
    <div className={cx('container')}>
      {isShowMap ? (
        <GlobalMap />
      ) : (
        <div className={cx('rooms')}>
          {tours.status === 'success' &&
            tours.data.data.map((tour) => <Card key={tour.id} data={tour} />)}
        </div>
      )}
    </div>
  );
};

export default Rooms;
