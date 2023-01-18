import React from "react";

export default function DisplayList (props: {list: Array<any>}) {
    return (
        <ul>
            {props.list.length > 0 ? props.list.map((item) => <li>{item}</li>) : <li>Nothing on List</li>}
        </ul>
    )
}