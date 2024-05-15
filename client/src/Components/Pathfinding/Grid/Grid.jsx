import React from "react";
import Node, { createNode } from "./Node";
import "./Grid.css";

export const getGridArray = () => {
  const GRID_ROW_LENGTH = 10;
  const GRID_COL_LENGTH = 10;
  const grid = [];

  for (let row = 0; row < GRID_ROW_LENGTH; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }

  return grid;
};

const Grid = () => {
  let grid = getGridArray();

  return (
    <div>
      {grid.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="row-wrapper">
            {row.map((node, nodeIdx) => {
              return <Node key={nodeIdx} row={node.row} col={node.col} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
