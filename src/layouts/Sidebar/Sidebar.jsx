import images from '@/assets/Images';
import { UserIcon } from '@/assets/svgs';
import Button from '@/components/Button';
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
    <section className={cx('container')}>
      <div className={cx('item', 'logo')}>
        <span className={cx('logo-icon')}>
          <AirbnbIcon />
        </span>{' '}
        <h1 className={cx('heading-text')}>airbnb</h1>
      </div>

      <div className={cx('item', 'box')}>
        <Button className={cx('box-btn')}>Anywhere</Button>
        <Button className={cx('box-btn')}>Any week</Button>
        <Button className={cx('box-btn')}>Add guests</Button>
        <Button className={cx('box-search')} color={'red'} isRound={true}>
          <SearchIcon />
        </Button>
      </div>
      <div className={cx('item')}>
        <Button className={cx('home')} shadowOnHover={true}>
          Airbnb your home
        </Button>
        <Button className={cx('language')} isRound={true} shadowOnHover={true}>
          <GlobalIcon />
        </Button>
        <div className={cx('user')}>
          <HamburgerIcon />
          <img src={images.userIcon} className={cx('avatar')}></img>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
