import React from "react";
import "../../App.css";
import { ItemBaseData } from "../../dummydata";

const Ground = () => {
  const calculateSize = (arr) => {
    const width = arr[0] * 30;
    const height = arr[1] * 30;
    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div className="ground">
      {Object.values(ItemBaseData).map((item) => (
        <div
          key={item.id} // add a unique key prop for each item
          draggable
          className="groundItems"
          style={calculateSize(item.size)} // set width and height using the helper function
        >
          {item.description}
        </div>
      ))}
    </div>
  );
};


export default Ground;
