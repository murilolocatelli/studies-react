import React from "react";

function ListItem({ state, filter, dispatch }) {
    return (
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
    );
}

export default ListItem;