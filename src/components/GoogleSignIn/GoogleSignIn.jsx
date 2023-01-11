import { GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = () => {
  const responseGoogle = (response) => {
    console.log('🚀 ~ response', response);
  };

  return (
    <GoogleLogin
      clientId='1053064064805-g0o691bs1o08or3adedqeitch9kcah5j.apps.googleusercontent.com'
      buttonText='Sign in with Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
