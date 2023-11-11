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
        <div>
          <h2>Important & Urgent</h2>
          <div className="todo-list important-urgent">
            <TodoList todos={importantUrgentList} />
          </div>
        </div>
        <div>
          <h2>Important & Not Urgent</h2>
          <div className="todo-list important-noturgent">
            <TodoList todos={importantNoturgentList} />
          </div>
        </div>
        <div>
          <h2>Not Important & Urgent</h2>
          <div className="todo-list notimportant-urgent">
            <TodoList todos={notimportantUrgentList} />
          </div>
        </div>
        <div>
          <h2>Not Important & Not Urgent</h2>
          <div className="todo-list notimportant-noturgent">
            <TodoList todos={notimportantNoturgentList} />
          </div>
        </div>
      </section>
    </>
  );
}

export default DisplayMatrix;
