import React from 'react'
import TodoTask from './TodoTask';

function TodoList({todos}) {
  return (
     <ul>
      {todos.map((todo, id) => {
        return <TodoTask todo={...todo} key={id} />;
      })}
    </ul>
  )
}

export default TodoList