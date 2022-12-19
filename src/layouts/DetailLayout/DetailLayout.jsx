import classNames from 'classnames/bind';

import Container from '../components/Container';
import Navbar from '../Navbar';

import styles from './DetailLayout.module.scss';

const cx = classNames.bind(styles);

const DetailLayout = ({ children }) => {
  return (
    <Container>
      <Navbar isDetailLayout={true} />
      {children}
    </Container>
  );
};
export default DetailLayout;
