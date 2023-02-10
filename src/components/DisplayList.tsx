import React from "react";

interface IDisplayListRequiredProps {
  list: Array<any>;
  onClickDelete: any;
  onClickUpdate: any;
}

interface IRegularListItemRequiredProps {
  item: any;
  onClickDelete: any;
  onClickUpdate: any;
  idToUpdate: any;
}

interface IDisplayListDefaultProps {
  idToUpdate: any;
}

const defaultProps: IDisplayListDefaultProps = {
  idToUpdate: 0,
};

interface IDisplayListProps
  extends IDisplayListRequiredProps,
    IDisplayListDefaultProps {}
interface IRegularListItemProps extends IRegularListItemRequiredProps {}

export default function DisplayList(props: IDisplayListProps) {
  return (
    <ul>
      {props.list.length > 0 ? (
        props.list.map((item) => (
          <RegularListItem
            item={item}
            onClickDelete={props.onClickDelete}
            onClickUpdate={props.onClickUpdate}
            idToUpdate={props.idToUpdate}
          ></RegularListItem>
        ))
      ) : (
        <DisplayIfEmptyList></DisplayIfEmptyList>
      )}
    </ul>
  );
}

function RegularListItem(props: IRegularListItemProps) {
  const item = props.item;
  return (
    <li key={item["id"]}>
      <span className={"left"} id={`task-${item["id"]}`}>
        {props.idToUpdate == item["id"] ? (
          <input data-testid={`update-textbox-${item["id"]}`}></input>
        ) : (
          item["task"]
        )}
      </span>
      <span className={"right"}>
        <FirstButton
          item={item}
          onClickDelete={props.onClickDelete}
          onClickUpdate={props.onClickUpdate}
          idToUpdate={props.idToUpdate}
        ></FirstButton>
        <SecondButton
          item={item}
          onClickDelete={props.onClickDelete}
          onClickUpdate={props.onClickUpdate}
          idToUpdate={props.idToUpdate}
        ></SecondButton>
      </span>
    </li>
  );
}

function FirstButton(props: IRegularListItemProps) {
  if (props.idToUpdate != props.item["id"]) {
    return (
      <button
        data-testid={`edit-${props.item["id"]}`}
        onClick={() => props.onClickUpdate(props.item["id"])}
      >
        ✏️
      </button>
    );
  } else {
    return (
      <button
        data-testid={`confirm-${props.item["id"]}`}
        onClick={() => props.onClickUpdate(props.item["id"])}
      >
        ✅
      </button>
    );
  }
}

function SecondButton(props: IRegularListItemProps) {
  if (props.idToUpdate != props.item["id"]) {
    return (
      <button
        data-testid={`delete-${props.item["id"]}`}
        onClick={props.onClickDelete}
      >
        ❌
      </button>
    );
  } else {
    return (
      <button
        data-testid={`cancel-${props.item["id"]}`}
        onClick={props.onClickDelete}
      >
        ❌
      </button>
    );
  }
}

function DisplayIfEmptyList() {
  return <li key={"empty"}>Nothing on List</li>;
}

DisplayList.defaultProps = defaultProps;
