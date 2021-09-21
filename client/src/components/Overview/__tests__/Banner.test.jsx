import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext } from '../../App.jsx';
import Banner from '../Banner.jsx';

test('Should render appropriate announcement message', () => {
  render(
    <DispatchContext.Provider value={() => {}}>
      <StateContext.Provider value={
        {
          selectedStyle: 293482,
          styles: [
            {
              style_id: 293482,
              name: 'Ocean Blue & Grey',
              original_price: '140.00',
              sale_price: '100.00',
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
        <Banner />
      </StateContext.Provider>
    </DispatchContext.Provider>,
  );

  expect(screen.getByText('SITE-WIDE ANNOUNCEMENT!')).toBeTruthy();
  expect(screen.getByText('OFFER')).toBeTruthy();
  expect(screen.getByText('NEW PRODUCT HIGHLIGHT')).toBeTruthy();
});

test('Should render appropriate announcement message', () => {
  render(
    <DispatchContext.Provider value={() => {}}>
      <StateContext.Provider value={
          {
            selectedStyle: 293482,
            styles: [
              {
                style_id: 293482,
                name: 'Ocean Blue & Grey',
                original_price: '140.00',
                sale_price: '100.00',
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
        <Banner />
      </StateContext.Provider>
    </DispatchContext.Provider>,
  );

  userEvent.click(screen.getByText('NEW PRODUCT HIGHLIGHT'));

  // screen.debug();
  setTimeout(() => {
    expect(global.window.location.pathname).toEqual('/?');
    // expect(screen.getByRole('button', { name: 'Add to Cart' })).toHaveAttribute('onClick');
  }, 2000);
});
