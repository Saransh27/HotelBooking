import { createSelector } from '@reduxjs/toolkit';
import { generateBookingKey } from '../helpers';

const getHotelRooms = (state) => state.rooms.rooms;
export const getBookings = (state) => state.booking.booking;

export const getRooms = createSelector(getHotelRooms, (rooms) => {
  return [{ label: 'Select a Room', value: '' }].concat(
    rooms.map((room) => ({ label: room, value: room }))
  );
});
