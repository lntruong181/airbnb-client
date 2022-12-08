import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import GlobalMap from '@/components/GlobalMap';
import Card from '../Card';

import styles from './Rooms.module.scss';

const cx = classNames.bind(styles);

const Rooms = () => {
  const isShowMap = useSelector((state) => state.booking.showMap);

  return (
    <div className={cx('container')}>
      {isShowMap ? (
        <GlobalMap />
      ) : (
        <div className={cx('rooms')}>
          <div className='container-fluid'>
            <div className={cx('booking', 'row')}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
