import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '../AddToCart.jsx';

test('On initial render, the "Add to Cart" button is disabled', () => {
  render(<AddToCart />);

  screen.debug();
});
