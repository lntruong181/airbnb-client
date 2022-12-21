import Container from '../components/Container';
import Navbar from '../Navbar';

const DetailLayout = ({ children }) => {
  return (
    <Container>
      <Navbar isDetailLayout={true} />
      {children}
    </Container>
  );
};
export default DetailLayout;
