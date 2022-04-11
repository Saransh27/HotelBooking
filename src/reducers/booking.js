import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: ['101', '102', '103', '104', '201', '202', '203', '204'],
  booking: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action) {
      state.booking = state.booking.concat(action.payload);
    },
  },
});

export default bookingSlice;
