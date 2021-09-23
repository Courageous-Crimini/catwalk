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

// import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { StateContext, DispatchContext, initialState } from '../../App.jsx';
// import RatingsAndReviews from '../RatingsAndReviews.jsx';
//
// const server = setupServer(
//  rest.get('/z', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
// );
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
// describe('Ratings & Reviews', () => {
//  it('Should load banners', () => {
//    render(
//      <DispatchContext.Provider value={() => {}}>
//        <StateContext.Provider value={initialState}>
//          <RatingsAndReviews />
//        </StateContext.Provider>
//      </DispatchContext.Provider>,
//    );
//    expect(screen.getByText('Ratings & Reviews')).toBeTruthy();
//  });
// });
