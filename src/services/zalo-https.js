import axios from 'axios';

const messageInstance = axios.create({
  baseURL: 'https://openapi.zalo.me/v3.0/oa',
});

const followersInstance = axios.create({
  baseURL: 'https://openapi.zalo.me/v2.0/oa',
});

const authInstance = axios.create({
  baseURL: 'https://oauth.zaloapp.com/v4/access_token',
});

export { messageInstance, authInstance, followersInstance };
