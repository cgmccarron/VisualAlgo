import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">VisualAlgo</div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Sorting</li>
        <li className="navbar-menu-item">Searching</li>
        <li className="navbar-menu-item">Data Structures</li>
      </ul>
    </div>
  );
};

export default NavBar;
