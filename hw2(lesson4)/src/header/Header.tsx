import React, { FC } from "react";
import "./header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;
