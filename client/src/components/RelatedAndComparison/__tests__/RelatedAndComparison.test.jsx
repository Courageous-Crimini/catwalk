import React, { useContext } from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App, { StateContext, DispatchContext } from '../../App.jsx';
import RelatedAndComparison from '../RelatedAndComparison.jsx';
import { RelatedContext } from '../Context.jsx';
import { state } from './requests.jsx';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Related Items And Comparison', () => {
  it('Should load banners', () => {
    render(
      <StateContext.Provider value={state}>
        <RelatedContext>
          <RelatedAndComparison />
        </RelatedContext>
      </StateContext.Provider>,
    );

    expect(state.getByText('Related Products')).toBeTruthy();
    // expect(screen.getByText('Your Outfits')).toBeTruthy();
  });
});
