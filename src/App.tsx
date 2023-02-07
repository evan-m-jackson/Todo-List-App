import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, fetchTodoList } from "./api/server";

function App() {
  return (
    <div>
      <Todo
        fetchList={fetchTodoList}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      ></Todo>
    </div>
  );
}

export default App;
