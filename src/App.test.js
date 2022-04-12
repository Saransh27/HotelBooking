import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('should render correct layout', () => {
    render(<App />);
    expect(screen.getByTestId('root-app')).toBeInTheDocument();

    //header
    expect(screen.getByText(/Booking System/i)).toBeInTheDocument();

    // home page
    expect(screen.getByText('IHS Hotel Booking App')).toBeInTheDocument();
    expect(screen.getByText('This is home page')).toBeInTheDocument();

    //left menu
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Add Booking')).toBeInTheDocument();
    expect(screen.getByText('Check Room')).toBeInTheDocument();
  });
});
