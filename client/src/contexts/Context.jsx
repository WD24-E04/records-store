import { createContext, useReducer } from "react";
import { usersInitialState, usersReducer } from "../reducers/usersReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  console.log("users State: ", usersState);

  return (
    <DataContext.Provider value={{ usersState, usersDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
