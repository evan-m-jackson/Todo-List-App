import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import {
  mockAddTodo,
  mockFetchTodoList,
  mockFetchTodoListError,
} from "../mocks/mock";

test("Has a submit button", () => {
  render(<Todo fetchList={mockFetchTodoList} addTodo={mockAddTodo} />);

  const submitButton = screen.getByTestId("add-button");

  expect(submitButton).toBeInTheDocument();
});

test("Has an h1 header that says Todo List", () => {
  render(<Todo fetchList={mockFetchTodoList} addTodo={mockAddTodo} />);

  const header = screen.getByText("ToDo List:");

  expect(header).toBeInTheDocument();
});

test("Task is added when button is pressed", () => {
  render(<Todo fetchList={mockFetchTodoList} addTodo={mockAddTodo} />);

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const li = screen.getByText("a new task");

  expect(li).toBeInTheDocument();
});

test("Server is turned off", () => {
  render(<Todo fetchList={mockFetchTodoListError} addTodo={mockAddTodo} />);
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});

test("Error message pops up when server is turned off", () => {
  render(<Todo fetchList={mockFetchTodoListError} addTodo={mockAddTodo} />);
  const error = screen.getByTestId("error-message");

  expect(error).toBeInTheDocument();
});

test("No error message pops up when server is turned on", () => {
  render(<Todo fetchList={mockFetchTodoList} addTodo={mockAddTodo} />);
  const error = screen.queryByTestId("error-message");

  expect(error).not.toBeInTheDocument();
});

test("Error message is red with italics", () => {
  render(<Todo fetchList={mockFetchTodoListError} addTodo={mockAddTodo} />);
  const error = screen.queryByTestId("error-message");

  expect(error).toHaveStyle("color: red");
  expect(error).toHaveStyle("font-style: italic");
});
