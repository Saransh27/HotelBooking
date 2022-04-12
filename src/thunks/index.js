import { roomActions } from '../reducers/rooms';
import { getRooms } from '../selectors';

export const fetchRoomsData = () => {
  return async (dispatch, getState) => {
    const roomsList = getRooms(getState());
    if (roomsList.length <= 1) {
      const fetchData = async () => {
        const response = await fetch('./roomsData.json');
        if (!response.ok) {
          throw new Error('Could not fetch rooms list!');
        }

        const { data } = await response.json();

        return data;
      };
      try {
        const roomsList = await fetchData();
        dispatch(roomActions.initializeRooms(roomsList));
      } catch (error) {
        // show some error notification
      }
    }
  };
};
