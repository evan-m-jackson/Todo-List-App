import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayList from './DisplayList';

test('Has an ul',  () => {
    const todolist = new Array<any>()
    render(<DisplayList list={todolist}/>)

    const ul = screen.getByRole('list')

    expect(ul).toBeInTheDocument();
})

test('Creates list item(li) for a task with the correct value', () => {
    const todolist = new Array<any>()
    let task = 'first task'
    todolist.push(task)

    render(<DisplayList list={todolist}/>)

    const li = screen.getByRole('listitem')

    expect(li).toHaveTextContent('first task')
})

test('Has a list item(li) for each todo item', () => {
    const todolist = new Array<any>()
    let task1 = 'first task'
    let task2 = 'second task'
    todolist.push(task1, task2)

    render(<DisplayList list={todolist}/>)

    const liArr = screen.getAllByRole('listitem')

    expect(liArr.length).toBe(2);
})

test('Return message as list item(li) if todo list is empty', () => {
    const todolist = new Array<any>()
    render(<DisplayList list={todolist}/>)

    const li = screen.getByRole('listitem')

    expect(li).toBeInTheDocument()
})