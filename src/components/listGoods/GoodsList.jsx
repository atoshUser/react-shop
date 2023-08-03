import React from "react";
import { GoodItem } from "../index";
import { useContext } from "react";
import { ShopContext } from "../context/context";
import "./GoodsList.css";
const GoodsList = () => {
  const { data } = useContext(ShopContext);
  
  return (
    <ul className="list ">
      {data.map((obj, idx) => {
        return <GoodItem key={obj.id} data={obj} {...obj} />;
      })}
    </ul>
  );
};

export default GoodsList;
