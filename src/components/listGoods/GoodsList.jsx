import React from "react";
import { GoodItem } from "../index";
import "./GoodsList.css";
const GoodsList = ({ data, orderedProduct }) => {
  return (
    <ul className="list ">
      {data.map((obj, idx) => {
        return (
          <GoodItem
            key={obj.id}
            data={obj}
            {...obj}
            orderedProduct={orderedProduct}
          />
        );
      })}
    </ul>
  );
};

export default GoodsList;
