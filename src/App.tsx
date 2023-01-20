import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import { addTodo, fetchTodoList, serverCheck } from "./api/server";

function App() {
  return (
    <div>
      <Todo
        fetchList={fetchTodoList}
        addTodo={addTodo}
        serverOn={serverCheck}
      ></Todo>
    </div>
  );
}

export default App;
