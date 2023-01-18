import React from 'react';
import './App.css';
import Todo from './Todo';
import {addTodo, fetchTodoList} from "./api/server";

function App() {

  return (
    <div>
      <Todo fetchList={fetchTodoList} addTodo={addTodo}></Todo>
    </div>
  );
}

export default App;