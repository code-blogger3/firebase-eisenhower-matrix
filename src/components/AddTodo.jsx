import React, { useState } from "react";
import "../styles/addTodo.css";

function AddTodo({ createTodo }) {
  const initialTodoData = {
    todo: "",
    category: "",
  };
  const [newTodo, setNewTodo] = useState(initialTodoData);
  const [category, setCategory] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleCategoryClick = (categoryValue) => {
    setCategory(categoryValue);
  };

  function handleSubmit(e) {
    e.preventDefault();

    setNewTodo((prevTodo) => ({
      ...prevTodo,
      category: category,
    }));
    createTodo(newTodo);

    // Reset the todo field after submission
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      todo: "",
    }));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">New todo</label>
          <input
            type="text"
            value={newTodo.todo || ""}
            name="todo"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={() => handleCategoryClick("Important&Urgent")}>
            Important&Urgent
          </button>
          <button onClick={() => handleCategoryClick("Important&Noturgent")}>
            Important&Noturgent
          </button>
          <button onClick={() => handleCategoryClick("Notimportant&Urgent")}>
            Notimportant&Urgent
          </button>
          <button onClick={() => handleCategoryClick("Notimportant&Noturgent")}>
            Notimportant&Noturgent
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
