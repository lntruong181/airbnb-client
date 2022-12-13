import classNames from 'classnames/bind';

import { BedroomIcon, RightArrowIcon } from '@/assets/svgs';
import Icon from '@/components/Icon';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Bedrooms = () => {
  return (
    <div className={cx('section', 'homestay-bedroom')}>
      <h1 className={cx('tittle')}>Where you'll sleep</h1>
      <div className={cx('bedroom')}>
        <ul className={cx('bedroom-list')}>
          <Icon className={cx('next')} isRound={true}>
            <RightArrowIcon />
          </Icon>
          <li className={cx('bedroom-card')}>
            <BedroomIcon />
            <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
            <p className={cx('bedroom-desc')}>1 king bed</p>
          </li>
          <li className={cx('bedroom-card')}>
            <BedroomIcon />
            <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
            <p className={cx('bedroom-desc')}>1 king bed</p>
          </li>
          <li className={cx('bedroom-card')}>
            <BedroomIcon />
            <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
            <p className={cx('bedroom-desc')}>1 king bed</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bedrooms;
