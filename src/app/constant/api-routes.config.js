const STATUS = {
  success: '200',
  badRequest: '400',
  unauthorizedAccess: '401',
  accessDenied: '403',
  notFound: '404',
  serverError: '500',
  serverErrorValue: 500,
};

const API_PATHS = {};

const HTTP_METHODS = {
  post: 'post',
  get: 'get',
  put: 'put',
  delete: 'delete',
};

const DEF_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export { STATUS, API_PATHS, DEF_HEADERS, HTTP_METHODS };
