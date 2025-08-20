import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar and theme toggle', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  // expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  // expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /theme toggle/i })).toBeInTheDocument();
});
