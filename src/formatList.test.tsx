import React from "react";
import FormatList from "./formatList";

test("Array of objects is formatted to Array of strings", () => {
  let proxyList = new Array<any>();
  let t1: any = { id: 1, task: "first task" };
  let t2: any = { task: "second task" };
  proxyList.push(t1, t2);

  let newList = FormatList(proxyList);

  expect(newList).toStrictEqual(["first task", "second task"]);
});
