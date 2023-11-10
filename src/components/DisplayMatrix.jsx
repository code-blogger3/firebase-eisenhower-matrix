import React, { useState } from "react";
import TodoList from "./TodoList";

function DisplayMatrix({ todos }) {
  const importantUrgentList = todos.filter(
    (todo) => todo.catagory == "Important&Urgent"
  );
  const importantNoturgentList = todos.filter(
    (todo) => todo.catagory == "Important&Noturgent"
  );
  const notimportantUrgentList = todos.filter(
    (todo) => todo.catagory == "Notimportant&Urgent"
  );
  const notimportantNoturgentList = todos.filter(
    (todo) => todo.catagory == "Notimportant&Noturgent"
  );

  return (
    <>
      <section>
        <TodoList todos={importantUrgentList} />
        <TodoList todos={importantNoturgentList} />
        <TodoList todos={notimportantUrgentList} />
        <TodoList todos={notimportantNoturgentList} />
      </section>
    </>
  );
}

export default DisplayMatrix;
