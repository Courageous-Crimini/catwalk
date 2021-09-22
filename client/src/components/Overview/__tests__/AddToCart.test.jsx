import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import AddToCart from '../AddToCart.jsx';
import state from '../mockState.js';

test('On initial render, the "Add to Cart" button is disabled', () => {
  render(
    <StateContext.Provider value={state}>
      <AddToCart />
    </StateContext.Provider>,
  );

  expect(screen.getByRole('button', { name: 'Add to Cart' })).not.toHaveAttribute('onClick');
});

test('The "Add to Cart" button is enabled after a user selects a valid size and quantity', () => {
  render(
    <StateContext.Provider value={state}>
      <AddToCart />
    </StateContext.Provider>,
  );
  expect(screen.getByTestId('Inactive')).toBeTruthy();
  userEvent.selectOptions(screen.getByDisplayValue('Select Size'), 'L');
  userEvent.selectOptions(screen.getByDisplayValue('Select Quantity'), '4');
  expect(screen.getByTestId('Active')).toBeTruthy();
});
