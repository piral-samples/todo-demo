import * as React from "react";
import { render } from "react-dom";
import { createInstance, Piral } from "piral-core";
import Layout from "./Layout";

const instance = createInstance({
  state: {
    components: {
      Layout,
    },
  },
  requestPilets() {
    return fetch("./pilets.json").then((res) => res.json());
  },
});

render(<Piral instance={instance} />, document.querySelector(".todoapp"));
