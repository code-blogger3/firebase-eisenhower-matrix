import React, { useState } from "react";
import "../styles/addTodo.css";

function AddTodo({ createTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo != "") {
      const cagetoryValue = e.nativeEvent.submitter.value;
      createTodo({ todo: newTodo, cagetory: cagetoryValue });
      setNewTodo("");
    }
  }

  const categories = [
    "Important&Urgent",
    "Important&Noturgent",
    "Notimportant&Urgent",
    "Notimportant&Noturgent",
  ];
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <label htmlFor="todo">New Todo</label>
          <input
            type="text"
            name="todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div>
          {categories.map((category, i) => (
            <button value={category} id={i}>
              {category}
            </button>
          ))}
        </div>
      </form>
    </>
  );
}

export default AddTodo;
