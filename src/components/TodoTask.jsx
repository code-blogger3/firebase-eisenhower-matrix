import React from "react";

function TodoTask({ todo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          // checked={completed}
          // onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {todo.todo}
      </label>
      <button>Delete</button>
    </li>
  );
}

export default TodoTask;
