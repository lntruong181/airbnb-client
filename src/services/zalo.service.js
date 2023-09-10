import { getData, setData } from '@/utils/storage';
import {
  authInstance,
  followersInstance,
  messageInstance,
  zaloHttps,
} from './zalo-https';

const signIn = async (data) => {
  const response = await authInstance.post(
    'https://oauth.zaloapp.com/v4/access_token',
    data,
    {
      headers: {
        secret_key: 'XpYY4OSd676PFS47BFV5',
      },
    }
  );
  if (response) {
    console.log('🚀 ~ response.data:', response.data.access_token);
    setData('token', response.data);
  }
};

const sendMessage = async () => {
  console.log('🚀 ~ zaloService.getToken():', zaloService.getToken());
  await messageInstance.post(
    '/message/cs',
    {
      recipient: {
        user_id: '1204461963660216518',
      },
      message: 'test message',
    },
    {
      headers: {
        access_token: zaloService.getToken(),
      },
    }
  );
};

const getFollowers = async () => {
  await followersInstance.get(
    '/getfollowers',
    {
      data: {
        offset: 0,
        count: 2,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${zaloService.getToken()}`,
      },
    }
  );
};

const getToken = () => getData('token')?.access_token;

const zaloService = {
  signIn,
  getToken,
  sendMessage,
  getFollowers,
};

export default zaloService;
