import operations from '../operate';

test('checks whether operate.js performs mathematical operations', () => {
  expect(operations(3, 4, '+')).toBe('7');
  expect(operations(3, 4, '-')).toBe('-1');
  expect(operations(12, 4, '÷')).toBe('3');
  expect(operations(12, 0, '÷')).toBe('division by 0  not allowed.');
});
