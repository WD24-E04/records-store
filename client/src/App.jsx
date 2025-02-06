import React, { useContext } from "react";
import { DataContext } from "./contexts/Context";
import { login, logout } from "./api/usersApi";

const App = () => {
  const { usersDispatch } = useContext(DataContext);
  const formData = {
    email: "test3@test.com",
    password: "1234",
  };

  return (
    <div>
      <button onClick={() => login(usersDispatch, formData)}>Login</button>
      <button onClick={() => logout(usersDispatch)}>Logout</button>
    </div>
  );
};

export default App;
