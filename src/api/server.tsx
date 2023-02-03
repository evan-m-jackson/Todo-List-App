import React, { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_APIURL;
enum Url {
  GetList = `full-todo-list`,
  AddTodo = "full-todo",
  DeleteTodo = "todo-delete/",
}

export async function fetchTodoList() {
  const response = await fetch(BASE_URL + Url.GetList);
  const actualData = response.json();
  return actualData;
}

export async function addTodo(todo: any) {
  const response = await fetch(BASE_URL + Url.AddTodo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ task: todo }),
  });
  const actualData = response.json();
  return actualData;
}

export async function deleteTodo(id: any) {
  const response = await fetch(BASE_URL + Url.DeleteTodo + id, {
    method: "DELETE",
  });
  const responseOk = response.ok;
  return responseOk;
}
