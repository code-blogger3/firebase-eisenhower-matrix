import { db } from "../db/firbaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import "../styles/todoTask.css";

function TodoTask({ todo }) {
  const deleteTodo = async (id) => {
    const TodoDoc = doc(db, "todos", id);
    await deleteDoc(TodoDoc);
  };
  return (
    <li>
      <span>{todo.todo}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoTask;
