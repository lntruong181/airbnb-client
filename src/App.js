import { Provider } from 'react-redux';

import { store } from '@/app/store';
import AirbnbRoutes from './routes';

import GlobalStyles from '@/assets/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <AirbnbRoutes />
      </GlobalStyles>
    </Provider>
  );
}

export default App;
