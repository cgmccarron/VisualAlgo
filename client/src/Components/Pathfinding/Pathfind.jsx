"use client";

import React, { useState, useEffect } from "react";
import Grid, { getGridArray } from "./Grid/Grid";

import "./Pathfind.css";

const Pathfind = () => {
  const [grid, setGrid] = useState(getGridArray());

  return (
    <div
      className="pathfind-container"
      onClick={() => {
        setGrid(grid);
        console.log(grid);
      }}
    >
      <Grid grid={grid} />
      <button
        onClick={() => {
          setGrid(getGridArray());
        }}
      >
        NUKE THE GRID
      </button>
    </div>
  );
};

export default Pathfind;
