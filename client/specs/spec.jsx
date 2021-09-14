import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/components/App.jsx';

describe('Header', () => {
  it('Should render header to page', () => {
    render(<App />);
    const headerID = document.getElementById('header');
    expect(headerID).toBeTruthy();
  });
});

describe('Overview', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});

describe('Ratings and Reviews', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});

describe('Questions and Answers', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});

describe('Related Items And Comparison', () => {
  // it('Should...', () => {});
  // it('Should...', () => {});
});
