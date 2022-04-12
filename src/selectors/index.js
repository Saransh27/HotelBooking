import { createSelector } from '@reduxjs/toolkit';

const getHotelRooms = (state) => state.rooms.totalRooms;
export const getBookings = (state) => state.booking;

export const getRooms = createSelector(getHotelRooms, (rooms) => {
  return [{ label: 'Select a Room', value: '' }].concat(
    rooms.map((room) => ({ label: room, value: room }))
  );
});
