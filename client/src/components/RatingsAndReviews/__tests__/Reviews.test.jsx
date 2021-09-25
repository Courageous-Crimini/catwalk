import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from '../Reviews.jsx';
import { StateContext } from '../../App.jsx';
import state from '../mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <Reviews />
    </StateContext.Provider>,
  );
  expect(screen.getByText('Sort on')).toBeTruthy();
});
