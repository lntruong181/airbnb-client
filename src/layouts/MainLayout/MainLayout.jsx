import Container from '../components/Container';
import Footer from '../Footer';
import Navbar from '../Navbar';

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
