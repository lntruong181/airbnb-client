import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

const GET = (url, params) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};
const POST = async (url, data) => {
  const response = await instance.post(url, data);
  return response.data;
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
