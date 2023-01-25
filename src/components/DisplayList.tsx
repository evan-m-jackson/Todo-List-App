import React from "react";

export default function DisplayList(props: { list: Array<string> }) {
  return (
    <ul>
      {props.list.length > 0 ? (
        props.list.map((item) => <li>{item}</li>)
      ) : (
        <DisplayIfEmptyList></DisplayIfEmptyList>
      )}
    </ul>
  );
}

function DisplayIfEmptyList() {
  return <li key={"empty"}>Nothing on List</li>;
}
