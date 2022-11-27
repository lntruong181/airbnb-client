import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import styles from './MenuTooltip.module.scss';

const cx = classNames.bind(styles);

const MenuTooltip = ({ children }) => {
  return (
    <Tippy
      interactive
      hideOnClick='toggle'
      render={() => (
        <div className={cx('tooltip')}>
          <div className={cx('tooltip-box')}>
            {' '}
            <p className={cx('tooltip-item')}>Sign up</p>
            <p className={cx('tooltip-item')}>Sign in</p>
          </div>
          <div className={cx('tooltip-box')}>
            <p className={cx('tooltip-item')}>Airbnb your home</p>
            <p className={cx('tooltip-item')}>Host an experience</p>
            <p className={cx('tooltip-item')}>Help</p>
          </div>
        </div>
      )}
    >
      <div>{children}</div>
    </Tippy>
  );
};

export default MenuTooltip;
