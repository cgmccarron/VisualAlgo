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
    <>
      {array.map((value, i) => (
        <div className="array-bar" key={i}>
          {value}
        </div>
      ))}
    </>
  );
};

export default MergeSort;
