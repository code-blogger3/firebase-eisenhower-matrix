import React, { useState } from "react";
import "../styles/addTodo.css";

function AddTodo({ createTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo != "") {
      const categoryValue = e.nativeEvent.submitter.value;
      createTodo({ todo: newTodo, category: categoryValue });
      setNewTodo("");
    }
  }
  const categories = [
    "Important&Urgent",
    "Important&Noturgent",
    "Notimportant&Urgent",
    "Notimportant&Noturgent",
  ];
  const buttonColors = ["#FF5733", "#FFC300", "#33FF57", "#334DFF"];
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <label htmlFor="todo">New todo</label>
          <input
            type="text"
            value={newTodo}
            name="todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div>
          {categories.map((category, i) => (
            <button
              value={category}
              id={i}
              style={{ backgroundColor: buttonColors[i] }}
            >
              {category}
            </button>
          ))}
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
