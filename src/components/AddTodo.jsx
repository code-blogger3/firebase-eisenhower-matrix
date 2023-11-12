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
  const buttonColors = ["#FF5733", "#334DFF", "#33FF57", "#FFC300"];
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
            <button value={category} id={i} style={{ color: buttonColors[i] }}>
              {category}
            </button>
          ))}
        </div>
      </form>
    </>
  );
}

export default AddTodo;
