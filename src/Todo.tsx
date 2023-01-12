import React, { useEffect, useState } from 'react';
import CreateList from './CreateList';

export async function GetTodoList() {
    const response = await fetch('http://127.0.0.1:8000/todo-list/')

    if (!response.ok){
        throw new Error(
            `This is an HTTP error: The status is ${response.status}`
        )
    }
    const actualData = response.json()
    return actualData
}

function Todo() {
    const [data, setData] = useState(Array<any>);
    const [error, setError] = useState('');


    useEffect(() => {

        async function Wrapper() {
            const actualData = await GetTodoList()
            console.log(actualData)
            try {
                setData(actualData)
                setError('') 
            } catch (error) {
                setError('There is an error!!!!')
            }
        }
        Wrapper()
    }, [])

    return (
        <div>
            <h1>ToDo List:</h1>
            <CreateList list={data}/>
            <form>
                <input></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Todo;