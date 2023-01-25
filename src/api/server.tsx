import React, { useEffect, useState } from "react";

enum Url {
  GetList = "http://127.0.0.1:8000/todo-list/",
  AddTodo = "http://127.0.0.1:8000/todo",
}

export async function fetchTodoList() {
  const response = await fetch(Url.GetList);
  const actualData = response.json();
  return actualData;
}

export async function addTodo(todo: any) {
  const response = await fetch(Url.AddTodo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ task: todo }),
  });
  const actualData = response.json();
  return actualData;
}
