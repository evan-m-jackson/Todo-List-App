import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateList from './CreateList';

test('Creates li for a task with the correct value', () => {
    let fakeJson = new Array<any>()
    let foo: any = {'task': 'first task'}
    fakeJson.push(foo)
    render(<CreateList list={fakeJson}/>)
    const list = screen.getByRole('listitem')
    expect(list).toHaveTextContent('first task')
})

test('Has a li for each todo item', () => {
    let fakeJson = new Array<any>()
    let t1: any = {'task': 'first task'}
    let t2: any = {'task': 'second task'}
    fakeJson.push(t1, t2)
    render(<CreateList list={fakeJson}/>)
    const list = screen.getAllByRole('listitem')
    expect(list.length).toBe(2);
})

test('Return message if list is empty', () => {
    let fakeJson = new Array<any>()
    render(<CreateList list={fakeJson}/>)
    const list = screen.getByRole('listitem')
    expect(list).toHaveTextContent('Nothing on List')
})