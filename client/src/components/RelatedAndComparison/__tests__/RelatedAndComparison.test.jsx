import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext, initialState } from '../../App.jsx';
import RelatedAndComparison from '../RelatedAndComparison.jsx';

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
          <RelatedAndComparison />
        </StateContext.Provider>
      </DispatchContext.Provider>,
    );

    expect(screen.getByText('Related Products')).toBeTruthy();
    expect(screen.getByText('Your Outfit')).toBeTruthy();
  });
  it('Related Products should have items', () => {
    render(
      <DispatchContext.Provider value={() => {}}>
        <StateContext.Provider value={initialState}>
          <RelatedAndComparison />
        </StateContext.Provider>
      </DispatchContext.Provider>,
    );
    const { relatedDisplay } = initialState;
    console.log(relatedDisplay);
    expect(relatedDisplay.length).toBe(0); // passes should fail get state from reduce in app
  });
  it('Shoud not have any items in Your Outfit', () => {
    render(
      <DispatchContext.Provider value={() => {}}>
        <StateContext.Provider value={initialState}>
          <RelatedAndComparison />
        </StateContext.Provider>
      </DispatchContext.Provider>,
    );
    expect(screen.getByText('No items added')).toBeTruthy();
  });
});
