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
      <section className="eisenhower-matrix">
        <div className="todo-list important-urgent">
          <h2>Important & Urgent</h2>
          <TodoList todos={importantUrgentList} />
        </div>
        <div className="todo-list important-noturgent">
          <h2>Important & Not Urgent</h2>
          <TodoList todos={importantNoturgentList} />
        </div>
        <div className="todo-list notimportant-urgent">
          <h2>Not Important & Urgent</h2>
          <TodoList todos={notimportantUrgentList} />
        </div>
        <div className="todo-list notimportant-noturgent">
          <h2>Not Important & Not Urgent</h2>
          <TodoList todos={notimportantNoturgentList} />
        </div>
      </section>
    </>
  );
}

export default DisplayMatrix;
