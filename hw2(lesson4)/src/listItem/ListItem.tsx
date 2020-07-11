import React, {FC} from "react";
import "./listItem.css";

interface ListItemProps {
    label: string,
    onDeleted: (id: number) => void,
    onToggleImportant: (id: number) => void,
    onToggleDone: (id: number) => void
}

const ListItem: FC<ListItemProps> = ({label, onToggleDone, onToggleImportant, onDeleted}) => {
    return(
        <span>
            <span onClick={() => onToggleDone}>
                {label}
            </span>

            <button type="button" onClick={() => onToggleImportant}>!</button>

            <button type="button" onClick={() => onDeleted}>Del</button>
        </span>
    )
}

export default ListItem