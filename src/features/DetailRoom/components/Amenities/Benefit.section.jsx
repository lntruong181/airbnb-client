import classNames from 'classnames/bind';

import Image from '@/components/Image';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Benefit = () => {
  return (
    <div className={cx('section', 'homestay-benefit')}>
      <Image
        className={cx('logo')}
        src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
        alt='homestay-logo'
      />
      <p className={cx('guide')}>
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </p>
      <a href='#' className={cx('more')}>
        Learn more
      </a>
    </div>
  );
};

export default Benefit;
