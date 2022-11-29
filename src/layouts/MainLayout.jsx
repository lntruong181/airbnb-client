import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import Footer from './Footer';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('container')}>
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
