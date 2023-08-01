import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import React from "react";

const OrderedItem = ({ name, quantity, price }) => {
  return (
    <li
      className="d-flex p-2 align-items-center bg-secondary"
      style={{ position: "relative" }}
    >
      <div
        className="d-flex align-items-center"
        style={{ marginRight: "10px" }}
      >
        <span style={{ marginRight: "10px" }}>{name}</span>
        {price}x{quantity}
      </div>
      <div className="d-flex align-items-center">
        <span>
          {quantity * price} <b>$</b>
        </span>
        <IconButton
          aria-label="delete"
          sx={{ position: "absolute", right: "10px" }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default OrderedItem;
