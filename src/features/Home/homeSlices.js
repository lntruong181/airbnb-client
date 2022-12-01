import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMap: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleMap: (state) => {
      state.showMap = !state.showMap;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMap } = homeSlice.actions;

export default homeSlice.reducer;
