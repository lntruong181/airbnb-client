import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { store } from '@/app/store';
import AirbnbRoutes from './routes';

import GlobalStyles from '@/assets/GlobalStyles';
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <GlobalStyles>
          <AirbnbRoutes />
        </GlobalStyles>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
