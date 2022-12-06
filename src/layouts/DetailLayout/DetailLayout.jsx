import classNames from 'classnames/bind';

import Footer from '../Footer';
import Navbar from '../Navbar';

import styles from './DetailLayout.module.scss';

const cx = classNames.bind(styles);

const DetailLayout = ({ children }) => {
  return (
    <div className={cx('container')}>
      <Navbar isDetailLayout={true} />
      {children}
      <Footer />
    </div>
  );
};
export default DetailLayout;
