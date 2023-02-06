import { Todo } from "../Todo/Todo";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {!todos.length ? (
        <h2 className={styles.h2}>Список задач пуст.</h2>
      ) : (
        <h2 className={styles.h2}>Список задач:</h2>
      )}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
