import status from '@/app/constant/status';
import { createSlice } from '@reduxjs/toolkit';

export const ROOT_STATE_NAME = 'auth';

const initialState = {
  auth: { status: status.idle, data: {}, error: null },
};

export const authSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getAuth: (state) => {
      state.auth.status = status.loading;
      state.auth.error = null;
    },
    getAuthSuccess: (state, action) => {
      state.auth.status = status.success;
      state.auth.data = action.payload;
    },
    getAuthFailure: (state, action) => {
      state.auth.status = status.fail;
      state.auth.error = action.payload;
    },
  },
});

export const authSelector = (state) => state[ROOT_STATE_NAME].auth;
export const { getAuth, getAuthSuccess, getAuthFailure } = authSlice.actions;
export default authSlice.reducer;
