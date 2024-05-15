"use client";

import React, { useState } from "react";
import Grid, { getGridArray } from "./Grid/Grid";

import "./Pathfind.css";

const Pathfind = () => {
  const [grid, setGrid] = useState(getGridArray());
  grid[0][0].isstartnode = true;

  return (
    <div className="pathfind-container">
      <Grid grid={grid} />
    </div>
  );
};

export default Pathfind;
