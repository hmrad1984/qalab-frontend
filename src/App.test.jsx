import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // You can change the text below to match something visible in your App component
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
