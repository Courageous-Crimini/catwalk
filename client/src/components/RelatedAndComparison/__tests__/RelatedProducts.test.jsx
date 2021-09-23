import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext, initialState } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import RelatedAndComparison from '../RelatedAndComparison.jsx';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Related Products', () => {
  it('Should ...', () => {
    // render(
    //   <DispatchContext.Provider value={() => {}}>
    //     <StateContext.Provider value={initialState}>
    //       <RelatedContext.Provider
    //         value={{
    //           setModalKey,
    //           setOpenModal,
    //           modalKey,
    //           yourOutfit,
    //         }}
    //       >
    //         <RelatedAndComparison />
    //       </RelatedContext.Provider>
    //     </StateContext.Provider>
    //   </DispatchContext.Provider>,
    // );
    expect(0).toBe(0); // place holder test
  });
});
