import React from 'react';

export async function fetchTodoList() {
    const response = await fetch('http://127.0.0.1:8000/todo-list/')
    const actualData = response.json()
    return actualData
}

export async function addTodo(todo: any) {
    const response = await fetch('http://127.0.0.1:8000/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({task: todo})
    })
}