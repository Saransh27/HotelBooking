import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../reducers/booking';
import roomReducer from '../reducers/rooms';

const store = configureStore({
  reducer: { booking: bookingReducer, rooms: roomReducer },
});

export default store;
