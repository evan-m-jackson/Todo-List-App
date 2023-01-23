import React from "react";

let list = Array<any>();
export function mockFetchTodoList() {
  return list;
}
export function mockFetchTodoListError() {
  throw "Error";
}

export function mockServerOn() {
  return true;
}

export function mockAddTodo(todo: any) {
  list.push({ task: todo });
}
