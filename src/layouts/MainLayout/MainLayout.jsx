import classNames from 'classnames/bind';
import Container from '../components/Container';

import Footer from '../Footer';
import Navbar from '../Navbar';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
export default MainLayout;
