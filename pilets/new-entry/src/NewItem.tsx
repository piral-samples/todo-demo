import { PiletApi } from "@todo-sample/app";
import * as React from "react";

interface NewItemProps {
  piral: PiletApi;
}

const NewItem: React.FC<NewItemProps> = ({ piral }) => {
  const [text, setText] = React.useState("");

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        piral.emit('add-item', text);
        setText('');
        return false;
      }}
    >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(ev) => setText(ev.currentTarget.value)}
        autoFocus
      />
    </form>
  );
};

export default NewItem;
