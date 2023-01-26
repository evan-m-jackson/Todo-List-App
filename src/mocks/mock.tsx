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
  list.push({ task: todo });
  return { task: todo };
}
