import React from "react";

export default function AddButton(props: { onClick: any; disabled: any }) {
  return (
    <button
      data-testid={"add-button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Add
    </button>
  );
}
