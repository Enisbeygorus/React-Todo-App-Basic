import React, { useCallback } from "react";
import { TodoObj } from "./Form";
import Todo from "./Todo";
import "./TodoList.css";

type Props = {
  todoList: Array<TodoObj>;
  setTodoList: (todoList: Array<TodoObj>) => void;
};

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  const todoDelete = useCallback(
    (id: number) => {
      setTodoList(
        todoList.filter((todo) => {
          return todo.id !== id;
        })
      );
    },
    [todoList, setTodoList]
  );

  const todoComplete = useCallback(
    (id: number) => {
      const todos = todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });

      setTodoList(todos);
    },
    [todoList, setTodoList]
  );

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              createdAt={todo.createdAt}
              name={todo.name}
              completed={todo.completed}
              todoDelete={todoDelete}
              todoComplete={todoComplete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
