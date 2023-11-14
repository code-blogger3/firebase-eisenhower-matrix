import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { db } from "./db/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const todosCollectionRef = collection(db, "todos");

  const createTodo = async (todoObject) => {
    await addDoc(todosCollectionRef, todoObject);
  };

  return (
    <>
      <AddTodo createTodo={createTodo} />
    </>
  );
}

export default App;
