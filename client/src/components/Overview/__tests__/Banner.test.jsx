import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext } from '../../App.jsx';
import Banner from '../Banner.jsx';
import state from '../mockState.js';

test('Should render appropriate announcement message', () => {
  render(
    <DispatchContext.Provider value={() => {}}>
      <StateContext.Provider value={state}>
        <Banner />
      </StateContext.Provider>
    </DispatchContext.Provider>,
  );

  expect(screen.getByText('SITE-WIDE ANNOUNCEMENT!')).toBeTruthy();
  expect(screen.getByText('OFFER')).toBeTruthy();
  expect(screen.getByText('NEW PRODUCT HIGHLIGHT')).toBeTruthy();
});
