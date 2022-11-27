import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_ROUTE,
  timeout: 5000,
  headers: 'application/json; charset=utf-8',
});

const GET = (url, params) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};
const POST = (url, params, data) => {
  return instance({
    method: 'post',
    url,
    params,
    data,
  });
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
