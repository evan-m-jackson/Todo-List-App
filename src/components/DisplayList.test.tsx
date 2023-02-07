import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayList from "./DisplayList";
import userEvent from "@testing-library/user-event";

const mockOnClick = async () => {};
test("Has an ul", () => {
  const todolist = new Array<any>();
  render(<DisplayList list={todolist} onClick={mockOnClick} />);

  const ul = screen.getByRole("list");

  expect(ul).toBeInTheDocument();
});

test("Creates list item(li) for a task with the correct value", () => {
  const todolist = new Array<any>();
  let task = { id: 1, task: "first task" };
  todolist.push(task);

  render(<DisplayList list={todolist} onClick={mockOnClick} />);

  const li = screen.getByRole("listitem");

  expect(li).toHaveTextContent("first task");
});

test("Has a list item(li) for each todo item", () => {
  const todolist = new Array<any>();
  let task1 = { id: 1, task: "first task" };
  let task2 = { id: 2, task: "second task" };
  todolist.push(task1, task2);

  render(<DisplayList list={todolist} onClick={mockOnClick} />);

  const liArr = screen.getAllByRole("listitem");

  expect(liArr.length).toBe(2);
});

test("Return message as list item(li) if todo list is empty", () => {
  const todolist = new Array<any>();
  render(<DisplayList list={todolist} onClick={mockOnClick} />);

  const li = screen.getByRole("listitem");

  expect(li).toBeInTheDocument();
});

test("Each list item(li) has a delete button", () => {
  const todolist = new Array<any>();
  let task1 = { id: "1", task: "first task" };
  todolist.push(task1);

  render(<DisplayList list={todolist} onClick={mockOnClick} />);

  const deleteButton = screen.getByTestId("1");

  expect(deleteButton).toBeInTheDocument();
});
