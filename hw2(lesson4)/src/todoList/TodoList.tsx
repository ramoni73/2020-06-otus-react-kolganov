import React, { FC } from "react";
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
      <li key={id}>
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
  return <ul>{elements}</ul>;
};

export default TodoList;
