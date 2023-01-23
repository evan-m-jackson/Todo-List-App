import React from "react";

const TODO_LIST_URL = "http://127.0.0.1:8000/todo-list/";
const ADD_TODO_URL = "http://127.0.0.1:8000/todo";
export async function fetchTodoList() {
  const response = await fetch(TODO_LIST_URL);
  const actualData = response.json();
  return actualData;
}

export async function serverCheck() {
  const response = await fetch(TODO_LIST_URL);
  return response.ok;
}

export async function addTodo(todo: any) {
  try {
    const response = await fetch(ADD_TODO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ task: todo }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
