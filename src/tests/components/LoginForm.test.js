// /src/tests/components/LoginForm.test.js
import { render, screen } from '@testing-library/react';
import LoginForm from '../../components/Auth/LoginForm';

test('renders login form', () => {
  render(<LoginForm />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
