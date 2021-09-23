import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search.jsx';
import { StateContext } from '../../App.jsx';
import state from '../../Overview/mockState.js';

test('Renders the appropriate items from context on load', () => {
  render (
    <StateContext.Provider value={state}>
      <Search />
    </StateContext.Provider>,
  );
  expect(screen.getByTestId('search')).toBeTruthy();
});
