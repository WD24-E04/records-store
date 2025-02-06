import React, { useContext } from "react";
import { DataContext } from "./contexts/Context";

const App = () => {
  const { usersState, usersDispatch } = useContext(DataContext);

  usersDispatch({
    type: "LOGIN_SUCCESS",
    payload: { email: "", password: "" },
  });

  return <div></div>;
};

export default App;
