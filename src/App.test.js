import { render, screen } from '@testing-library/react';
import App from './App';
import CustomerTotalTable from './CustomerTotalTable';

test('DashBoard Heading Test', () => {
  render(<App />);
  const headingElement = screen.getByText(/Reward Points Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});




