import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import AddToCart from '../AddToCart.jsx';

test('On initial render, the "Add to Cart" button is disabled', () => {
  render(
    <StateContext.Provider value={
      {
        selectedStyle: 293480,
        styles: [
          {
            'default?': true,
            name: 'Forest Green & Black',
            original_price: '140.00',
            sale_price: null,
            style_id: 293480,
            skus: {
              1702764: { quantity: 8, size: 'XS' },
              1702765: { quantity: 16, size: 'S' },
              1702766: { quantity: 17, size: 'M' },
              1702767: { quantity: 10, size: 'L' },
              1702768: { quantity: 15, size: 'XL' },
              1702769: { quantity: 4, size: 'XL' },
            },
          }],
      }
    }
    >
      <AddToCart />
    </StateContext.Provider>,
  );

  expect(screen.getByRole('button', { name: 'Add to Cart' })).not.toHaveAttribute('onClick');
});

test('The "Add to Cart" button is enabled after a user selects a valid size and quantity', () => {
  render(
    <StateContext.Provider value={
      {
        selectedStyle: 293480,
        styles: [
          {
            'default?': true,
            name: 'Forest Green & Black',
            original_price: '140.00',
            sale_price: null,
            style_id: 293480,
            skus: {
              1702764: { quantity: 8, size: 'XS' },
              1702765: { quantity: 16, size: 'S' },
              1702766: { quantity: 17, size: 'M' },
              1702767: { quantity: 10, size: 'L' },
              1702768: { quantity: 15, size: 'XL' },
              1702769: { quantity: 4, size: 'XL' },
            },
          }],
      }
    }
    >
      <AddToCart />
    </StateContext.Provider>,
  );
  userEvent.selectOptions(screen.getByDisplayValue('Select Size'), 'L');
  userEvent.selectOptions(screen.getByDisplayValue('Select Quantity'), '4');

  // screen.debug();
  setTimeout(() => {
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toHaveAttribute('onClick');
  }, 2000);
});
