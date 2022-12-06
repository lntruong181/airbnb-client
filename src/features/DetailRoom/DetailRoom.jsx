import classNames from 'classnames/bind';
import Photos from './components/Photos';

import styles from './DetailRoom.module.scss';

const cx = classNames.bind(styles);

const DetailRoom = () => {
  return (
    <>
      <Photos />
    </>
  );
};
export default DetailRoom;
