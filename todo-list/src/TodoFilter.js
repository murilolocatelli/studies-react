import React from "react";

function TodoFilter({ filter, onChange }) {
    return (
        <div>
            <label htmlFor="filter">Filter</label>
            <select id="filter" value={filter} onChange={event => onChange(event.target.value) }>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}

export default TodoFilter;