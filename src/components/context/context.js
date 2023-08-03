import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
export const ShopContext = createContext();

const initialState = {
  isLoading: true,
  orderedProductList: [],
  data: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setData = (list) => {
    dispatch({ type: "ADD_DATA", payload: list });
  };

  value.changeLoad = () => {
    dispatch({ type: "CHANGE_LOAD" });
  };

  value.setOrderedProduct = (obj) => {
    dispatch({ type: "add_ordered_product", payload: obj });
  };
  value.changeBasketShow = () => {
    dispatch({type:'change_basket_show'})
  }
  value.minusOfProduct = (itemID) => {
     dispatch({type:"minus_amount_product",payload:{id:itemID}})
  }
  value.deleteProduct = (itemID) => {
    dispatch({type:"delete_product",payload:{id:itemID}})
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
