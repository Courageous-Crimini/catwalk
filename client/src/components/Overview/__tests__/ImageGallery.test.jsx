import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StateContext } from '../../App.jsx';
import ImageGallery from '../ImageGallery.jsx';
import state from '../mockState.js';

test('Renders appropriate items from context on load', () => {
  render(
    <StateContext.Provider value={state}>
      <ImageGallery />
    </StateContext.Provider>,
  );
  expect(screen.getAllByAltText('Thumbnail').length).toBe(6);
  expect(screen.getByAltText('Main')).toBeTruthy();
  expect(screen.getByTestId('arrowF')).toBeTruthy();
  expect(screen.getByTestId('arrowB')).toBeTruthy();
  expect(screen.getByTestId('arrowU')).toBeTruthy();
  expect(screen.getByTestId('arrowD')).toBeTruthy();
});

test('Handles horizontal carousel clicks', () => {
  render(
    <StateContext.Provider value={state}>
      <ImageGallery />
    </StateContext.Provider>,
  );
  const ogImage = screen.getByAltText('Main').src;
  userEvent.click(screen.getByTestId('arrowF'));
  expect(screen.getByAltText('Main').src).not.toEqual(ogImage);
  userEvent.click(screen.getByTestId('arrowB'));
  expect(screen.getByAltText('Main').src).toEqual(ogImage);
});

test('Handles vertical carousel clicks', () => {
  render(
    <StateContext.Provider value={state}>
      <ImageGallery />
    </StateContext.Provider>,
  );
  const ogImage = screen.getAllByAltText('Thumbnail')[0].src;
  userEvent.click(screen.getByTestId('arrowU'));
  expect(screen.getAllByAltText('Thumbnail')[5].src).toEqual(ogImage);
  userEvent.click(screen.getByTestId('arrowD'));
  expect(screen.getAllByAltText('Thumbnail')[0].src).toEqual(ogImage);
});

test('Handles main image click', () => {
  render(
    <StateContext.Provider value={state}>
      <ImageGallery />
    </StateContext.Provider>,
  );
  const ogImage = screen.getByAltText('Main').src;
  userEvent.click(screen.getByAltText('Main'));
  userEvent.click(screen.getByTestId('ZoomContainer'));
  expect(screen.getByAltText('Main')).toBeTruthy();
  expect(screen.getByAltText('Main').src).toEqual(ogImage);
});
