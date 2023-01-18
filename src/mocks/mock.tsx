import React from 'react';

let list = Array<any>();
export function mockFetchTodoList() {
    return list
}

export function mockAddTodo(todo: any) {
    list.push({task: todo})
}