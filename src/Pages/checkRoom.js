import { useEffect, useState } from 'react';

import Form from '../components/Form';
import FormInput from '../components/Input';
import Dropdown from '../components/Dropdown';

const initalState = {
  name: '',
  email: '',
  message: '',
  gender: '',
};

const options = [
  { label: '101', value: '101' },
  { label: '102', value: '102' },
  { label: '103', value: '103' },
  { label: '104', value: '104' },
  { label: '201', value: '201' },
  { label: '202', value: '202' },
  { label: '203', value: '203' },
  { label: '204', value: '204' },
];

const CheckBooking = () => {
  const [state, setState] = useState(initalState);
  useEffect(() => {
    document.title = 'Check Room';
  });

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <div>
      <h1>Check Room</h1>
      <Form submitButtonLabel='Check'>
        <Dropdown
          data-test-id={'checkRoomDropdown'}
          label='Room'
          options={options}
          value={state.message}
          onChange={handleInput}
        />
        <FormInput
          data-test-id={'checkRoomDate'}
          label='Booking Date'
          type='date'
          value={state.name}
          onChange={handleInput}
        />
      </Form>
    </div>
  );
};
export default CheckBooking;
