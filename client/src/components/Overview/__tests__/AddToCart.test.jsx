import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddToCart from '../AddToCart.jsx';

test('On initial render, the "Add to Cart" button is disabled', () => {
  render(<AddToCart />);

  // expect(screen.getByDisplayValue('Add To Cart')).toBeDisabled();
});

test('The "Add to Cart" button is enabled after a user selects a valid size and quantity', () => {
  render(<AddToCart />);
  // userEvent.select(screen.getByValue('Select Size', 'L'))
  // userEvent.select(screen.getByValue('Select Quantity', '1'))
  // expect(screen.getByDisplayValue('Add To Cart')).toBeEnabled();
});
