import React from "react";

export default function AddButton(props: { onClick: any }) {
  return (
    <button data-testid={"add-button"} onClick={props.onClick}>
      Add
    </button>
  );
}
