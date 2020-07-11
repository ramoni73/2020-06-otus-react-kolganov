import React, {FC} from "react";
import "./header.css";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    return (
        <div >
            <h1>Todo List</h1>
        </div>
    );
};

export default Header;