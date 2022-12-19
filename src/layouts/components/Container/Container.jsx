import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

const Container = ({ className, children }) => {
  return <div className={cx('box', className)}>{children}</div>;
};
export default Container;
