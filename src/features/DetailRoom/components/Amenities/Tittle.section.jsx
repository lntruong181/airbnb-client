import classNames from 'classnames/bind';

import Image from '@/components/Image';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Tittle = () => {
  return (
    <div className={cx('section', 'tittle-container')}>
      <div className={cx('heading')}>
        <h1 className={cx('tittle')}>
          Private room in townhouse hosted by Bua
        </h1>
        <div className={cx('description')}>
          <span>3 guests</span>
          <span>.</span>
          <span>1 bedroom</span>
          <span>.</span>
          <span>1 bed</span>
          <span>.</span>
          <span>1 private bathroom</span>
        </div>
      </div>
      <div className={cx('owner-avatar')}>
        <Image
          src={
            'https://a0.muscache.com/im/pictures/user/b13b4892-4c96-47c2-8aff-f8691ec2c532.jpg?im_w=240'
          }
          alt='avatar'
        />
      </div>
    </div>
  );
};

export default Tittle;
