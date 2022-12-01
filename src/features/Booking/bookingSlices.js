import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMap: false,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    toggleMap: (state) => {
      state.showMap = !state.showMap;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMap } = bookingSlice.actions;

export default bookingSlice.reducer;
