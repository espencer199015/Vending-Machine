import React from 'react';
import { render } from '@testing-library/react';
import Snack3 from '../components/Snack3';

test('renders snack 3 component', () => {
  const { getByText } = render(<Snack3 />);
  const snack3Title = getByText(/Granola Bars/i);
  expect(snack3Title).toBeInTheDocument();
});