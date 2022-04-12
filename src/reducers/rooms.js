import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'rooms',
  initialState: { rooms: [] },
  reducers: {
    addRooms(state, action) {
      state.rooms = action.payload;
    },
  },
});

export const roomActions = roomSlice.actions;
export default roomSlice.reducer;
