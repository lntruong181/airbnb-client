import https from './https';

export const signUp = async (phoneNumber) => {
  const response = await https.POST('/sign-up', phoneNumber);
  console.log('🚀 ~ response', response);
  return response;
};
