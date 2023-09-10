import https from './https';

const signUp = async (phoneNumber) => {
  const response = await https.POST('/sign-up', phoneNumber);
  return response;
};

const authService = {
  signUp,
};

export default authService;
