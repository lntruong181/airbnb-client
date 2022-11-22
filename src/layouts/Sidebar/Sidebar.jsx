import images from '@/assets/Images';
import { UserIcon } from '@/assets/svgs';
import {
  AirbnbIcon,
  GlobalIcon,
  HamburgerIcon,
  SearchIcon,
} from '@/enum/icon.enum';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <nav className={cx('container')}>
      <div className={cx('item', 'logo')}>
        <span className={cx('logo-icon')}>
          <AirbnbIcon />
        </span>{' '}
        <h1 className={cx('heading-text')}>airbnb</h1>
      </div>

      <div className={cx('item', 'box')}>
        <button className={cx('box-btn')}>
          <span>Anywhere</span>
        </button>
        <button className={cx('box-btn')}>
          <span>Any week</span>
        </button>
        <button className={cx('box-btn')}>
          <span>Add guests</span>
        </button>
        <button className={cx('box-search')}>
          <SearchIcon />
        </button>
      </div>
      <div className={cx('item')}>
        <a href='#' className={cx('home')}>
          Airbnb your home
        </a>
        <button className={cx('language')}>
          <span className={cx('icon')}>
            <GlobalIcon />
          </span>
        </button>
        <div className={cx('user')}>
          <span className={cx('icon')}>
            <HamburgerIcon />
          </span>
          <img src={images.userIcon} className={cx('avatar')}></img>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
