"use client";

import React from "react";
import { resetArray } from "./Array";
import "./Sort.css";
import { mergeSort } from "./MergeSort/MergeSort";

const Sort = () => {
  const [array, setArray] = React.useState([]);

  React.useEffect(() => {
    setArray(resetArray);
  }, []);

  return (
    <div className="sort-container">
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

      <button
        className="new-array-button"
        onClick={() => {
          mergeSort(array);
        }}
      >
        Merge Sort
      </button>
    </div>
  );
};

export default Sort;
