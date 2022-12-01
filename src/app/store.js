import { configureStore } from '@reduxjs/toolkit';

import homeSlices from '@/features/Home/homeSlices';

export const store = configureStore({
  reducer: {
    home: homeSlices
  },
});
