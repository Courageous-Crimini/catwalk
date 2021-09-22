import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import ProductInfo from '../ProductInfo.jsx';
import state from '../mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <ProductInfo />
    </StateContext.Provider>,
  );

  expect(screen.getByText(`${state.products.filter((product) => product.id === state.selectedProduct)[0].category}`)).toBeTruthy();
  expect(screen.getByText(`${state.products.filter((product) => product.id === state.selectedProduct)[0].name}`)).toBeTruthy();
  expect(screen.getByText(`$${state.products.filter((product) => product.id === state.selectedProduct)[0].default_price}`)).toBeTruthy();
});

// More of an Integration Test??
// test('Navigates to Ratings & Reviews Section on click', () => {
//   render(
//     <StateContext.Provider value={state}>
//       <ProductInfo />
//     </StateContext.Provider>,
//   );
//   userEvent.click(screen.getByText('Read all reviews'));
//   expect(global.window.location.pathname).toEqual('/?#RatingsAndReviews');
// });
