import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithState, mockSuccesfulResponse } from '../../test/helper';
import AddBooking from '../addBooking';
import { getBookings } from '../../selectors';

describe('Add Booking View', () => {
  const ADDBOOKING_SURNAME_INPUT_TEST_ID = 'addbooking-surname-input';
  const ADDBOOKING_ROOMS_SELECT_TEST_ID = 'addbooking-dropdown';
  const ADDBOOKING_BOOKING_DATE_TEST_ID = 'addbooking-date-input';

  test('should render correct fields', async () => {
    mockSuccesfulResponse({ returnBody: { data: ['101', '102'] } });
    renderWithState(<AddBooking />);

    //labels in form
    expect(await screen.findByText('Surname')).toBeInTheDocument();
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

    expect(screen.getByRole('option', { name: 'Select a Room' }).selected).toBe(
      true
    );
  });

  test('should book a room on submit click', async () => {
    mockSuccesfulResponse({ returnBody: { data: ['101', '102'] } });
    const { store } = renderWithState(<AddBooking />);
    expect((await screen.findAllByRole('option')).length).toBe(3);

    // add surname
    userEvent.type(
      screen.getByTestId(ADDBOOKING_SURNAME_INPUT_TEST_ID),
      'saransh'
    );

    // choose room number
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole('combobox'),
      // Find and select the '102' room option, like a real user would.
      screen.getByRole('option', { name: '102' })
    );

    expect(screen.getByRole('option', { name: '102' }).selected).toBe(true);
    userEvent.click(screen.getByTestId('ihs-booking-form-submit-btn'));
    expect(getBookings(store.getState())).toEqual({
      '102-20220413': {
        surname: 'saransh',
        room: '102',
        bookingDate: '2022-04-13',
      },
    });
  });
});
