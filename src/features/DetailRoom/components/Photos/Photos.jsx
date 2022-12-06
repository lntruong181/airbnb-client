import { HeartIcon, MedalIcon, ShareIcon, StarIcon } from '@/assets/Icons';
import images from '@/assets/Images';
import Button from '@/components/Button';
import Image from '@/components/Image';
import classNames from 'classnames/bind';

import styles from './Photos.module.scss';

const cx = classNames.bind(styles);

const Photos = () => {
  return (
    <div className={cx('container')}>
      <h1 className={cx('heading')}>
        Zion Kolob Canyon-Farm Stay-cows, goats, alpaca
      </h1>
      <div className={cx('rate')}>
        <div className={cx('rate-left', 'flex')}>
          <span className={cx('rate-number', 'flex')}>
            <strong>
              <StarIcon />
            </strong>
            5.0
          </span>
          <span className={cx('dot')}>.</span>
          <u>14 reviews</u>
          <span className={cx('dot')}>.</span>
          <span className={cx('superhost', 'flex')}>
            <strong>
              <MedalIcon />
            </strong>
            Superhost
          </span>
          <span className={cx('dot')}>.</span>
          <u>Cedar City, Utah, United States</u>
        </div>
        <div className={cx('rate-right', 'flex')}>
          <Button shadowOnHover='true' className={cx('interact', 'flex')}>
            <ShareIcon /> <u>Share</u>
          </Button>
          <Button shadowOnHover='true' className={cx('interact', 'flex')}>
            <HeartIcon />
            <u>Save</u>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Photos;
