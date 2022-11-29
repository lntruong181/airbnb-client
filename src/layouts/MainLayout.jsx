import classNames from 'classnames/bind';

import Sidebar from './Sidebar';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('container')}>
      <Sidebar />
      {children}
    </div>
  );
};
export default MainLayout;
