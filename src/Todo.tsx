import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';
import formatList from './formatList';

function Todo(props: {fetchList: any, addTodo: any}) {
    const [data, setData] = useState(Array<any>);
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        async function getData() {
            const taskArr = await props.fetchList()
            const actualData = formatList(taskArr)
            setData(actualData)
        }
        getData()
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const handleClick = (event: any) => {
        event.preventDefault()
        setData([...data, todo])
        props.addTodo(todo)
        setTodo('')
    }

    return (
        <div>
            <h1>ToDo List:</h1>
            <DisplayList list={data}/>
            <form>
                <input data-testid={'add-task'} onChange={handleChange} value={todo}></input>
                <button data-testid={'add-button'} onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default Todo;