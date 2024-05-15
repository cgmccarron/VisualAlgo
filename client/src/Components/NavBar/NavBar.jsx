import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <a href={"./"}>VisualAlgo</a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href={"./sorting"}>Sorting</a>
        </li>
        <li className="navbar-menu-item">
          <a href={"./searching"}>Searching</a>
        </li>
        <li className="navbar-menu-item">
          <a href={"./pathfinding"}>Pathfinding</a>
        </li>
        <li className="navbar-menu-item">
          <a href={"./datastructures"}>Data Structures</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
