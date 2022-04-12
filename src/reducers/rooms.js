import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'rooms',
  initialState: { totalRooms: [] },
  reducers: {
    initializeRooms(state, action) {
      state.totalRooms = action.payload;
    },
  },
});

export const roomActions = roomSlice.actions;
export default roomSlice.reducer;
