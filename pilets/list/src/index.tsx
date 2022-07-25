import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import List from "./List";
import Footer from "./Footer";
import useStore, { Filters } from "./state";

export function setup(app: PiletApi) {
  app.on("add-item", (value: string) => {
    const { add } = useStore.getState();
    add({
      completed: false,
      id: Math.random().toString(26).substring(2),
      title: value,
    });
  });

  app.on("change-filter", (value: Filters) => {
    const { filterBy } = useStore.getState();
    filterBy(value);
  });

  app.registerExtension("list", () => <List piral={app} />);

  app.registerExtension("footer", () => <Footer piral={app} />);
}
