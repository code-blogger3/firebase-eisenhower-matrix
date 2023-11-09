import { db } from "./db/firbaseConfig";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import "./App.css";
import AddTodo from "./components/AddTodo";

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
