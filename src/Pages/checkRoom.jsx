import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Form from '../components/Form';
import FormInput from '../components/Input';
import Dropdown from '../components/Dropdown';
import { getRooms, getBookings } from '../selectors';
import { fetchRoomsData } from '../thunks';
import { generateBookingKey } from '../helpers';

const initalState = {
  room: '',
  bookingDate: moment().format('YYYY-MM-DD'),
};

const checkRoomAvailability = (bookings, { room, bookingDate }) => {
  const key = generateBookingKey({ room, bookingDate });
  return !Boolean(bookings[key]);
};

const CheckBooking = () => {
  const [state, setState] = useState(initalState);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [showFailureIcon, setShowFailureIcon] = useState(false);
  const dispatch = useDispatch();
  const rooms = useSelector(getRooms);
  const bookings = useSelector(getBookings);

  useEffect(() => {
    document.title = 'Add Booking';
    dispatch(fetchRoomsData());
  }, [dispatch]);

  const onRoomSelection = useCallback((e) => {
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, room: value.toString() }));
  }, []);

  const onBookingDate = (e) => {
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, bookingDate: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!state.room) {
      alert('Please select a room');
      return;
    }
    const isRoomAvailable = checkRoomAvailability(bookings, state);
    setShowSuccessIcon(isRoomAvailable);
    setShowFailureIcon(!isRoomAvailable);
  };

  return (
    <div>
      <h1>Check Room</h1>
      <Form
        submitButtonLabel='Check'
        onSubmit={onSubmit}
        showSuccessIcon={showSuccessIcon}
        showFailureIcon={showFailureIcon}
      >
        <Dropdown
          data-test-id={'checkRoomDropdown'}
          label='Room'
          options={rooms}
          value={state.message}
          onChange={onRoomSelection}
        />
        <FormInput
          data-test-id={'checkRoomBookingDate'}
          min={moment().add(-1).format('YYYY-MM-DD')}
          label='Booking Date'
          type='date'
          value={state.bookingDate}
          onChange={onBookingDate}
        />
      </Form>
    </div>
  );
};
export default CheckBooking;
