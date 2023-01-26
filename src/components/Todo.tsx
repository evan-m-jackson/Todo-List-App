import React, { useEffect, useState } from "react";
import DisplayList from "./DisplayList";
import formatList from "../formatList";
import ServerError from "./ServerError";
import AddButton from "./AddButton";
import TodoInput from "./TodoInput";

function Todo(props: { fetchList: any; addTodo: any }) {
  const [data, setData] = useState(Array<any>);
  const [todo, setTodo] = useState("");
  const [working, setWorking] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const taskArr = await props.fetchList();
        const actualData = formatList(taskArr);
        setData(actualData);
      } catch {
        setWorking(false);
      }
    }
    getData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const [newdata, setNewdata] = useState(null);

  useEffect(() => {
    if (newdata) {
      setData([...data, newdata]);
      setNewdata(null);
    }
  }, [newdata]);

  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await props.addTodo(todo);
      setNewdata(response["task"]);
      setWorking(true);
    } catch {
      setWorking(false);
    }
    setTodo("");
  };

  return (
    <div>
      <h1>ToDo List:</h1>
      <DisplayList list={data} />
      <form>
        <TodoInput onChange={handleChange} value={todo} />
        <AddButton onClick={handleClick} />
        <ServerError working={working} />
      </form>
    </div>
  );
}

export default Todo;
