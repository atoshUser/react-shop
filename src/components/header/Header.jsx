import React from "react";
import { Basket } from "../index";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Header = () => {
  return (
    <header
      style={{ height: "15vh" }}
      className="d-flex  bg-primary justify-content-between align-items-center p-4"
    >
      <span>React Shop</span>
      <nav className="d-flex align-items-center gap-5">
        <IconButton sx={{ color: "#fff" }} aria-label="add-product">
          <Badge badgeContent={5} color="success">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <a href="#">About</a>
        <a href="#">Series</a>
      </nav>
    </header>
  );
};

export default Header;
