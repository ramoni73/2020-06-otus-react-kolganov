import React, { FC } from "react";
import "./todoList.css";
import { TodoObj } from "../app/App";
import ListItem from "../listItem/ListItem";

interface TodoListProps {
  toDos: Array<TodoObj>;
  onDeleted: (id: number) => void;
  onToggleImportant: (id: number) => void;
  onToggleDone: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({
  toDos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  const elements = toDos.map((item) => {
    const { id, ...restProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ListItem
          id={id}
          {...restProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todoList">{elements}</ul>;
};

export default TodoList;
