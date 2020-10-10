import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check for button text', () => {
  const { getByText } = render(<App />);
  const buttonText = getByText(/Result/i);
  expect(buttonText).toBeInTheDocument();
});
