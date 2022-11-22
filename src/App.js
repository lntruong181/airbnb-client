import MainLayout from '@/layouts';
import GlobalStyles from '@/assets/GlobalStyles';
import Home from '@/features/Home';
function App() {
  return (
    <GlobalStyles>
      <MainLayout>
        <Home />
      </MainLayout>
    </GlobalStyles>
  );
}

export default App;
