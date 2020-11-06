import React from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import "./Todo.css";

type Props = {
  name: string;
  createdAt?: string;
  completed: boolean;
  id: number;
  todoDelete: (id: number) => void;
  todoComplete: (id: number) => void;
};

const Todo: React.FC<Props> = ({
  name,
  createdAt,
  completed,
  id,
  todoDelete,
  todoComplete,
}) => {
  return (
    <li className="todo-list_item">
      <div className={`title-box ${completed ? "completed" : ""}`}>
        <div className="title">{name}</div>
        {completed ? null : <div className="createdAt"> {createdAt}</div>}
      </div>

      <div className="buttons">
        {completed ? null : (
          <button onClick={() => todoComplete(id)} className="completed">
            <div className="icon">
              <FiCheck size={20} />
            </div>
          </button>
        )}
        <button onClick={() => todoDelete(id)} className="delete">
          <div className="icon">
            <FiTrash2 size={20} />
          </div>
        </button>
      </div>
    </li>
  );
};

export default Todo;
