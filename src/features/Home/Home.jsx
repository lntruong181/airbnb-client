import classNames from 'classnames/bind';
import Navbar from './Navbar';
import styles from './Home.module.scss';
import Album from './Album';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx('container')}>
      <Navbar />
      <Album />
    </main>
  );
};
export default Home;
