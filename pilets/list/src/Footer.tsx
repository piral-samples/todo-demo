import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import useStore from "./state";

interface FooterProps {
  piral: PiletApi;
}

const Footer: React.FC<FooterProps> = ({ piral }) => {
  const { items, filter, clearAll } = useStore();
  const active = items.filter((m) => !m.completed);
  const count = active.length;

  return (
    <>
      <span className="todo-count">
        <strong>{count}</strong> {count !== 1 ? "items" : "item"} left
      </span>
      <piral.Extension
        name="filter"
        params={{ items, filter, onClear: clearAll }}
      />
    </>
  );
};

export default Footer;
