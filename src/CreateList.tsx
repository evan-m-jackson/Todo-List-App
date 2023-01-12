import React from "react";

function CreateList (props: {list: Array<any>}) {
    if (props.list.length > 0)
    {
        return (
            <ul>
                {props.list.map((item) => <li>{item['task']}</li>)}
            </ul>
        )
    }

    else {
        return (
            <ul>
                {<li>Nothing on List</li>}
            </ul>
        )
    }
}

export default CreateList