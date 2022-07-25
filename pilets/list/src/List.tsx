import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import useStore from "./state";

interface ListProps {
  piral: PiletApi;
}

const List: React.FC<ListProps> = ({ piral }) => {
  const { items, remove, toggleAll, update, filter, edit, editing } =
    useStore();
  const shownItems =
    filter === "all"
      ? items
      : items.filter((m) => m.completed === (filter === "completed"));
  const active = items.filter((m) => !m.completed);
  const count = active.length;

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={count === 0}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {shownItems.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? "completed" : ""} ${
              todo === editing ? "editing" : ""
            }`}
          >
            <piral.Extension
              name="item"
              params={{
                todo,
                onToggle: () => update({ ...todo, completed: !todo.completed }),
                onDelete: () => remove(todo),
                onEdit: () => edit(todo),
                onSubmit: (value: string) => update({ ...todo, title: value }),
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
