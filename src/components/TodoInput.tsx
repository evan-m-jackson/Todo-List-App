import React from "react";

export default function TodoInput(props: { onChange: any; value: any }) {
  return (
    <input
      data-testid={"add-task"}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
}
