import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext, initialState } from '../../App.jsx';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Related Items And Comparison', () => {
  it('Should load banners', () => {
    render(
      <DispatchContext.Provider value={() => {}}>
        <StateContext.Provider value={initialState}>
          <RatingsAndReviews />
        </StateContext.Provider>
      </DispatchContext.Provider>,
    );
    expect(screen.getByText('Related Products')).toBeTruthy();
    expect(screen.getByText('Your Outfit')).toBeTruthy();
  });
});