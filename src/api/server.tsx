import React from "react";

const BASE_URL = process.env.REACT_APP_API_URL;
enum Url {
  GetList = `full-todo-list`,
  AddTodo = "full-todo",
  DeleteTodo = "todo-delete/",
}

export async function fetchTodoList() {
  const response = await fetch(BASE_URL + Url.GetList);
  return response.json();
}

export async function addTodo(todo: any) {
  const response = await fetch(BASE_URL + Url.AddTodo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ task: todo }),
  });
  return response.json();
}

export async function deleteTodo(id: any) {
  const response = await fetch(BASE_URL + Url.DeleteTodo + id, {
    method: "DELETE",
  });
  return response.ok;
}
