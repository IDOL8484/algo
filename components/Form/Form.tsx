import { Button } from "../Button/Button";
import styles from "./Form.module.css";
import { useState } from "react";

export function Form({ addTodo }: any) {
  const [text, setText] = useState(""); // создает состояние input

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <form className={styles.mainBlock} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите новую задачу"
        value={text}
        onChange={onChangeHandler}
        maxLength={250}
      ></input>
      <Button type="submit">Добавить задачу</Button>
    </form>
  );
}
