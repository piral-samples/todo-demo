import * as React from "react";
import { PiletApi } from "@todo-sample/app";
import useStore from "./state";
import Footer from "./Footer";

interface ListProps {
  piral: PiletApi;
}

const List: React.FC<ListProps> = ({ piral }) => {
  const { items, remove, toggleAll, update, clearAll, filter, edit, editing } =
    useStore();
  const shownItems =
    filter === "all"
      ? items
      : items.filter((m) => m.completed === (filter === "completed"));
  const active = items.filter((m) => !m.completed);

  return (
    <>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAll}
          checked={active.length === 0}
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {shownItems.map((todo) => (
            <li key={todo.id} className={`${todo.completed ? "completed" : ""} ${todo === editing ? "editing" : ""}`}>
              <piral.Extension
                name="item"
                params={{
                  todo,
                  onToggle: () =>
                    update({ ...todo, completed: !todo.completed }),
                  onDelete: () => remove(todo),
                  onEdit: () => edit(todo),
                  onSubmit: (value: string) =>
                    update({ ...todo, title: value }),
                }}
              />
            </li>
          ))}
        </ul>
      </section>
      <Footer
        completedCount={items.length - active.length}
        count={items.length}
        onClearCompleted={clearAll}
      />
    </>
  );
};

export default List;
