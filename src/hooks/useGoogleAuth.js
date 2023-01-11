import { useGoogleLogin } from 'react-use-googlelogin';

export const useGoogleAuth = () => {
  return useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
};
