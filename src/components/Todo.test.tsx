import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import {
  mockAddTodo,
  mockFetchTodoList,
  mockFetchTodoListError,
  mockServerOn,
} from "../mocks/mock";

test("Has a submit button", () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      serverOn={mockServerOn}
    />
  );

  const submitButton = screen.getByTestId("add-button");

  expect(submitButton).toBeInTheDocument();
});

test("Has an h1 header that says Todo List", () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      serverOn={mockServerOn}
    />
  );

  const header = screen.getByText("ToDo List:");

  expect(header).toBeInTheDocument();
});

test("Task is added when button is pressed", () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      serverOn={mockServerOn}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const li = screen.getByText("a new task");

  expect(li).toBeInTheDocument();
});

test("Server is turned off", () => {
  render(
    <Todo
      fetchList={mockFetchTodoListError}
      addTodo={mockAddTodo}
      serverOn={mockServerOn}
    />
  );
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});
