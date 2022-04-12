import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from '../reducers/booking';
import roomSlice from '../reducers/rooms';

const store = configureStore({
  reducer: { booking: bookingSlice.reducer, rooms: roomSlice.reducer },
});

export default store;
