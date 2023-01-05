import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Popper from '@/components/Popper';
import Wrapper from '@/components/Popper/Wrapper';
import Icon from '@/components/Icon';
import { ROUTE } from '@/enum/routes.enums';
import {
  AirbnbIcon,
  CancelIcon,
  FilterIcon,
  GlobalIcon,
  HamburgerIcon,
  SearchIcon,
  UserIcon,
} from '@/assets/svgs';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import Select from '@/components/Select';

import styles from './Navbar.module.scss';
import 'tippy.js/dist/tippy.css';
import { VERSION } from 'lodash';

const cx = classNames.bind(styles);

const Navbar = ({ isDetailLayout = false }) => {
  const { isShowing, toggle } = useModal();
  const { isShowing: isOpenRegisForm, toggle: toggleRegisForm } = useModal();

  const mockOptions = [
    { value: '1', displayValue: 'Åland Islands (+358)' },
    { value: '2', displayValue: 'Albania (+355)' },
    { value: '3', displayValue: 'Algeria (+213)' },
    { value: '4', displayValue: 'American Samoa (+1)' },
    { value: '5', displayValue: 'Andorra (+376)' },
    { value: '6', displayValue: 'Angola (+244)' },
    { value: '7', displayValue: 'Antigua & Barbuda (+1)' },
    { value: '8', displayValue: 'Armenia (+374)' },
    { value: '9', displayValue: 'Argentina (+54)' },
    { value: '10', displayValue: 'Australia (+61)' },
    { value: '1', displayValue: 'Åland Islands (+358)' },
    { value: '2', displayValue: 'Albania (+355)' },
    { value: '3', displayValue: 'Algeria (+213)' },
    { value: '4', displayValue: 'American Samoa (+1)' },
    { value: '5', displayValue: 'Andorra (+376)' },
    { value: '6', displayValue: 'Angola (+244)' },
    { value: '7', displayValue: 'Antigua & Barbuda (+1)' },
    { value: '8', displayValue: 'Armenia (+374)' },
    { value: '9', displayValue: 'Argentina (+54)' },
    { value: '10', displayValue: 'Australia (+61)' },
  ];

  return (
    <section
      className={cx('container', isDetailLayout ? 'sm' : 'lg')}
      id={'sidebar'}
    >
      <Link to={ROUTE.HOME} className={cx('item', 'logo')}>
        <span className={cx('logo-icon')}>
          <AirbnbIcon />
        </span>{' '}
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
            visible={isShowing}
            handleClickOutside={toggle}
            placement='bottom-end'
            className={cx('tooltip')}
            render={() => {
              return (
                <Wrapper>
                  <div className={cx('tooltip-box')}>
                    <p className={cx('tooltip-item')} onClick={toggleRegisForm}>
                      Sign up
                    </p>
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
              <Button onClick={toggle} className={cx('user')}>
                <span className={cx('user-icon')}>
                  <HamburgerIcon />
                </span>
                <span className={cx('user-avatar')}>
                  <UserIcon />
                </span>
              </Button>
            </span>
          </Popper>
        </div>
      </div>
      <Modal isOpen={isOpenRegisForm} onClose={toggleRegisForm}>
        <div className={cx('registration')}>
          <div className={cx('close-section')}>
            <p className={cx('close-icon')} onClick={toggleRegisForm}>
              <CancelIcon />
            </p>
            <h3 className={cx('registration-tittle')}>Log in or sign up</h3>
          </div>
          <div className={cx('welcome-section')}>
            <h1 className={cx('welcome-tittle')}>Welcome to Airbnb</h1>
            <Select label='Country/Region' options={mockOptions} />
          </div>
          <div className={cx('action-section')}></div>
        </div>
      </Modal>

      <div className={cx('where')}>
        <Icon className={cx('search-btn')}>
          <SearchIcon />
        </Icon>
        <h1 className={cx('question')}>
          Where to? <span>Anywhere . Any week . Add guests</span>
        </h1>
        <span className={cx('filter')}>
          <FilterIcon />
        </span>
      </div>
    </section>
  );
};
export default Navbar;
