import classNames from 'classnames/bind';

import Footer from '../Footer';
import Navbar from '../Navbar';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('container')}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
