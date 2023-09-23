import React from 'react';
import { render } from '@testing-library/react';
import VendingMachine from '../components/VendingMachine';

test('renders vending machine component', () => {
  const { getByText } = render(<VendingMachine />);
  const vendingMachineTitle = getByText(/Vending Machine/i);
  expect(vendingMachineTitle).toBeInTheDocument();
});