import { call, put, takeLatest } from 'redux-saga/effects';

import { getImage, getImageSuccess, getImageFailure } from './imageSlice';
import { imageApi } from '@/services/image.service';

function* generateImage() {
  try {
    const data = yield call(imageApi.getImage);
    yield put(getImageSuccess(data));
  } catch (error) {
    yield put(getImageFailure(error.message));
  }
}

function* imageSaga() {
  console.log('[SAGA] - Image is running. 💥💥💥');
  yield takeLatest(getImage().type, generateImage);
}

export default imageSaga;
