import React, { useState } from "react";
import "../styles/addTodo.css";

function AddTodo({ createTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const categoryValue = e.nativeEvent.submitter.value;
    createTodo({ todo: newTodo, category: categoryValue });
    setNewTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">New todo</label>
          <input
            type="text"
            value={newTodo}
            name="todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div>
          <button value="Important&Urgent">Important&Urgent</button>
          <button value="Important&Noturgent">Important&Noturgent</button>
          <button value="Notimportant&Urgent">Notimportant&Urgent</button>
          <button value="Notimportant&Noturgent">Notimportant&Noturgent</button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;

{
  /* {buttons.map((button, index) => (
  <button key={index} onClick={categoryClicks[index]}>
    {button}
  </button>
))} */
}

// const buttons = [
//   "Important&Urgent",
//   "Important&Noturgent",
//   "Notimportant&Urgent",
//   "Notimportant&Noturgent",
// ];

// const categoryClicks = buttons.map((categoryValue) =>
//   handleCategoryClick(categoryValue)
// // );
