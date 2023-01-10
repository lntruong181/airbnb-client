import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { lazy } from 'react';

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
  DangerIcon,
  HamburgerIcon,
  SearchIcon,
  UserIcon,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  GmailIcon,
} from '@/assets/svgs';

import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import Select from '@/components/Select';

import styles from './Navbar.module.scss';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const schema = yup.object().shape({
  phone: yup
    .string()
    .required('Phone number is required.')
    .min(4, 'Phone number is too short or contains invalid characters.')
    .max(13),
});

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {};

  console.log(watch('phone'));

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
                    <p
                      className={cx('tooltip-item', 'highlight')}
                      onClick={toggleRegisForm}
                    >
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
              <Button
                onClick={toggle}
                className={cx('user')}
                leftIcon={<HamburgerIcon />}
              >
                <UserIcon />
              </Button>
            </span>
          </Popper>
        </div>
      </div>
      <Modal isOpen={isOpenRegisForm} onClose={toggleRegisForm}>
        <div className={cx('registration')}>
          <div className={cx('close-section')}>
            <Icon onClick={toggleRegisForm}>
              <CancelIcon />
            </Icon>
            <h3 className={cx('registration-tittle')}>Log in or sign up</h3>
          </div>
          <div className={cx('welcome-section')}>
            <h1 className={cx('welcome-tittle')}>Welcome to Airbnb</h1>

            {/* <Input type='text' label='Phone number' /> */}
            <form
              className={cx('welcome-form')}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Select
                className={cx('welcome-select')}
                label='Country/Region'
                options={mockOptions}
              />
              <input
                className={cx('welcome-input')}
                type='number'
                {...register('phone')}
              />
              {errors.phone ? (
                <label className={cx('text-danger')}>
                  <DangerIcon /> {errors.phone?.message}
                </label>
              ) : (
                <p className={cx('welcome-hint')}>
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.{' '}
                  <span className={cx('highlight')}>Privacy Policy</span>
                </p>
              )}

              <input
                className={cx('welcome-btn')}
                type='submit'
                value={'Continue'}
              />
            </form>
            <Button
              className={cx('alternative-btn')}
              isRound={true}
              scaleOnClick={true}
              icon={<FacebookIcon />}
            >
              Continue with Facebook
            </Button>
            <Button
              className={cx('alternative-btn')}
              isRound={true}
              scaleOnClick={true}
              icon={<GoogleIcon />}
            >
              Continue with Google
            </Button>
            <Button
              className={cx('alternative-btn')}
              isRound={true}
              scaleOnClick={true}
              icon={<AppleIcon />}
            >
              Continue with Apple
            </Button>
            <Button
              className={cx('alternative-btn')}
              isRound={true}
              scaleOnClick={true}
              icon={<GmailIcon />}
            >
              Continue with Gmail
            </Button>
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
