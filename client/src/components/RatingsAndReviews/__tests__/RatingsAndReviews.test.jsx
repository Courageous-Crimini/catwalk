import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import state from '../../Overview/mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <RatingsAndReviews />
    </StateContext.Provider>,
  );
  expect(screen.getByText('Ratings & Reviews')).toBeTruthy();
});
