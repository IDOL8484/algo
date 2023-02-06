import { Inter } from "@next/font/google";
import { v4 as uuidv4 } from "uuid";

import { TodoList } from "@/components/TodoList/TodoList";
import { Form } from "@/components/Form/Form";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isCompleted: false,
    };

    if (text == "") {
      return;
    } else {
      setTodos([...todos, newTodo]);
    }
    //проверяю пустой ли текст
    //если текст пустой, начего не возвр.
    //если не пустой - записываю
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  return (
    <>
      <h1>Приложение ToDo</h1>
      <Form addTodo={addTodoHandler} />
      <div className="todoContainer">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </>
  );
}
