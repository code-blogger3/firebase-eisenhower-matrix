import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../db/firebaseConfig";
import "../styles/displayMatrix.css";

function DisplayMatrix({ todos }) {
  const deleteTodo = async (id) => {
    const TodoDoc = doc(db, "todos", id);
    await deleteDoc(TodoDoc);
  };
  return (
    <>
      {todos.map((todo, id) => {
        return (
          <li key={id}>
            <span>{todo.todo}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
}

export default DisplayMatrix;
