import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import Filter from "./Filter";

export function setup(app: PiletApi) {
  app.registerExtension("filter", ({ params }) => (
    <Filter {...params} piral={app} />
  ));
}
