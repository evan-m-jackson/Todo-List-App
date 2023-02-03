import React from "react";

let list = Array<any>();
export function mockFetchTodoList() {
  return list;
}
export function mockFetchTodoListError() {
  throw "Error";
}

export function mockAddTodoError(todo: any) {
  throw "Error";
}

export function mockAddTodo(todo: any) {
  return { id: 1, task: todo };
}

export function mockDeleteTodo(id: string) {
  return true;
}

export function mockDeleteTodoError(id: string) {
  throw "Error";
}
