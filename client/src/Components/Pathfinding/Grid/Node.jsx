"use client";

import React from "react";
import "./Node.css";

const Node = ({ row, col, grid }) => {
  const [node, setNode] = React.useState(grid[row][col]);
  const getClicked = () => {
    setNode({ ...node, isstartnode: true });
    grid[row][col] = { ...node, isstartnode: true };
  };

  React.useEffect(() => {
    setNode(grid[row][col]);
  }, grid);

  return (
    <div
      className="node"
      row={row}
      col={col}
      style={node.isstartnode ? { backgroundColor: "red" } : {}}
      onClick={() => getClicked()}
    ></div>
  );
};

export default Node;

export const createNode = (row, col) => {
  return {
    row,
    col,
    isvisited: false,
    previousNode: null,
    isstartnode: false,
    isendnode: false,
  };
};
