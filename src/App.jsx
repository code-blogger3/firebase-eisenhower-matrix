import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { db } from "./db/firebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import DisplayMatrix from "./Components/DisplayMatrix";

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
