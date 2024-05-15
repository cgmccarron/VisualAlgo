import React from "react";
import "./Node.css";

const Node = ({ row, col }) => {
  return (
    <div
      className="node"
      row={row}
      col={col}
      onClick={() => getClicked(row, col)}
    ></div>
  );
};

const getClicked = (row, col) => {
  console.log(row + " " + col);
  return [row, col];
};

export default Node;

export const createNode = (row, col) => {
  return {
    row,
    col,
    isvisited: true,
    previousNode: null,
    isstartnode: false,
    isendnode: false,
  };
};
