import React, { useContext } from "react";
import { DataContext } from "./contexts/Context";
import { login, logout } from "./api/usersApi";

const App = () => {
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
        Login
      </button>
      <button onClick={() => login(usersDispatch, loginFormData)}>Login</button>
      <button onClick={() => logout(usersDispatch)}>Logout</button>
    </div>
  );
};

export default App;
