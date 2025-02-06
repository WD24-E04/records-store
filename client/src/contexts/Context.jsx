import { createContext, useEffect, useReducer } from "react";
import { usersInitialState, usersReducer } from "../reducers/usersReducer";
import { getMyData } from "../api/usersApi";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  useEffect(() => {
    getMyData(usersDispatch);
  }, []);
  console.log("users State: ", usersState);

  return (
    <DataContext.Provider value={{ usersState, usersDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
