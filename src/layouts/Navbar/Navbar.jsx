import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '@/assets/Images';
import Button from '@/components/Button';
import Image from '@/components/Image';
import {
  AirbnbIcon,
  GlobalIcon,
  HamburgerIcon,
  SearchIcon,
} from '@/assets/Icons';
import Popper from '@/components/Popper';
import Wrapper from '@/components/Popper/Wrapper';
import Icon from '@/components/Icon';
import { ROUTE } from '@/enum/routes.enums';

import styles from './Navbar.module.scss';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const Navbar = ({ isDetailLayout = false }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((previous) => !previous);
  };

  return (
    <section
      className={cx('container', isDetailLayout ? 'sm' : 'lg')}
      id={'sidebar'}
    >
      <Link to={ROUTE.HOME} className={cx('item', 'logo')}>
        <span className={cx('logo-icon')}>
          <AirbnbIcon />
        </span>{' '}
        <h1 className={cx('heading-text')}>airbnb</h1>
      </Link>

      <div className={cx('item', 'box')}>
        {isDetailLayout ? (
          <span className={cx('box-heading')}>Start your search</span>
        ) : (
          <>
            <Button className={cx('box-btn')}>Anywhere</Button>
            <Button className={cx('box-btn')}>Any week</Button>
            <Button className={cx('box-btn')}>Add guests</Button>
          </>
        )}
        <Icon className={cx('box-search')} isRound={true}>
          <SearchIcon />
        </Icon>
      </div>

      <div className={cx('item')}>
        <Button className={cx('home')} shadowOnHover={true}>
          Airbnb your home
        </Button>
        <Button className={cx('language')} shadowOnHover={true}>
          <GlobalIcon />
        </Button>
        <div>
          <Popper
            visible={openMenu}
            handleClickOutside={setOpenMenu}
            placement='bottom-end'
            className={cx('tooltip')}
            render={() => {
              return (
                <Wrapper>
                  <div className={cx('tooltip-box')}>
                    <p className={cx('tooltip-item')}>Sign up</p>
                    <p className={cx('tooltip-item')}>Sign in</p>
                  </div>
                  <div className={cx('tooltip-box')}>
                    <p className={cx('tooltip-item')}>Airbnb your home</p>
                    <p className={cx('tooltip-item')}>Host an experience</p>
                    <p className={cx('tooltip-item')}>Help</p>
                  </div>
                </Wrapper>
              );
            }}
          >
            <span tabIndex='0'>
              <Button handleOnClick={toggleMenu} className={cx('user')}>
                <span className={cx('user-icon')}>
                  <HamburgerIcon />
                </span>
                <span className={cx('user-avatar')}>
                  <Image src={images.userIcon} alt={'user-icon'} />
                </span>
              </Button>
            </span>
          </Popper>
        </div>
      </div>

      <div className={cx('where')}>
        <Icon className={cx('search-btn')}>
          <SearchIcon />
        </Icon>
        <h1 className={cx('question')}>
          Where to? <span>Anywhere . Any week . Add guests</span>
        </h1>
        <span className={cx('filter')}>
          <Image src={images.filterIcon} alt='filter-icon' />
        </span>
      </div>
    </section>
  );
};
export default Navbar;
