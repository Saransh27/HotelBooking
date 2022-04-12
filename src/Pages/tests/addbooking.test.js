import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithState } from '../../test';
import AddBooking from '../addBooking';

const mockSuccesfulResponse = ({
  status = 200,
  method = 'GET',
  returnBody,
} = {}) => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        status,
        json: () => {
          return returnBody ? returnBody : {};
        },
      });
    });
  });
};

describe('Add Booking View', () => {
  const ADDBOOKING_SURNAME_INPUT_TEST_ID = 'addbooking-surname-input';
  const ADDBOOKING_ROOMS_SELECT_TEST_ID = 'addbooking-dropdown';
  const ADDBOOKING_BOOKING_DATE_TEST_ID = 'addbooking-date-input';

  test('should render correct fields', async () => {
    mockSuccesfulResponse({ returnBody: { data: ['101', '102'] } });
    renderWithState(<AddBooking />);

    //labels in form
    expect(screen.getByText('Surname')).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Booking Date')).toBeInTheDocument();

    // fields
    expect(
      screen.getByTestId(ADDBOOKING_SURNAME_INPUT_TEST_ID)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(ADDBOOKING_ROOMS_SELECT_TEST_ID)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(ADDBOOKING_BOOKING_DATE_TEST_ID)
    ).toBeInTheDocument();
  });
});
