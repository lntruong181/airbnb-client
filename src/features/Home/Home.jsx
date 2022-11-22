import classNames from 'classnames/bind';
import Navbar from './Navbar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx('container')}>
      <Navbar></Navbar>
    </main>
  );
};
export default Home;
