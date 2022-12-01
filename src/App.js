import { Provider } from 'react-redux';

import MainLayout from '@/layouts';
import Home from '@/features/Home';
import { store } from '@/app/store';

import GlobalStyles from '@/assets/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <MainLayout>
          <Home />
        </MainLayout>
      </GlobalStyles>
    </Provider>
  );
}

export default App;
