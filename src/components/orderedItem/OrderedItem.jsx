import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack } from "@mui/material";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

const OrderedItem = ({
  name,
  quantity,
  price,
  id,
  deleteItemFromBasket = Function.prototype,
  incrementQuantity = Function.prototype,
  decrementQuantity = Function.prototype,
}) => {
  return (
    <li
      className="d-flex p-2 align-items-center bg-light text-dark"
      style={{ position: "relative" }}
    >
      <div
        className="d-flex align-items-center"
        style={{ marginRight: "20px" }}
      >
        <span style={{ marginRight: "10px" }}>{name}</span>
        {price} x{quantity}
      </div>

      <div className="d-flex align-items-center">
        <span style={{ marginRight: "40px" }}>
          {quantity * price} <b>$</b>
        </span>
        <Stack
          direction={"row"}
          sx={{ alignItems: "center", position: "absolute", right: "65px" }}
        >
          <IconButton
            aria-label="add-product"
            color="success"
            onClick={() => incrementQuantity(id)}
          >
            <PlusOneIcon />
          </IconButton>
          <IconButton
            aria-label="minus-product"
            sx={{ color: "crimson" }}
            onClick={() => decrementQuantity(id)}
          >
            <RemoveIcon />
          </IconButton>
        </Stack>

        <IconButton
          aria-label="delete"
          sx={{ position: "absolute", right: "10px", color: "crimson" }}
          onClick={() => deleteItemFromBasket(id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default OrderedItem;
