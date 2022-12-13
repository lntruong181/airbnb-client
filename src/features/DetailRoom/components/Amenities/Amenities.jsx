import classNames from 'classnames/bind';

import Tittle from './Tittle.section';
import Benefit from './Benefit.section';
import History from './History.section';
import Offers from './Offers.section';
import Bedrooms from './Bedrooms.section';
import CheckIn from './CheckIn.section';
import Reserve from './Reserve.section';

import styles from './Amenities.module.scss';
import Highlight from './Highlight';

const cx = classNames.bind(styles);

const Amenities = () => {
  return (
    <main className={cx('container')}>
      <div className='container-fluid g-0'>
        <div className='row'>
          <div className='col-sm-7'>
            <Tittle />
            <Highlight />
            <Benefit />
            <History />
            <Bedrooms />
            <Offers />
            <CheckIn />
          </div>
          <div className={cx('homestay-checkout', 'col-sm-4')}>
            <Reserve />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Amenities;
