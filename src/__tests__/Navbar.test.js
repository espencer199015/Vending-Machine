import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders navbar component', () => {
  const { getByText } = render(<Navbar />);
  const homeLink = getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});