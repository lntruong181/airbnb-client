import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import { toggleMap } from '@/features/Booking/bookingSlices';

import styles from './Footer.module.scss';
import { GlobalIcon, ListIcon, MapIcon } from '@/assets/svgs';

const cx = classNames.bind(styles);

const Footer = () => {
  const dispatch = useDispatch();
  const isShowMap = useSelector((state) => state.booking.showMap);
  return (
    <footer className={cx('container', 'flex')}>
      <Button
        className={cx('show-map-btn')}
        isRound={true}
        scaleOnHover={true}
        onClick={() => dispatch(toggleMap())}
      >
        {isShowMap ? 'Show map' : 'Show map'}
        {isShowMap ? <ListIcon /> : <MapIcon />}
      </Button>
      {isShowMap || (
        <div className={cx('term', 'flex')}>
          <ul className={cx('term-list', 'flex')}>
            <li className={cx('term-item')}>© 2022 Airbnb, Inc</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>Privacy</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>Terms</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>Sitemap</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>UK Modern Slavery Act</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>Company Details</li>
            <span className={cx('dot')}>.</span>
            <li className={cx('term-item')}>Destionations</li>
          </ul>
          <ul className={cx('term-list', 'flex')}>
            <li className={cx('term-item', 'flex', 'bold')}>
              <span>
                <GlobalIcon />
              </span>
              Sitemap
            </li>
            <li className={cx('term-item', 'flex', 'bold')}>
              <span>$</span>
              GBM
            </li>
            <li className={cx('term-item', 'flex', 'bold')}>
              Support & Resource
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
};
export default Footer;
