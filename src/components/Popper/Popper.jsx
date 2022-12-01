import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Popper = ({
  children,
  className,
  visible,
  delay = [0, 200],
  render,
  ...restProps
}) => {
  return (
    <div className={cx('popper', className)}>
      <Tippy
        delay={delay}
        interactive={true}
        visible={visible}
        hideOnClick={true}
        render={render}
        {...restProps}
      >
        {children}
      </Tippy>
    </div>
  );
};

Popper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.array,
  render: PropTypes.func.isRequired,
};

export default Popper;
