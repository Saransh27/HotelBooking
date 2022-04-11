import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from '../reducers/booking';

const store = configureStore({
  reducer: bookingSlice.reducer,
});

export const bookingActions = bookingSlice.actions;
export default store;
