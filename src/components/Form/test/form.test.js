import { render, screen } from '@testing-library/react';
import Form from '../';

describe('<Form />', () => {
  test('should render children and submit button', async () => {
    const INPUT_TEST_ID = 'form-test-children';
    const SUBMIT_BUTTON_TEST_ID = 'ihs-booking-form-submit-btn';
    render(
      <Form>
        <input data-testid='form-test-children' />
      </Form>
    );
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(SUBMIT_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  test('should render icons based on props', async () => {
    const SUCCESS_ICON_TEST_ID = 'ihs-booking-form-success-icon';
    const FAILURE_ICON_TEST_ID = 'ihs-booking-form-failure-icon';
    render(
      <Form showSuccessIcon showFailureIcon>
        <input data-testid='form-test-children' />
      </Form>
    );

    expect(screen.getByTestId(SUCCESS_ICON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(FAILURE_ICON_TEST_ID)).toBeInTheDocument();
  });
});
