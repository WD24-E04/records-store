import React, { useContext } from "react";
import { DataContext } from "../contexts/Context";
import { login, logout, register } from "../api/usersApi";
import { getAllRecords } from "../api/recordsApi";
import { getCartData, addCartItem } from "../api/cartsApi";

export const Testing = () => {
  const { usersDispatch, recordsDispatch, cartsDispatch, usersState } =
    useContext(DataContext);

  const registerFormData = {
    firstName: "test",
    lastName: "test",
    email: "test2@test.com",
    password: "1234",
  };

  const loginFormData = {
    email: "test2@test.com",
    password: "1234",
  };
  return (
    <div>
      <button onClick={() => register(usersDispatch, registerFormData)}>
        Register
      </button>
      <button onClick={() => login(usersDispatch, loginFormData)}>Login</button>
      <button onClick={() => logout(usersDispatch)}>Logout</button>

      <button onClick={() => getAllRecords(recordsDispatch)}>
        Get Records
      </button>

      <button
        onClick={() => getCartData(cartsDispatch, usersState.user.cartId)}
      >
        Get cart data
      </button>

      <button
        onClick={() =>
          addCartItem(
            cartsDispatch,
            usersState.user.cartId,
            "67a370686a96ffec6fcae5e5"
          )
        }
      >
        Add Cart Item
      </button>
      <button onClick={() => {}}>Delete Cart Item</button>
    </div>
  );
};
