import { call, put, takeLatest } from 'redux-saga/effects';

import { getAuth, getAuthFailure, getAuthSuccess } from './authSlice';
import { signUp } from '@/services/auth.service';

function* SignUp(action) {
  try {
    const data = yield call(signUp, action.payload);
    console.log('🚀 ~ data', data);
    yield put(getAuthSuccess(data));
  } catch (error) {
    yield put(getAuthFailure(error.message));
  }
}

function* authSaga() {
  console.log('[SAGA] - Auth is running. 💥💥💥');
  yield takeLatest(getAuth().type, SignUp);
}

export default authSaga;
