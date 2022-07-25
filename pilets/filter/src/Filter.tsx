import * as React from "react";
import { PiletApi } from "@todo-sample/app";

interface FilterProps {
  items: Array<{
    completed: boolean;
  }>;
  onClear(): void;
  filter: string;
  piral: PiletApi;
}

const Filter: React.FC<FilterProps> = ({ filter, items, onClear, piral }) => {
  const completedCount = items.filter((m) => m.completed).length;
  const changeShowing = React.useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      piral.emit("change-filter", ev.currentTarget.dataset.value);
    },
    []
  );
  
  return (
    <>
      <ul className="filters">
        <li>
          <a
            href="#"
            data-value="all"
            onClick={changeShowing}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            data-value="active"
            onClick={changeShowing}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            data-value="completed"
            onClick={changeShowing}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClear}>
          Clear completed
        </button>
      )}
    </>
  );
};

export default Filter;
