import { all } from 'redux-saga/effects';

import imageSaga from './image/imageSaga';

import tourSaga from './tours/tourSaga';

function* rootSaga() {
  console.log('[SAGA] - ROOT start 💥💥💥');
  yield all([tourSaga(), imageSaga()]);
}

export default rootSaga;
