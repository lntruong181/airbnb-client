import classNames from 'classnames/bind';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import Image from '@/components/Image';
import Carousel from '@/components/Carousel';
import { HeartIcon, StarIcon } from '@/assets/svgs';

import styles from './Card.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(styles);

const Card = ({ data }) => {
  const imageCollections = [
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552374516-0fffe5103f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW0lMjBwb3B1bGFyJTIwbG9jYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <Link
      to={'rooms'}
      target='_blank'
      query={{ name: 'truong' }}
      className={cx('container')}
    >
      <div className={cx('item', 'image-box')}>
        <div className={cx('carousel')}>
          <Carousel>
            {_.shuffle(imageCollections).map((image, index) => (
              <Image
                src={image}
                alt={data.slug}
                className={cx('image')}
                key={index}
              />
            ))}
          </Carousel>
        </div>
        <span className={cx('like')}>
          <HeartIcon />
        </span>
      </div>
      <div className={cx('item')}>
        <div className={cx('location')}>
          <h2 className={cx('location-heading')}>{data.name}</h2>
          <p className={cx('location-rate')}>
            <strong>
              <StarIcon />
            </strong>
            {data.ratingAverage}
          </p>
        </div>
        <p className={cx('sub-heading')}>Added {data.duration} weeks ago</p>
        <p className={cx('sub-heading')}>26 Feb - 3 Mar - Individual Host</p>
        <p className={cx('price')}>
          <strong>${data.price} </strong>night
        </p>
      </div>
    </Link>
  );
};
export default Card;
