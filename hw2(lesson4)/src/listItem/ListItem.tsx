import React, { FC } from "react";
import "./listItem.css";

interface ListItemProps {
  id: number;
  label: string;
  done: boolean;
  important: boolean;
  onDeleted: (id: number) => void;
  onToggleImportant: (id: number) => void;
  onToggleDone: (id: number) => void;
}

const ListItem: FC<ListItemProps> = ({
  id,
  label,
  done,
  important,
  onToggleDone,
  onToggleImportant,
  onDeleted,
}) => {
  let classNames = "todo-list-item";

  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }

  const onDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onDeleted(id);
  };

  const onImportantClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onToggleImportant(id);
  };

  const onDoneClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onToggleDone(id);
  };

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onDoneClick}>
        {label}
      </span>

      <button
        className="btn btn-outline-success btn-sm float-right"
        type="button"
        onClick={onImportantClick}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        className="btn btn-outline-danger btn-sm float-right"
        type="button"
        onClick={onDeleteClick}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default ListItem;
