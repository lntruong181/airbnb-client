import Button from '@/components/Button';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('container')}>
      <Button className={cx('show-map-btn')} isRound={true} scaleOnHover={true}>
        Show map
      </Button>
      <div className={cx('term')}>
        <ul className={cx('term-list')}>
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
        <ul className={cx('term-list', 'temp')}>
          <li className={cx('term-item')}>Sitemap</li>
          <li className={cx('term-item')}>UK Modern Slavery Act</li>
          <li className={cx('term-item')}>Company Details</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
