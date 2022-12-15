import classNames from 'classnames/bind';

import Tittle from './Tittle.section';
import Benefit from './Benefit.section';
import History from './History.section';
import Offers from './Offers.section';
import Bedrooms from './Bedrooms.section';
import CheckIn from './CheckIn.section';
import Reserve from './Reserve.section';
import Highlight from './Highlight.section';

import styles from './Amenities.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const Amenities = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, true);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, setLastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 700 && window.scrollY > lastScrollY) {
        // if scroll down show the navbar
        setShow(true);
      } else {
        // if scroll up hide the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <>
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
        <div
          className={cx('navigation-container', show ? 'show' : 'hidden')}
          id='navbar'
        >
          <ul className={cx('navigation')}>
            <li className={cx('navigation-item')}>
              <a className={cx('navigation-text')} href='#'>
                Photos
              </a>
            </li>
            <li className={cx('navigation-item')}>
              <a className={cx('navigation-text')} href='#offer'>
                Amenities
              </a>
            </li>
            <li className={cx('navigation-item')}>
              <a className={cx('navigation-text')} href='#'>
                Reviews
              </a>
            </li>
            <li className={cx('navigation-item')}>
              <a className={cx('navigation-text')} href='#'>
                Location
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default Amenities;
