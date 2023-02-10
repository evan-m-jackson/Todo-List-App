import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayList from "./DisplayList";
import userEvent from "@testing-library/user-event";
import exp from "constants";

const mockOnClick = async () => {};
test("Has an ul", () => {
  const todolist = new Array<any>();
  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const ul = screen.getByRole("list");

  expect(ul).toBeInTheDocument();
});

test("Creates list item(li) for a task with the correct value", () => {
  const todolist = new Array<any>();
  let task = { id: 1, task: "first task" };
  todolist.push(task);

  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const li = screen.getByRole("listitem");

  expect(li).toHaveTextContent("first task");
});

test("Has a list item(li) for each todo item", () => {
  const todolist = new Array<any>();
  let task1 = { id: 1, task: "first task" };
  let task2 = { id: 2, task: "second task" };
  todolist.push(task1, task2);

  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const liArr = screen.getAllByRole("listitem");

  expect(liArr.length).toBe(2);
});

test("Return message as list item(li) if todo list is empty", () => {
  const todolist = new Array<any>();
  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const li = screen.getByRole("listitem");

  expect(li).toBeInTheDocument();
});

test("Each list item(li) has a delete button", () => {
  const todolist = new Array<any>();
  let task1 = { id: "1", task: "first task" };
  todolist.push(task1);

  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const deleteButton = screen.getByTestId("delete-1");

  expect(deleteButton).toBeInTheDocument();
});

test("Each list item(li) has a edit button", () => {
  const todolist = new Array<any>();
  let task1 = { id: "1", task: "first task" };
  todolist.push(task1);

  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
    />
  );

  const editButton = screen.getByTestId("edit-1");

  expect(editButton).toBeInTheDocument();
});

test("List item(li) is changed to an input box and update buttons", () => {
  const todolist = new Array<any>();
  let task1 = { id: "1", task: "first task" };
  todolist.push(task1);

  render(
    <DisplayList
      list={todolist}
      onClickDelete={mockOnClick}
      onClickUpdate={mockOnClick}
      idToUpdate={task1["id"]}
    />
  );

  const updateTextBox = screen.getByRole("textbox");
  expect(updateTextBox).toBeInTheDocument();

  const confirmUpdate = screen.getByTestId("confirm-1");
  expect(confirmUpdate).toBeInTheDocument();

  const cancelUpdate = screen.getByTestId("cancel-1");
  expect(cancelUpdate).toBeInTheDocument();
});
