import status from '@/app/constant/status';
import { createSlice } from '@reduxjs/toolkit';

export const ROOT_STATE_NAME = 'tours';

const initialState = {
  tours: { status: status.idle, data: {}, error: null },
};

export const toursSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getTours: (state) => {
      state.tours.status = status.loading;
      state.tours.error = null;
    },
    getToursSuccess: (state, action) => {
      state.tours.status = status.success;
      state.tours.data = action.payload.data;
    },
    getToursFailure: (state, action) => {
      state.tours.status = status.fail;
      state.tours.error = action.payload;
    },
  },
});

export const tourSelector = (state) => state[ROOT_STATE_NAME].tours;
export const { getTours, getToursSuccess, getToursFailure } =
  toursSlice.actions;
export default toursSlice.reducer;
