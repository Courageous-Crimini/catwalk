import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search.jsx';
import state from '../mockState.js';

test('should render QA component', () => {
  render (<QA/>);
//   const QAElement = screen.getByTestId('QA-1');
//   expect(QAElement).toBeInTheDocument();
});
