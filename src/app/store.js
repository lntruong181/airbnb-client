import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bookingSlices from '@/features/Booking/bookingSlices';
import tourSlice from './sagas/tours/tourSlice.js';
import imageSlice from './sagas/image/imageSlice.js';
import authSlice from './sagas/auth/authSlice.js';
import rootSaga from './sagas/rootSaga.js';
import { ROOT_STATE_NAME as tours } from './sagas/tours/tourSlice.js';
import { ROOT_STATE_NAME as image } from './sagas/image/imageSlice.js';
import { ROOT_STATE_NAME as auth } from './sagas/auth/authSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    booking: bookingSlices,
    [tours]: tourSlice,
    [image]: imageSlice,
    [auth]: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
