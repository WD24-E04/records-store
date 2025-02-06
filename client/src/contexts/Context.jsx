import React, { createContext, useEffect, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartsReducer";
import { recordsInitialState, recordsReducer } from "../reducers/recordsReducer";
import { usersInitialState, usersReducer } from "../reducers/usersReducer";
import { getMyData } from "../api/usersApi";
import { getCartData } from "../api/cartsApi";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartsState, cartsDispatch] = useReducer(cartReducer, cartInitialState);

  const [recordsState, recordsDispatch] = useReducer(
    recordsReducer,
    recordsInitialState
  );

  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  const { user, isUserLoggedIn } = usersState;
  console.log(cartsState);

  useEffect(() => {
    getMyData(usersDispatch);
  }, []);

  useEffect(() => {
    if (user.cartId) {
      getCartData(cartsDispatch, user.cartId);
    }
  }, [isUserLoggedIn, user.cartId]);

  return (
    <DataContext.Provider
      value={{
        cartsState,
        cartsDispatch,
        recordsState,
        recordsDispatch,
        usersState,
        usersDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
