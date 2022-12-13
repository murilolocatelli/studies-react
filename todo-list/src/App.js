import { useState, useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";
import ListItem from "./ListItem";

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
  const [filter, setFilter] = useState('all');
  const [state, dispatch] = useReducer(reducer, [ createItem("Go to work"), createItem("Eat food") ]);

  return (
    <>
      <h1>todos</h1>
      <TodoInput
        onSubmit={ (value) => {
          dispatch({ type: 'add', value: value });
        }}
      />
      <hr />
      <TodoFilter
        filter={ filter }
        onChange={(value) => {
          setFilter(value);
        }}
      />
      <ListItem
        state={ state }
        filter={ filter }
        dispatch={ dispatch }
      />
      <button onClick={() => dispatch({ type: 'remove' })}>
        Remove completed items
      </button>
      <script src="src/index.ts"></script>
    </>
  );
}

export default App;