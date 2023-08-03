import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GoodsList, OrderedList } from "../";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { API_KEY, API_URL } from "../../config";
import { Loading } from "../index";
import { toast } from "react-toastify";
import { ShopContext } from "../context/context";
const Main = () => {
  const {
    setData,
    isBasketShow,
    changeBasketShow,
    orderedProductList,
    isLoading,
    changeLoad,
    minusOfProduct,
  } = useContext(ShopContext);

  // Get data from service
  const getData = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      setData(data.featured);
      changeLoad();
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
        onClick={changeBasketShow}
      >
        <Badge color="primary" badgeContent={orderedProductList.length}>
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
      {isLoading ? (
        <>
          <br />
          <Loading />
        </>
      ) : (
        <GoodsList />
      )}
      {isBasketShow && <OrderedList />}
    </div>
  );
};

export default Main;
