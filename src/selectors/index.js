import { createSelector } from '@reduxjs/toolkit';

export const getRooms = createSelector(
  (state) => state.rooms,
  (rooms) => {
    return [{ label: 'Select a Room', value: '' }].concat(
      rooms.map((room) => ({ label: room, value: room }))
    );
  }
);
