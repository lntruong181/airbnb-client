import classNames from 'classnames/bind';

import Amenities from './components/Amenities';
import Photos from './components/Photos';

import styles from './DetailRoom.module.scss';

const cx = classNames.bind(styles);

const DetailRoom = () => {
  return (
    <div className={cx('container')}>
      <Photos />
      <Amenities />
    </div>
  );
};
export default DetailRoom;
