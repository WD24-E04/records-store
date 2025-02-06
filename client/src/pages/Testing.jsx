import React, { useContext } from "react";
import { DataContext } from "../contexts/Context";
import { login, logout, register } from "../api/usersApi";

export const Testing = () => {
  const { usersDispatch } = useContext(DataContext);

  const registerFormData = {
    firstName: "test",
    lastName: "test",
    email: "test3@test.com",
    password: "1234",
  };

  const loginFormData = {
    email: "test3@test.com",
    password: "1234",
  };
  return (
    <div>
      <button onClick={() => register(usersDispatch, registerFormData)}>
        Register
      </button>
      <button onClick={() => login(usersDispatch, loginFormData)}>Login</button>
      <button onClick={() => logout(usersDispatch)}>Logout</button>
    </div>
  );
};
