import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

let id = 0;
let items = [];
let filter = "all";

function addItem(title, setItemsState, setNewItem) {
  items.push({
    title: title,
    completed: false,
    id: id++
  });

  if (setItemsState) {
    setItemsState([...items]);
  }

  if (setNewItem) {
    setNewItem('');
  }
}

function toggleCompleted(id, setItemsState) {
  items.forEach((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
  });

  if (setItemsState) {
    setItemsState([...items]);
  }
}

function removeCompletedItems(setItemsState) {
  items = items.filter((item) => {
    return !item.completed;
  });

  if (setItemsState) {
    setItemsState([...items]);
  }
}

function filterItems(filterSelected, itemsState, setItemsState) {
  filter = filterSelected;

  setItemsState([...itemsState]);
}

addItem("Go to work");
addItem("Eat food");

function App() {
  const [newItem, setNewItem] = useState('');
  const [itemsState, setItemsState] = useState(items);

  return (
    <>
      <h1>todos</h1>
      <form onSubmit={(event) => {
            addItem(newItem, setItemsState, setNewItem);
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
      <hr />
      <div>
        <label htmlFor="filter">Filter</label>
        <select id="filter" value={filter} onChange={(event) => filterItems(event.target.value, itemsState, setItemsState) }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <ul>
        {
          itemsState
            .filter(item => {
              if (filter === 'all') {
                return true;
              } else if (filter === 'completed' && item.completed) {
                return true;
              } else if (filter === 'uncompleted' && !item.completed) {
                return true;
              }
              return false;
            })
            .map(item =>
              <li
                key={item.id}
                onClick={() => toggleCompleted(item.id, setItemsState)}
                style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              >
                {item.title}
              </li>
            )
        }
      </ul>
      <button onClick={() => removeCompletedItems(setItemsState)}>
        Remove completed items
      </button>
      <script src="src/index.ts"></script>
    </>
  );
}

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
