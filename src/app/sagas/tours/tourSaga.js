import { call, put, takeLatest } from 'redux-saga/effects';

import { toursApi } from '@/services/tours.service.js';
import { getTours, getToursSuccess, getToursFailure } from './tourSlice';

function* handleGetTours() {
  try {
    const { data } = yield call(toursApi.getTours);
    yield put(getToursSuccess(data));
  } catch (error) {
    yield put(getToursFailure(error.message));
  }
}

function* tourSaga() {
  console.log('[SAGA] - Tour is running. 💥💥💥');
  yield takeLatest(getTours().type, handleGetTours);
}

export default tourSaga;
