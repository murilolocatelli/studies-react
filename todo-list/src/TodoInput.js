import { useState } from "react";

function TodoInput({ onSubmit }) {
    const [newItem, setNewItem] = useState('');

    return (
        <form onSubmit={(event) => {
            onSubmit(newItem);
            setNewItem('');
            event.preventDefault();
          }}>
        <input
          aria-label="Type a task to add to the list"
          name="input"
          type="text"
          placeholder="What needs to be done?"
          onChange={(event) => {
            setNewItem(event.target.value)
          }}
          value={newItem}
        />
      </form>
    );
}

export default TodoInput;