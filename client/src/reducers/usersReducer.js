export const usersInitialState = {
  user: {},
  isUserLoggedIn: false,
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isUserLoggedIn: true,
      };

    case "LOGOUT":
      return usersInitialState;

    default:
      return state;
  }
};
