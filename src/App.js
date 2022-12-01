import { Provider } from 'react-redux';

import MainLayout from '@/layouts';
import { store } from '@/app/store';

import GlobalStyles from '@/assets/GlobalStyles';
import Booking from './features/Booking/Booking';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <MainLayout>
          <Booking />
        </MainLayout>
      </GlobalStyles>
    </Provider>
  );
}

export default App;
