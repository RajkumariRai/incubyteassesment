// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator heading', () => {
  render(<App />);
  const headingElements = screen.getAllByText("String Calculator");
  expect(headingElements).toHaveLength(2); // Expect exactly one heading
  

});
