import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  /* learn-link */
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toContain("abhayprajapati.me");
});
