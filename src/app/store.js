import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bookingSlices from '@/features/Booking/bookingSlices';
import tourSlice from './sagas/tours/tourSlice.js';
import imageSlice from './sagas/image/imageSlice.js';
import rootSaga from './sagas/rootSaga.js';
import { ROOT_STATE_NAME as tours } from './sagas/tours/tourSlice.js';
import { ROOT_STATE_NAME as image } from './sagas/image/imageSlice.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    booking: bookingSlices,
    [tours]: tourSlice,
    [image]: imageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
