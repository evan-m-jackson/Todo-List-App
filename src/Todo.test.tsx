import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('Has a submit button', () => {
  render(<Todo/>);
  const submitButton = screen.getByText('Add');
  expect(submitButton).toBeInTheDocument();
});

test('Has an h1 header that says Todo List', () => {
  render(<Todo/>);
  const header = screen.getByText('ToDo List:');
  expect(header).toBeInTheDocument();
})

test('Has an ul', async () => {
  render(<Todo/>);
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument();
})
