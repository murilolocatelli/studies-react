import { useState, useReducer } from "react";

let id = 0;

function createItem(title) {
  return {
    title: title,
    completed: false,
    id: id++
  };
}

const reducer = (state, action) => {
  if (action.type === 'add') {
    return [...state, createItem(action.value)];
  } else if (action.type === 'toogle') {
    return state.map(item => {
      if (item.id === action.value) {
        return { ...item, completed: !item.completed }
      }
      return item;
    });
  } else if (action.type === 'remove') {
    return state.filter(item => !item.completed);
  }
}

function App() {
  const [newItem, setNewItem] = useState('');
  const [filter, setFilter] = useState('all');
  const [state, dispatch] = useReducer(reducer, [ createItem("Go to work"), createItem("Eat food") ]);

  return (
    <>
      <h1>todos</h1>
      <form onSubmit={(event) => {
            dispatch({ type: 'add', value: newItem });
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
      <hr />
      <div>
        <label htmlFor="filter">Filter</label>
        <select id="filter" value={filter} onChange={(event) => setFilter(event.target.value) }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <ul>
        {
          state
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
                onClick={() => dispatch( { type: 'toogle', value: item.id })}
                style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              >
                {item.title}
              </li>
            )
        }
      </ul>
      <button onClick={() => dispatch({ type: 'remove' })}>
        Remove completed items
      </button>
      <script src="src/index.ts"></script>
    </>
  );
}

export default App;