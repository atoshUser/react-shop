import { IconButton, Typography } from "@mui/material";
import React from "react";
import "./OrderedList.css";
import { OrderedItem } from "../index";
import { useContext } from "react";
import { ShopContext } from "../context/context";
import CloseIcon from "@mui/icons-material/Close";
const OrderedList = () => {
  const { orderedProductList, changeBasketShow } = useContext(ShopContext);

  const totalSum = orderedProductList.reduce((sum, obj) => {
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
            onClick={changeBasketShow}
            aria-label="close-icon"
          >
            <CloseIcon />
          </IconButton>
        </li>
        {orderedProductList.length ? (
          orderedProductList.map((item) => {
            return <OrderedItem key={item.id} data={item} {...item} />;
          })
        ) : (
          <li className="text-dark" key={"basket-total"}>
            <h3>Basket is empty !</h3>
          </li>
        )}
        <li className="p-1" style={{ background: "teal" }}>
          <Typography variant={"h4"}>Total price: {totalSum} $</Typography>
        </li>
      </ul>
    </div>
  );
};

export default OrderedList;
