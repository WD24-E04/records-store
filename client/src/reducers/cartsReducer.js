export const cartsInitialState = {
  items: [],
  isOpen: false,
};

export const cartsReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return {
        ...state,
        items: action.payload.items,
      };

    case "ADD_CART_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "DELETE_CART_ITEM":
      return {};

    case "TOGGLE_CART":
      return {};

    default:
      return state;
  }
};
