import React from "react";

interface IDisplayListRequiredProps {
  list: Array<any>;
  onClick: any;
}

interface IDisplayListProps extends IDisplayListRequiredProps {}

export default function DisplayList(props: IDisplayListProps) {
  return (
    <ul>
      {props.list.length > 0 ? (
        props.list.map((item) => (
          <li key={item["id"]}>
            {item["task"]}{" "}
            <button data-testid={`${item["id"]}`} onClick={props.onClick}>
              🗑
            </button>
          </li>
        ))
      ) : (
        <DisplayIfEmptyList></DisplayIfEmptyList>
      )}
    </ul>
  );
}

function DisplayIfEmptyList() {
  return <li key={"empty"}>Nothing on List</li>;
}
