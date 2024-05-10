"use client";

import React from "react";
import { resetArray } from "../Array";
import "./MergeSort.css";

const MergeSort = () => {
  const [array, setArray] = React.useState([]);

  React.useEffect(() => {
    setArray(resetArray);
  }, []);

  return (
    <div className="merge-sort-container">
      <div className="array-bar-container">
        {array.map((value, i) => (
          <div
            className="array-bar"
            key={i}
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
      <button
        className="new-array-button"
        onClick={() => {
          setArray(resetArray);
        }}
      >
        New Array
      </button>
    </div>
  );
};

export default MergeSort;
