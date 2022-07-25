import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import List from "./List";
import useStore from "./state";

export function setup(app: PiletApi) {
  app.on("add-item", (value: string) => {
    const { add } = useStore.getState();
    add({
      completed: false,
      id: Math.random().toString(26).substring(2),
      title: value,
    });
  });

  app.registerExtension("list", () => <List piral={app} />);
}
