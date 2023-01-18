import React from "react";

export default function formatList(list: Array<any>) {
    const updatedList = list.map((item) => {
        return item['task']
    })
    return updatedList
}