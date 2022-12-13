import classNames from 'classnames/bind';
import { Calendar } from 'react-calendar';

import { LeftLightArrowIcon, RightLightArrowIcon } from '@/assets/svgs';

import styles from './Amenities.module.scss';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const cx = classNames.bind(styles);

const CheckIn = () => {
  return (
    <div className={cx('section', 'check-in')}>
      <h1 className={cx('tittle')}>5 nights in Rockbridge</h1>
      <p className={cx('sub')}>Nov 5, 2023 - Nov 10, 2023</p>
      <Calendar
        showDoubleView={true}
        selectRange={true}
        tileClassName={'tile'}
        className={'calendar'}
        nextLabel={<RightLightArrowIcon />}
        prevLabel={<LeftLightArrowIcon />}
        calendarType='Hebrew'
      ></Calendar>
    </div>
  );
};

export default CheckIn;
