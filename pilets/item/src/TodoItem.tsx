import * as React from "react";

interface TodoItemProps {
  todo: {
    completed: boolean;
    title: string;
  };
  onToggle(): void;
  onDelete(): void;
  onEdit(): void;
  onSubmit(value: string): void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
  onSubmit,
}) => {
  const [text, setText] = React.useState(todo.title);

  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={onEdit}>{todo.title}</label>
        <button className="destroy" onClick={onDelete} />
      </div>
      <form
        onSubmit={(ev) => {
          onSubmit(text);
          ev.preventDefault();
          return false;
        }}
      >
        <input
          className="edit"
          value={text}
          onBlur={() => onSubmit(text)}
          onChange={(ev) => setText(ev.currentTarget.value)}
        />
      </form>
    </>
  );
};

export default TodoItem;
