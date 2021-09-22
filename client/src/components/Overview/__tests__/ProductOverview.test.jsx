import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import ProductOverview from '../ProductOverview.jsx';
import state from '../mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <ProductOverview />
    </StateContext.Provider>,
  );
  expect(screen.getByText('Blend in to your crowd')).toBeTruthy();
  expect(screen.getByText('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.')).toBeTruthy();
  expect(screen.getAllByTestId('Feature').length).toBe(2);
});
