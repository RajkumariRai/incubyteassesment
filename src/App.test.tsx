// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator heading', () => {
  render(<App />);
  const headingElements = screen.getAllByText(/String Calculator/i);
  expect(headingElements).toHavfeLength(1); // Expect exactly one heading
  expect(headingElements[0]).toBeInTheDocument(); // Check if it's in the document

});
