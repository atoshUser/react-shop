import { IconButton, Typography } from "@mui/material";
import React from "react";
import "./OrderedList.css";
import { OrderedItem } from "../index";
import CloseIcon from "@mui/icons-material/Close";
const OrderedList = ({ ordered, changeBasket = Function.prototype,deleteItemFromBasket = Function.prototype }) => {
  // Total price of items cost

  const totalPrice = ordered.reduce((sum, obj) => {
    return sum + obj.price * obj.quantity;
  }, 0);

  return (
    <div className="modalVision">
      <ul className="ordered-list">
        <li
          className="p-1 d-flex justify-content-between align-items-center"
          style={{ background: "teal" }}
          key={"basket-head"}
        >
          <Typography variant={"h4"}>Baskets</Typography>
          <IconButton
            sx={{ color: "#fff" }}
            onClick={changeBasket}
            aria-label="close-icon"
          >
            <CloseIcon />
          </IconButton>
        </li>
        {ordered.length ? (
          ordered.map((item) => {
            return <OrderedItem {...item} deleteItemFromBasket = {deleteItemFromBasket} />;
          })
        ) : (
          <li className="text-dark" key={"basket-total"}>
            <h3>Basket is empty !</h3>
          </li>
        )}
        <li className="p-1" style={{ background: "teal" }}>
          <Typography variant={"h4"}>Total price: {totalPrice} $</Typography>
        </li>
      </ul>
    </div>
  );
};

export default OrderedList;
