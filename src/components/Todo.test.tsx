import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";
import {
  mockAddTodo,
  mockAddTodoError,
  mockDeleteTodo,
  mockDeleteTodoError,
  mockFetchTodoList,
  mockFetchTodoListError,
} from "../mocks/mock";
import userEvent from "@testing-library/user-event";

test("Has a submit button", () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
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
      deleteTodo={mockDeleteTodo}
    />
  );

  const header = screen.getByText("ToDo List:");

  expect(header).toBeInTheDocument();
});

test("Task is added when button is pressed", async () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByRole("button");
  userEvent.click(button);

  await waitFor(() => {
    const li = screen.getByText("a new task");
    expect(li).toBeInTheDocument();
  });
});

test("Error message pops up when server is turned off", () => {
  render(
    <Todo
      fetchList={mockFetchTodoListError}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
    />
  );

  const error = screen.getByTestId("error-message");

  expect(error).toBeInTheDocument();
});

test("No error message pops up when server is turned on", () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
    />
  );
  const error = screen.queryByTestId("error-message");

  expect(error).not.toBeInTheDocument();
});

test("Error message is red with italics", () => {
  render(
    <Todo
      fetchList={mockFetchTodoListError}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
    />
  );
  const error = screen.getByTestId("error-message");

  expect(error).toHaveStyle("color: red");
  expect(error).toHaveStyle("font-style: italic");
});

test("Error message when todo added when server is turned off", async () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodoError}
      deleteTodo={mockDeleteTodo}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByRole("button");
  userEvent.click(button);

  await waitFor(() => {
    const error = screen.getByTestId("error-message");
    expect(error).toBeInTheDocument();
  });
});

test("Add a todo and then delete it", async () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodo}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByTestId("add-button");
  userEvent.click(button);

  await waitFor(async () => {
    const li = screen.getByText("a new task");
    expect(li).toBeInTheDocument();
  });

  const deleteButton = screen.getByTestId("1");
  userEvent.click(deleteButton);

  await waitFor(async () => {
    const li = screen.queryByText("a new task");
    expect(li).not.toBeInTheDocument();
  });
});

test("Todo is not deleted if server is off", async () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodoError}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByTestId("add-button");
  userEvent.click(button);

  await waitFor(async () => {
    const li = screen.getByText("a new task");
    expect(li).toBeInTheDocument();
  });

  const deleteButton = screen.getByTestId("1");
  userEvent.click(deleteButton);

  await waitFor(async () => {
    const li = screen.getByText("a new task");
    expect(li).toBeInTheDocument();
  });
});

test("Error message pops up if delete is attempted and server is off", async () => {
  render(
    <Todo
      fetchList={mockFetchTodoList}
      addTodo={mockAddTodo}
      deleteTodo={mockDeleteTodoError}
    />
  );

  const input = screen.getByTestId("add-task");
  fireEvent.change(input, { target: { value: "a new task" } });
  const button = screen.getByTestId("add-button");
  userEvent.click(button);

  await waitFor(async () => {
    const li = screen.getByText("a new task");
    expect(li).toBeInTheDocument();
  });

  const deleteButton = screen.getByTestId("1");
  userEvent.click(deleteButton);

  await waitFor(async () => {
    const error = screen.getByTestId("error-message");
    expect(error).toBeInTheDocument();
  });
});
