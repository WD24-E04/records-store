import axios from "axios";

export const getCartData = async (dispatch, cartId) => {
  try {
    const response = await axios.get(`/carts/${cartId}`);

    dispatch({ type: "GET_CART_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const addOrUpdateCartItem = async (
  dispatch,
  cartsState,
  record,
  cartId
) => {
  try {
    //! check for item existance in the state

    const existingItem = cartsState.items?.find(
      (item) => item.record._id === record._id
    );

    /* 
   ! If item is exist: 
       create patch request to update the quantity of the item in DB and increase it by one
       Update the state with the new changes 
   */
    if (existingItem) {
      const response = await axios.patch(`/carts/${cartId}/update`, {
        quantity: existingItem.quantity + 1,
        record: record._id,
      });
      dispatch({ type: "UPDATE_CART_ITEM", payload: response.data.data });
    } else {
      //! Otherwise submit the new item to the DB
      const response = await axios.post(`/carts/${cartId}/add`, {
        record: record._id,
        quantity: 1,
      });
      dispatch({ type: "ADD_CART_ITEM", payload: response.data.data });
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

export const removeCartItem = async (dispatch, recordId, cartId) => {
  try {
    await axios.put(`/carts/${cartId}/remove`, {
      record: recordId,
    });

    dispatch({ type: "DELETE_CART_ITEM", payload: recordId });
  } catch (error) {
    console.log(error);
  }
};

export const updateCartItemQuantity = async (
  dispatch,
  usersState,
  record,
  newQuantity
) => {
  try {
    const cartId = usersState.user?.cartId;
    const response = await axios.patch(`/carts/${cartId}/update`, {
      quantity: newQuantity,
      record: record._id,
    });

    dispatch({ type: "UPDATE_CART_ITEM", payload: response.data.data });
  } catch (error) {
    console.error("Error updating item quantity:", error);
  }
};

export const addCartItem = async (
  cartsDispatch,
  cartsState,
  record,
  cartId,
  quantity = 1
) => {
  try {
    //! check for item existance in the state
    const itemToUpdate = cartsState.items?.find(
      (item) => item.record._id === record._id
    );

    if (itemToUpdate) {
      const response = await axios.patch(`/carts/${cartId}/update`, {
        quantity: itemToUpdate.quantity + 1,
        record: record._id,
      });

      cartsDispatch({ type: "UPDATE_CART_ITEM", payload: response.data.data });
      return;
    }

    const response = await axios.post(`/carts/${cartId}/add`, {
      record: record._id,
      quantity,
    });

    cartsDispatch({ type: "ADD_CART_ITEM", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};
