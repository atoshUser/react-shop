import React from "react";
import { GoodItem } from "../index";
import "./GoodsList.css";
const GoodsList = ({ data }) => {
  console.log(data);
  return (
    <ul className="list ">
      {data.map((obj, idx) => {
        return <GoodItem key={obj.id} {...obj} />;
      })}
    </ul>
  );
};

export default GoodsList;
