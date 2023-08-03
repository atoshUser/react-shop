import { toast } from "react-toastify";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_DATA": {
      return { ...state, data: payload };
    }

    case "CHANGE_LOAD": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "add_ordered_product": {
      const checkOrderedList = state.orderedProductList.some(
        (obj) => obj.id == payload.id
      );
      if (checkOrderedList) {
        const updateOrderedProduct = state.orderedProductList.map((obj) => {
          if (obj.id == payload.id) {
            return {
              ...obj,
              quantity: obj.quantity + 1,
            };
          } else {
            return { ...obj };
          }
        });
        return {
          ...state,
          orderedProductList: updateOrderedProduct,
        };
      } else {
        const newProduct = {
          ...payload,
          quantity: 1,
        };
        return {
          ...state,
          orderedProductList: [...state.orderedProductList, newProduct],
        };
      }
    }

    case "change_basket_show": {
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    }
    case "minus_amount_product": {
      const newList = state.orderedProductList.map((obj) => {
        if (obj.id == payload.id) {
          if (obj.quantity <= 1) {
            return { ...obj };
          } else {
            return {
              ...obj,
              quantity: obj.quantity - 1,
            };
          }
        } else {
          return { ...obj };
        }
      });
      return {
        ...state,
        orderedProductList: newList,
      };
    }
    case "delete_product": {
      toast.error("Product was deleted !");
      const newOrderList = state.orderedProductList.filter(
        (obj) => obj.id !== payload.id
      );

      return {
        ...state,
        orderedProductList: newOrderList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
