import axios from "axios";

export const getCartData = async (cartsDispatch, cartId) => {
  try {
    const response = await axios.get(`/carts/${cartId}`);

    cartsDispatch({ type: "GET_CART_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const addCartItem = async (cartsDispatch, cartId, recordId) => {
  try {
    const response = await axios.post(`/carts/${cartId}/add`, {
      record: recordId,
      quantity: 1,
    });

    cartsDispatch({ type: "ADD_CART_ITEM", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};
