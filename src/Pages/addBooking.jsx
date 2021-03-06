import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getRooms } from '../selectors';
import Form from '../components/Form';
import FormInput from '../components/Input';
import Dropdown from '../components/Dropdown';
import { bookingActions } from '../reducers/booking';
import { fetchRoomsData } from '../thunks';

const initalState = {
  surname: '',
  room: '',
  bookingDate: moment().format('YYYY-MM-DD'),
};

const AddBooking = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(getRooms);
  const [state, setState] = useState(initalState);

  useEffect(() => {
    document.title = 'Add Booking';
    dispatch(fetchRoomsData());
  }, [dispatch]);

  const onSurnameChange = (e) => {
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, surname: value }));
  };

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
    if (state.room && state.surname) {
      dispatch(bookingActions.addBooking(state));
      alert(
        `Room no: ${state.room} booked successfully on the name of ${state.surname}`
      );
      setState(initalState);
    } else {
      if (!state.surname) {
        alert('Please enter a surname for booking');
      } else {
        alert('Please select a room before booking');
      }
    }
  };

  return (
    <div>
      <h1>Add Booking</h1>
      {rooms.length > 1 ? (
        <Form submitButtonLabel='Add' onSubmit={onSubmit}>
          <FormInput
            data-testid='addbooking-surname-input'
            label='Surname'
            value={state.surname}
            onChange={onSurnameChange}
          />
          <Dropdown
            data-testid='addbooking-dropdown'
            label='Room'
            options={rooms}
            value={state.room}
            onChange={onRoomSelection}
          />
          <FormInput
            data-testid='addbooking-date-input'
            label='Booking Date'
            type='date'
            min={moment().add(-1).format('YYYY-MM-DD')}
            value={state.bookingDate}
            onChange={onBookingDate}
          />
        </Form>
      ) : (
        'Loading......'
      )}
    </div>
  );
};
export default AddBooking;
