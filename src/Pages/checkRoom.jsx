import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Form from '../components/Form';
import FormInput from '../components/Input';
import Dropdown from '../components/Dropdown';
import { getRooms } from '../selectors';

const initalState = {
  room: '',
  bookingDate: moment().format('YYYY-MM-DD'),
};

const CheckBooking = () => {
  const [state, setState] = useState(initalState);
  const rooms = useSelector(getRooms);
  useEffect(() => {
    document.title = 'Check Room';
  });

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
  };

  return (
    <div>
      <h1>Check Room</h1>
      <Form submitButtonLabel='Check' onSubmit={onSubmit}>
        <Dropdown
          data-test-id={'checkRoomDropdown'}
          label='Room'
          options={rooms}
          value={state.message}
          onChange={onRoomSelection}
        />
        <FormInput
          data-test-id={'checkRoomDate'}
          min={moment().add(-1).format('YYYY-MM-DD')}
          label='Booking Date'
          type='date'
          value={state.name}
          onChange={onBookingDate}
        />
      </Form>
    </div>
  );
};
export default CheckBooking;
