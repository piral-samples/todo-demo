import * as React from "react";
import useStore from "./state";

const Footer = ({ count, completedCount, onClearCompleted }) => {
  const filter = useStore((m) => m.filter);
  const filterBy = useStore((m) => m.filterBy);

  const changeShowing = React.useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      filterBy(ev.currentTarget.dataset.value as any);
    },
    []
  );
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {count !== 1 ? "items" : "item"} left
      </span>
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
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
