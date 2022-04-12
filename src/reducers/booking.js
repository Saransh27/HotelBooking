import { createSlice } from '@reduxjs/toolkit';
import { generateBookingKey } from '../helpers';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { booking: {} },
  reducers: {
    addBooking(state, action) {
      const key = generateBookingKey(action.payload);
      state.booking[key] = action.payload;
    },
  },
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice;
