import React from 'react';
import { render } from '@testing-library/react';
import Snack2 from '../components/Snack2';

test('renders snack 2 component', () => {
  const { getByText } = render(<Snack2 />);
  const snack2Title = getByText(/Mandarin Oranges/i);
  expect(snack2Title).toBeInTheDocument();
});