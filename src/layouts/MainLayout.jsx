import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
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
