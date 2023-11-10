import React, { useState } from "react";

function AddTodo({ createTodo }) {
  const initialTodoData = {
    todo: "",
    catagory: "",
  };
  const [newTodo, setNewTodo] = useState(initialTodoData);
  const [catagory, setCatagory] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      catagory: catagory,
    }));
    createTodo(newTodo);
    setNewTodo(newTodo.todo == "");
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
        <button onClick={() => setCatagory("Important&Urgent")}>
          Important&Urgent
        </button>
        <button onClick={() => setCatagory("Important&Noturgent")}>
          Important&Noturgent
        </button>
        <button onClick={() => setCatagory("Notimportant&Urgent")}>
          Notimportant&Urgent
        </button>
        <button onClick={() => setCatagory("Notimportant&Noturgent")}>
          Notimportant&Noturgent
        </button>
      </form>
    </>
  );
}

export default AddTodo;
