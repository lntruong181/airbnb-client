import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import Button from '@/components/Button';
import Image from '@/components/Image';
import {
  HeartIcon,
  LeftArrowIcon,
  RightArrowIcon,
  StarIcon,
} from '@/enum/icon.enum';

import styles from './AlbumItem.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiTwotoneHeart } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';
import images from '@/assets/Images';
const cx = classNames.bind(styles);

const AlbumItem = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('item')}>
        <Image
          src={
            'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }
          alt='places'
          className={cx('image')}
        />
        <span className={cx('like')}>
          {/* <HeartIcon /> */}
          {/* <HiHeart /> */}
          <Image src={images.heartIcon} />
        </span>
        <Button className={cx('next')} isRound={true} scaleOnHover={true}>
          <RightArrowIcon />
        </Button>
        <Button className={cx('previous')} isRound={true} scaleOnHover={true}>
          <LeftArrowIcon />
        </Button>
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
        <u className={cx('price')}>
          <strong>$1,809 </strong>total
        </u>
      </div>
    </div>
  );
};
export default AlbumItem;
