import status from '@/app/constant/status';
import { createSlice } from '@reduxjs/toolkit';

export const ROOT_STATE_NAME = 'image';

const initialState = {
  image: { status: status.idle, data: {}, error: null },
};

export const imageSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getImage: (state) => {
      state.image.status = status.loading;
      state.image.error = null;
    },
    getImageSuccess: (state, action) => {
      state.image.status = status.success;
      state.image.data = action.payload;
    },
    getImageFailure: (state, action) => {
      state.image.status = status.fail;
      state.image.error = action.payload;
    },
  },
});

export const imageSelector = (state) => state[ROOT_STATE_NAME].image;
export const { getImage, getImageSuccess, getImageFailure } =
  imageSlice.actions;
export default imageSlice.reducer;
