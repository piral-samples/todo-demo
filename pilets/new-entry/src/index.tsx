import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import NewItem from "./NewItem";

export function setup(app: PiletApi) {
  app.registerExtension("new-entry", () => <NewItem piral={app} />);
}
