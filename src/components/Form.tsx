import React, { ChangeEvent, useState } from "react";
import TodoList from "./TodoList";
import "./Form.css";

type Props = {};

export type TodoObj = {
  id: number;
  name: string;
  createdAt: string;
  completed: boolean;
};

const Form: React.FC<Props> = () => {
  const [todoList, setTodoList] = useState<Array<TodoObj>>([]);
  const [inputText, setInputText] = useState("");

  const getCurrentDate = (): string => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const getHours = newDate.getHours();
    const getMinutes = newDate.getMinutes();

    return `${date}/${month}/${year} ${getHours}:${
      getMinutes > 9 ? getMinutes : "0" + getMinutes
    }`;
  };

  const inputTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const todoListHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (inputText.length) {
      const todo = {
        id: Math.floor(Math.random() * 999999),
        name: inputText,
        createdAt: getCurrentDate(),
        completed: false,
      };

      const newTodoList: Array<TodoObj> = [...todoList, todo];

      setInputText("");
      setTodoList(newTodoList);
    }
  };

  return (
    <div className="form">
      <input
        placeholder="Add todos..."
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button className="button" onClick={todoListHandler}>
        Add
      </button>
      {todoList.length > 0 ? (
        <TodoList setTodoList={setTodoList} todoList={todoList} />
      ) : null}
      <div className="info">
        <div className="info-todos">Todos: {todoList.length}</div>
        <div className="info-checked">
          Checked: {todoList.filter((todo) => todo.completed).length}
        </div>
      </div>
    </div>
  );
};

export default Form;
