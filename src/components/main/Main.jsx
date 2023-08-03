import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoodsList, OrderedList } from "..";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { API_KEY, API_URL } from "../../config";
import { Loading } from "../index";
const Main = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [data, setData] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  
  // order product function
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

  // func Basket show
  const changeBasketShow = () => {
    setBasketShow((prev) => !prev);
  };

  // Get data from serice
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

  // function delete item from basket

  const deleteItemFromBasket = (id) => {
    const newOrderList = ordered.filter((obj) => obj.id !== id)
    setOrdered(newOrderList)
  }


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
        onClick={changeBasketShow}
      >
        <Badge badgeContent={ordered.length} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
      {isLoad ? (
        <>
          <br />
          <Loading />
        </>
      ) : (
        <GoodsList orderedProduct={orderedProduct} data={data} />
      )}
      {isBasketShow && <OrderedList deleteItemFromBasket = {deleteItemFromBasket} changeBasket={changeBasketShow} ordered={ordered} />}
    </div>
  );
};

export default Main;
