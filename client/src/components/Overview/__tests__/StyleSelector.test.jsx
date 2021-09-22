import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext, DispatchContext } from '../../App.jsx';
import StyleSelector from '../StyleSelector.jsx';
import state from '../mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <DispatchContext.Provider value={() => {}}>
      <StateContext.Provider value={state}>
        <StyleSelector />
      </StateContext.Provider>
    </DispatchContext.Provider>,
  );
  expect(screen.getByText(`${state.styles.filter((style) => style.style_id === state.selectedStyle)[0].name}`)).toBeTruthy();
  expect(screen.getAllByAltText('Style').length).toBe(state.styles.filter((style) => style.style_id === state.selectedStyle)[0].photos.length);
});

test('Handles style click', () => {
  render(
    <DispatchContext.Provider value={() => {}}>
      <StateContext.Provider value={state}>
        <StyleSelector />
      </StateContext.Provider>
    </DispatchContext.Provider>,
  );

  userEvent.click(screen.getAllByAltText('Style')[1]);

  expect(screen.getByText(`${state.styles.filter((style) => style.style_id === state.selectedStyle)[0].name}`)).toBeTruthy();
});
