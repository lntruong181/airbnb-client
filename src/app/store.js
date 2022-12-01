import { configureStore } from '@reduxjs/toolkit';

import bookingSlices from '@/features/Booking/bookingSlices';

export const store = configureStore({
  reducer: {
    booking: bookingSlices,
  },
});
