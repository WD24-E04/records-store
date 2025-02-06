// src/components/CartItem.jsx
import React, { useContext, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "../../styles/CartItem.scss";
import { DataContext } from "../../contexts/Context";
import {
  getCartData,
  removeCartItem,
  updateCartItemQuantity,
} from "../../api/cartsApi";

const CartItem = ({ item }) => {
  const { record } = item;
  const { cartsDispatch, usersState } = useContext(DataContext);
  const { cartId } = usersState.user;

  const handleRemoveItem = async () => {
    await removeCartItem(cartsDispatch, record._id, cartId);
    getCartData(cartsDispatch, cartId);
  };

  const handleQuantityChange = async (e) => {
    const newQuantity = Number(e.target.value);

    await updateCartItemQuantity(
      cartsDispatch,
      usersState,
      record,
      newQuantity
    );
    getCartData(cartsDispatch, cartId);
  };

  return (
    <li className="item">
      <h3 className="item__title">
        {record.title} by {record.artist}
      </h3>
      <img src={record.img} alt="thumbnail" className="item__thumbnail" />
      <div className="item__actions">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="item__quantity"
          min="1"
        />
        <AiTwotoneDelete className="item__remove" onClick={handleRemoveItem} />
      </div>
    </li>
  );
};

export default CartItem;

/* const handleAddCartItem = async (e) => {
  await addCartItem(
    cartsDispatch,
    cartsState,
    record,
    usersState.user.cartId,
    quantity
  );

  getCartData(cartsDispatch, usersState.user.cartId);
};
 */
