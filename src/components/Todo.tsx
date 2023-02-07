import React, { useEffect, useState } from "react";
import DisplayList from "./DisplayList";
import ServerError from "./ServerError";
import AddButton from "./AddButton";
import TodoInput from "./TodoInput";

interface ITodoRequiredProps {
  fetchList: any;
  addTodo: any;
  deleteTodo: any;
}

interface ITodoProps extends ITodoRequiredProps {}

function Todo(props: ITodoProps) {
  const [data, setData] = useState(Array<any>);
  const [todo, setTodo] = useState("");
  const [working, setWorking] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const taskArr = await props.fetchList();
        setData(taskArr);
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
      setNewdata(response);
      setWorking(true);
    } catch {
      setWorking(false);
    }
    setTodo("");
  };

  const [del, setDel] = useState(false);
  const [id, setId] = useState(0);
  const deleteItem = async (event: any) => {
    const buttonId = event.currentTarget.getAttribute("data-testid");
    setId(buttonId);
    try {
      const canDelete = await props.deleteTodo(buttonId);
      setDel(canDelete);
      setWorking(true);
    } catch {
      setDel(false);
      setWorking(false);
    }
  };

  useEffect(() => {
    const newDataList = data.filter((item) => item["id"] != id);
    setData(newDataList);
    setDel(false);
  }, [del]);

  return (
    <div>
      <h1>ToDo List:</h1>
      <DisplayList list={data} onClick={deleteItem} />
      <form>
        <TodoInput onChange={handleChange} value={todo} />
        <AddButton onClick={handleClick} />
        <ServerError working={working} />
      </form>
    </div>
  );
}

export default Todo;
