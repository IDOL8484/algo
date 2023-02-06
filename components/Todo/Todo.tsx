import { Button } from "../Button/Button";
import { DeleteIcon } from "../icons/DeleteIcon";
import { CheckboxIcon } from "../icons/CheckboxIcon";
import { CheckboxEmptyIcon } from "../icons/CheckboxEmptyIcon";

import styles from "./Todo.module.css";

export const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoAndButton}>
      <div className={styles.checkbox} onClick={() => toggleTodo(todo.id)}>
        {todo.isCompleted ? <CheckboxIcon /> : <CheckboxEmptyIcon />}
      </div>
      <h3
        className={`${styles.todo} ${
          !todo.isCompleted ? styles.inProcess : styles.processIsOver
        }`}
      >
        {todo.text}
      </h3>
      <Button size="s" color="light-blue" onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </Button>
    </div>
  );
};
