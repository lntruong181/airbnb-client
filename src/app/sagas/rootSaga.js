import { all } from 'redux-saga/effects';

import imageSaga from './image/imageSaga';
import tourSaga from './tours/tourSaga';

function* rootSaga() {
  yield all([tourSaga(), imageSaga()]);
}

export default rootSaga;
