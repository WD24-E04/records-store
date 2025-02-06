import { createContext, useEffect, useReducer } from "react";
import { usersInitialState, usersReducer } from "../reducers/usersReducer";
import { getMyData } from "../api/usersApi";
import {
  recordsInitialState,
  recordsReducer,
} from "../reducers/recordsReducer";
import { cartsInitialState, cartsReducer } from "../reducers/cartsReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  const [recordsState, recordsDispatch] = useReducer(
    recordsReducer,
    recordsInitialState
  );

  const [cartsState, cartsDispatch] = useReducer(
    cartsReducer,
    cartsInitialState
  );
  console.log(cartsState);

  useEffect(() => {
    getMyData(usersDispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{
        usersState,
        usersDispatch,
        recordsState,
        recordsDispatch,
        cartsState,
        cartsDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
