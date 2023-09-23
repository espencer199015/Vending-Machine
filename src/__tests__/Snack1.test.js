import React from 'react';
import { render } from '@testing-library/react';
import Snack1 from '../components/Snack1';

test('renders snack 1 component', () => {
  const { getByText } = render(<Snack1 />);
  const snack1Title = getByText(/Oreos/i);
  expect(snack1Title).toBeInTheDocument();
});