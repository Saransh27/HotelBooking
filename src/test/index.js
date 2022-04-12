import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import bookingReducer from '../reducers/booking';
import roomReducer from '../reducers/rooms';

export const renderWithState = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = configureStore({
    reducer: { booking: bookingReducer, rooms: roomReducer },
    preloadedState: initialState,
  });
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  const renderResult = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  return {
    renderResult,
    store,
  };
};
