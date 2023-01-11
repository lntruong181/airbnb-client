import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ROUTE,
  timeout: 5000,
  headers: {
    'Content-Type': 'Application/json',
  },
});

const GET = (url, params) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};
const POST = (url, data) => {
  console.log('🚀 ~ data', data);
  console.log('🚀 ~ url', url);
  console.log('🚀 ~ instance.post(url, data);', instance.post(url, data));
  return instance.post(url, data);
};

const PUT = (url, params, data) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};
const PATCH = (url, params, data) => {
  return instance({
    method: 'patch',
    url,
    params,
    data,
  });
};
const DELETE = (url, params, data) => {
  return instance({
    method: 'delete',
    url,
    params,
    data,
  });
};

const https = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};

export default https;
