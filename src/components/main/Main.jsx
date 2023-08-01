import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoodsList } from "..";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { API_KEY, API_URL } from "../../config";
const Main = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [data, setData] = useState([]);
  const [ordered, setOrdered] = useState([]);

  // order product function
  console.log(ordered);
  const orderedProduct = (item) => {
    const isCheckList = ordered.some((obj) => obj.id == item.id);
    if (isCheckList) {
      const newOrdered = ordered.map((product) => {
        if (product.id == item.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return { ...product };
        }
      });
      setOrdered(newOrdered);
    } else {
      const newOrder = {
        ...item,
        quantity: 1,
      };
      setOrdered([...ordered, newOrder]);
    }
  };

  //
  const getData = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      setData(data.featured);
      setIsLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container h-100 ">
      <IconButton
        sx={{
          color: "#fff",
          position: "fixed",
          zIndex: "500",
          right: "30px",
          top: "100px",
        }}
        aria-label="add-product"
      >
        <Badge badgeContent={ordered.length} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
      {isLoad ? (
        <h1>Nothing not found</h1>
      ) : (
        <GoodsList orderedProduct={orderedProduct} data={data} />
      )}
    </div>
  );
};

export default Main;
