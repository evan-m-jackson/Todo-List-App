import React, { Component, useEffect, useState } from 'react';


function Todo() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/todo-list/')
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            return response.json()
        })
        .then((actualData) => {
            setData(actualData)
            setError(null)
            console.log(data)
        })
        .catch((err) => {
            setError(err.message)
            setData(null)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div>
            <h1>ToDo List:</h1>
            <form>
                <input></input>
                <button>Add</button>
            </form>
            <p>{}</p>
        </div>
    )
}

export default Todo;