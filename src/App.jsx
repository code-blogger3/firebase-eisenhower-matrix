import { db } from "./db/firbaseConfig";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayMatrix from "./components/DisplayMatrix";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  const createTodo = async (todoObject) => {
    await addDoc(todosCollectionRef, todoObject);
  };

  const getTodo = (setTodos) => {
    onSnapshot(todosCollectionRef, (response) => {
      setTodos(
        response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  };
  useEffect(() => {
    getTodo(setTodos);
  }, []);
  return (
    <>
      <AddTodo createTodo={createTodo} />
      <DisplayMatrix todos={todos} />
    </>
  );
}

export default App;
