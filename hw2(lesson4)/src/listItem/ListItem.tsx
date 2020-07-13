import React, {FC} from "react";
import "./listItem.css";

interface ListItemProps {
    id: number,
    label: string,
    onDeleted: (id: number) => void,
    onToggleImportant: (id: number) => void,
    onToggleDone: (id: number) => void
}

const ListItem: FC<ListItemProps> = ({id, label, onToggleDone, onToggleImportant, onDeleted}) => {
    const onDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onDeleted(id);
    };

    const onImportantClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onToggleImportant(id);
    };

    return(
        <span>
            <span onClick={() => onToggleDone}>
                {label}
            </span>

            <button type="button" onClick={onImportantClick}>!</button>

            <button type="button" onClick={onDeleteClick}>Del</button>
        </span>
    )
}

export default ListItem