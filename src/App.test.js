import { render, screen } from '@testing-library/react';
import App from './App';

test('check for elements existance', () => {
  render(<App />);
  const linkElement = screen.getByTestId('container');
  expect(linkElement).toBeInTheDocument();
});
