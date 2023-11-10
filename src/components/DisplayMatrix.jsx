import "../styles/displayMatrix.css";
import TodoList from "./TodoList";

function DisplayMatrix({ todos }) {
  const importantUrgentList = todos.filter(
    (todo) => todo.category == "Important&Urgent"
  );
  const importantNoturgentList = todos.filter(
    (todo) => todo.category == "Important&Noturgent"
  );
  const notimportantUrgentList = todos.filter(
    (todo) => todo.category == "Notimportant&Urgent"
  );
  const notimportantNoturgentList = todos.filter(
    (todo) => todo.category == "Notimportant&Noturgent"
  );

  return (
    <>
      <section>
        <TodoList todos={importantUrgentList} />
        <TodoList todos={importantNoturgentList} />
        <TodoList todos={notimportantUrgentList} />
        <TodoList todos={notimportantNoturgentList} />
      </section>
    </>
  );
}

export default DisplayMatrix;
