import { render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

test('should render calculator component', () => {
  render(<Calculator />);
  const calculatorELement = screen.getByTestId('calculate');
  expect(calculatorELement).toBeInTheDocument();
  expect(calculatorELement).toHaveTextContent('AC');
});
