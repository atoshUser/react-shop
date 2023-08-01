import { Typography } from "@mui/material";
import React from "react";
import "./OrderedList.css";
import { OrderedItem } from "../index";
const OrderedList = ({ ordered }) => {
  return (
    <ul className="ordered-list">
      <li className="p-1" style={{ background: "teal" }}>
        <Typography variant={"h4"}>Baskets</Typography>
      </li>
      {ordered.map((item) => {
        return <OrderedItem {...item} />;
      })}
      <li className="p-1" style={{ background: "teal" }}>
        <Typography variant={"h4"}>Total price:</Typography>
      </li>
    </ul>
  );
};

export default OrderedList;
