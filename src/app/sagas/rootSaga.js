import { all } from 'redux-saga/effects';

import imageSaga from './image/imageSaga';
import tourSaga from './tours/tourSaga';
import authSaga from './auth/authSaga';

function* rootSaga() {
  yield all([tourSaga(), imageSaga(), authSaga()]);
}

export default rootSaga;
