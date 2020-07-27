import React, { FC } from "react";

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
  let spanStyle = {
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "normal",
  } as React.CSSProperties;

  if (done) {
    spanStyle.textDecoration = "line-through";
  }
  if (important) {
    spanStyle.fontWeight = "bold";
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
    <span style={spanStyle}>
      <span onClick={onDoneClick}>{label}</span>

      <button type="button" onClick={onImportantClick}>
        !!!
      </button>

      <button type="button" onClick={onDeleteClick}>
        Del
      </button>
    </span>
  );
};

export default ListItem;
