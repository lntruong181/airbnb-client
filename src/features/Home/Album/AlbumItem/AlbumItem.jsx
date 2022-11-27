import classNames from 'classnames/bind';
import _ from 'lodash';
import Image from '@/components/Image';
import { StarIcon } from '@/enum/icon.enum';

import styles from './AlbumItem.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import images from '@/assets/Images';
import Carousel from '@/components/Carousel';
const cx = classNames.bind(styles);

const AlbumItem = () => {
  const imageCollections = [
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552374516-0fffe5103f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW0lMjBwb3B1bGFyJTIwbG9jYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('item')}>
        <div className={cx('carousel')}>
          <Carousel>
            {_.shuffle(imageCollections).map((image) => (
              <Image src={image} alt='beauty-spot' className={cx('image')} />
            ))}
          </Carousel>
        </div>
        <span className={cx('like')}>
          <Image src={images.heartIcon} />
        </span>
      </div>
      <div className={cx('item')}>
        <div className={cx('location')}>
          <h2 className={cx('location-heading')}>Broad Cove, Canada</h2>
          <p className={cx('location-rate')}>
            <strong>
              <StarIcon />
            </strong>
            5.0
          </p>
        </div>
        <p className={cx('sub-heading')}>Added 11 weeks ago</p>
        <p className={cx('sub-heading')}>26 Feb - 3 Mar - Individual Host</p>
        <p className={cx('price')}>
          <strong>$1,809 </strong>night
        </p>
      </div>
    </div>
  );
};
export default AlbumItem;
