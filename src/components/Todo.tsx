import React, { useEffect, useState } from "react";
import DisplayList from "./DisplayList";
import formatList from "../formatList";
import AddButton from "./AddButton";

function Todo(props: { fetchList: any; addTodo: any; serverOn: any }) {
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

  useEffect(() => {
    async function checkServer() {
      const serverOn = await props.serverOn();
      setWorking(serverOn);
      console.log(working);
    }
    checkServer();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    props.addTodo(todo);
    setData([...data, todo]);
    setTodo("");
  };

  return (
    <div>
      <h1>ToDo List:</h1>
      <DisplayList list={data} />
      <form>
        <input
          data-testid={"add-task"}
          onChange={handleChange}
          value={todo}
        ></input>
        <button
          data-testid={"add-button"}
          onClick={handleClick}
          disabled={!working}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Todo;
